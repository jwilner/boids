(ns boids.core
  (:use [cljs.core.async :only [<! >! timeout chan close! put!]])
  (:require [goog.dom :as dom]
            [goog.events :as events]
            [boids.vector :as v])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def canvas (.getElementById js/document "sky"))
(def context (.getContext canvas "2d"))
(def two-pi (* Math/PI 2))
(def canvas-dimensions [(.-width canvas) (.-height canvas)])
(def timeout-ms 2)
(def num-birds 25)
(def visible-range (atom 200))
(def max-heading-len (atom 1))
(def max-speed (atom 4))
(def min-separation (atom 30))
(def goal (atom nil))
(def obstacle (atom nil))
(def obstacle-template {:xy (v/Vector2d. 200 200) :radius 100})
(def obstacle-timeout 10000)

(defn print-func [& x]
  (. js/console (log (apply str x))))

(defn random-hex-color []
  (str \# (.toString (Math/floor (* (Math/random)
                                     16777215))
                     16)))
;; DRAWING

(defn draw-bird!
  [{:keys [xy color size heading] :as bird}]
  (let [{x :x y :y} xy
        half (/ size 2)]
    (.save context)
    (.translate context (:x xy) (:y xy))
    (.rotate context (v/angle heading))
    (set! (.-strokeStyle context) color)
    (set! (.-lineWidth context) 2)
    (.beginPath context)
    (.moveTo context size half)
    (.lineTo context 0 0)
    (.moveTo context size half)
    (.lineTo context 0 size)
    (.closePath context)
    (.stroke context)
    (.restore context)))

(defn draw-obstacle! [obs]
  (let [{xy :xy radius :radius color :color} obs]
    (set! (.-fillStyle context) color)
    (.beginPath context)
    (.arc context (:x xy) (:y xy) (- radius 20) 0 (* 2 Math/PI))
    (.fill context)))

(defn erase-canvas! []
  (let [[l w] canvas-dimensions]
    (.clearRect context 0 0 l w)))

;; MATHS

(defn wrap [v]
  (v/wrap v (first canvas-dimensions) (second canvas-dimensions)))

(defn heading-to-dest
  "bird dest -> heading."
  [{:keys [xy] :as bird} dest]
  (v/subt dest xy))

