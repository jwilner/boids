(ns boids.core
  (:use [cljs.core.async :only [<! >! timeout chan close! put!]])
  (:require [goog.dom :as dom]
            [goog.events :as events]
            [boids.vector :as v])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def canvas (.getElementById js/document "sky"))
(def context (.getContext canvas "2d"))
(def canvas-dimensions [(.-width canvas) (.-height canvas)])
(def timeout-ms 8)
(def num-birds 25)
(def visible-range 200)
(def max-heading-len 3)
(def min-separation 20)
(def default-inertia 10)
(def inertia (atom default-inertia))
(def goal (atom nil))
(def obstacle (atom nil))
(def obstacle-template {:xy (v/Vector2d. 200 200) :radius 100 :color "black"})
(def obstacle-timeout 10000)

(defn print-func [& x]
  (. js/console (log (apply str x))))

;; DRAWING

(defn draw-bird!
  [bird]
  (set! (.-fillStyle context) (:color bird))
  (.fillRect context (:x (:xy bird)) (:y (:xy bird)) 5 5))

(defn draw-obstacle! [obs]
  (let [{xy :xy radius :radius color :color} obs]
    (set! (.-strokeStyle context) color)
    (.beginPath context)
    (.arc context (:x xy) (:y xy) (- radius 20) 0 (* 2 Math/PI))
    (.fill context)))

(defn erase-canvas! []
  (let [[l w] canvas-dimensions]
    (.clearRect context 0 0 l w)))

;; MATHS

(defn wrap [v]
  (v/wrap v (first canvas-dimensions) (second canvas-dimensions)))

(defn if-empty-wrapper
  [func neighbors bird]
  (if (empty? neighbors)
    (v/Vector2d. 0 0)
    (func neighbors bird)))

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
  (heading-to-dest
    bird
    (v/scale
      (v/sum (map :xy neighbors))
      (/ 1 (count neighbors)))))

(defn maintain-separation
  "Flock, bird -> heading."
  [flock {:keys [xy] :as bird}]
  (let [weighted-away-dir (fn [bird] (weighted-repulsion (:xy bird) xy min-separation))
        birds-too-close (birds-within-radius bird flock min-separation)
        away-dirs (map weighted-away-dir birds-too-close)
        result (v/sum away-dirs)]

    #_(print-func "DEBUG maintain-separation" "\n\t"
                  birds-too-close "\n\t"
                  weighted-away-dir "\n\t"
                  away-dirs "\n\t"
                  result)

    result))

(defn align-heading
  "Flock, bird -> heading."
  [flock bird]
  (v/scale (v/sum (map :heading flock))
           (count flock)))

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

(def behaviors [(partial if-empty-wrapper adhere-to-center)
                (partial if-empty-wrapper align-heading)
                (partial if-empty-wrapper maintain-separation)
                obstacle-avoidance
                go-for-goal])

;; BOID CONTROL

(defn update-heading
  "bird, [list of birds] -> bird with new heading."
  [{:keys [heading xy] :as bird} flock]
  (let [visible-birds (birds-within-radius bird flock visible-range)
        list-of-new-headings (map #(% visible-birds bird) behaviors)
        new-heading (v/normalize (v/sum list-of-new-headings))]

    ;; debug
    #_(when (some #(js/isNaN (:x %)) list-of-new-headings)
        (render-bird! bird "red")
        (print-func list-of-new-headings)
        (throw "BOOM"))

    (assoc bird :heading (v/ceil (v/add heading new-heading) max-heading-len))))

(defn update-coords
  "bird -> bird with new xy coordinates and velocity."
  [{:keys [xy heading velocity] :as bird}]
  (assoc bird :xy (wrap (v/add xy heading))))

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
            "mousemove" (do (reset! goal (v/Vector2d. (.-clientX e) (.-clientY e)))
                            (reset! inertia (/ default-inertia 2)))
            "mouseout" (do (reset! goal nil)
                           (reset! inertia default-inertia))
            "click" (go (do
                          (let [x (.-clientX e)
                                y (.-clientY e)]
                            (reset! obstacle (assoc obstacle-template
                                                    :xy (v/Vector2d. x y)))
                            (<! (timeout obstacle-timeout))
                            (reset! obstacle nil))))))))))

(handle-events)

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
        (recur (map (fn [bird] (-> bird
                                   (update-heading boids)
                                   (update-coords)))
                    boids)))))

(defn sign [] (if (< (rand) .5) -1 1))

(tick (for [n (range num-birds)]
        {:xy (v/Vector2d. (rand-int (first canvas-dimensions))
                          (rand-int (second canvas-dimensions)))
         :color "black"
         :uid n
         :heading (v/Vector2d. (* (sign) (rand-int (first canvas-dimensions)))
                               (* (sign) (rand-int (second canvas-dimensions))))}))