(defn birds-within-radius
  "Bird [List of birds] Number -> [List of birds].
  Returns all the birds in the flock within a radius of the bird. Does not
  include the bird itself."
  [{:keys [xy] :as bird} flock radius]
  (filter #(and (not= bird %) (< (v/distance xy (:xy %)) radius)) flock))

(defn weighted-repulsion
  "tuple tuple int -> heading."
  [repulse-location location radius]
  (let [d (v/distance location repulse-location)
        repulse-weight (/ radius (if (zero? d) 0.001 d))]
    (v/scale
      (v/subt location repulse-location) repulse-weight)))

;; BEHAVIORS

(defn adhere-to-center
  "[list of birds] bird -> heading."
  [neighbors bird]
  (if (empty? neighbors)
    v/origin
    (heading-to-dest
      bird
      (v/scale
        (v/sum (map :xy neighbors))
        (/ 1 (count neighbors))))))

(defn maintain-separation
  "Flock, bird -> heading."
  [flock {:keys [xy] :as bird}]
  (let [min-sep @min-separation
        weighted-away-dir (fn [bird] (weighted-repulsion (:xy bird) xy min-sep))
        birds-too-close (birds-within-radius bird flock min-sep)
        away-dirs (map weighted-away-dir birds-too-close)
        result (v/sum away-dirs)]
    result))

(defn align-heading
  "Flock, bird -> heading."
  [flock bird]
  (if (empty? flock)
    v/origin
    (v/scale (v/sum (map :heading flock))
             (count flock))))

(defn go-for-goal
  "Flock (ignored), bird -> heading."
  [_ bird]
  (if-let [g @goal]
    (heading-to-dest bird g)
    v/origin))

(defn obstacle-avoidance
  [_ bird]
  "Flock (ignored), bird -> heading."
  (if-let [{xy :xy radius :radius}  @obstacle]
    (if (< (v/distance xy (:xy bird)) radius)
      (v/scale (weighted-repulsion xy (:xy bird) radius) 100)
      v/origin)
    v/origin))

(def all-behaviors [adhere-to-center
                    align-heading
                    maintain-separation
                    obstacle-avoidance
                    go-for-goal])

(def behaviors (atom #{}))

;; BOID CONTROL

(defn update-heading
  "bird, [list of birds] -> bird with new heading."
  [{:keys [heading xy] :as bird} flock behaviors]
  (let [visible-birds (birds-within-radius bird flock @visible-range)
        list-of-new-headings (map #(% visible-birds bird) behaviors)
        new-heading (v/normalize (v/sum list-of-new-headings))]
    (assoc bird :heading (v/ceil (v/add heading new-heading) @max-heading-len))))

(defn update-coords
  "bird -> bird with new xy coordinates and velocity."
  [{:keys [xy heading velocity] :as bird}]
  (assoc bird :xy (wrap (v/add velocity xy))
         :velocity (v/ceil (v/add velocity heading)
                           @max-speed)))

;; EVENTS

(defn listen
  "DOM element -> channel."
  [el & types]
  (let [out (chan)]
    (doseq [t types] (events/listen el t #(put! out %)))
    out))

(defn handle-events []
  (let [events (listen (dom/getElement "sky") "mousemove" "mouseout" "click")]
    (go
      (while true
        (let [e (<! events)
              t (.-type e)]
          (case t
            "mousemove" (reset! goal (v/Vector2d. (.-clientX e) (.-clientY e)))
            "mouseout" (reset! goal nil)
            "click" (go (do
                          (let [x (.-clientX e)
                                y (.-clientY e)]
                            (reset! obstacle (assoc obstacle-template
                                                    :xy (v/Vector2d. x y)
                                                    :color (random-hex-color)))
                            (<! (timeout obstacle-timeout))
                            (reset! obstacle nil))))))))))

(handle-events)

;; UI

(defn checkbox! [parent func-name]
  (let [li (dom/createElement "li")
        label-node (dom/createElement "label")
        text (dom/createTextNode (str " " func-name))
        input (dom/createElement "input")]
    (set! (.-type input) "checkbox")
    (.appendChild parent li)
    (.appendChild li label-node)
    (.appendChild label-node input)
    (.appendChild label-node text)
    input))

(defn slider!
  [parent prop]
  (let [li (dom/createElement "li")
        label-node (dom/createElement "label")
        text (dom/createTextNode (str " " prop ": "))
        input (dom/createElement "input")
        span (dom/createElement "span")]
    (set! (.-type input) "range")
    (.appendChild parent li)
    (.appendChild li label-node)
    (.appendChild label-node text)
    (.appendChild label-node span)
    (.appendChild label-node (dom/createElement "br"))
    (.appendChild label-node input)
    [input span]))

(defn assoc-checkbox
  [checkbox function]
  (let [el (listen checkbox "change")]
    (go
      (while true
        (let [e (<! el)
              checked (.-checked (.-target e))
              action (if checked conj disj)]
          (swap! behaviors #(action % function)))))))

(defn assoc-slider [[slider span] prop minimum maximum default]
  (let [el (listen slider "change")]
    (set! (.-min slider) minimum)
    (set! (.-max slider) maximum)
    (set! (.-value slider) default)
    (set! (.-innerText span) default)
    (go
      (while true
        (let [e (<! el)
              value (.-value (.-target e))]
          (set! (.-innerText span) value)
          (reset! prop value))))))

(let [box (dom/getElement "box")]
  (doseq [[fname func] [["maintain-separation" maintain-separation]
                        ["adhere-to-center" adhere-to-center]
                        ["align-heading" align-heading]
                        ["obstacle-avoidance" obstacle-avoidance]
                        ["go-for-goal" go-for-goal]]]
    (assoc-checkbox (checkbox! box fname) func))
  (.appendChild box (dom/createElement "hr"))
  (assoc-slider (slider! box "visible-range")
                visible-range 50 500 200)
  (assoc-slider (slider! box "min-sep")
                min-separation 1 400 30)
  (assoc-slider (slider! box "max-heading")
                max-heading-len 1 20 1)
  (assoc-slider (slider! box "max-speed")
                max-speed 1 20 2))

;; WORLD TICKER

(defn tick
  [boids]
  (go (loop [boids boids]
        (<! (timeout timeout-ms))
        (erase-canvas!)
        (when-let [o @obstacle]
          (draw-obstacle! o))
        (doseq [bird boids]
          (draw-bird! bird))
        (let [bs @behaviors]
          (recur (map (fn [bird] (-> bird
                                     (update-heading boids bs)
                                     (update-coords)))
                    boids))))))

(defn sign [] (if (< (rand) .5) -1 1))

(tick (for [n (range num-birds)]
        {:xy (v/Vector2d. (rand-int (first canvas-dimensions))
                          (rand-int (second canvas-dimensions)))
         :color (random-hex-color)
         :size 8
         :uid n
         :velocity v/origin
         :heading (v/Vector2d. (* (sign) (rand-int (first canvas-dimensions)))
                               (* (sign) (rand-int (second canvas-dimensions))))}))
