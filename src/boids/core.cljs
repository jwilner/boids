(ns boids.core
  (:use [cljs.core.async :only [<! >! timeout chan close! put!]])
  (:require [goog.dom :as dom]
            [goog.events :as events]
            [boids.vector :as v])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def canvas (.getElementById js/document "sky"))
(def context (.getContext canvas "2d"))
(def canvas-dimensions [(.-width canvas) (.-height canvas)])
(def frame-rate 0)
(def timeout-amount 1)
(def pixel-speed 3)
(def num-birds 25)
(def visible-range 200)
(def min-separation 30)
(def default-inertia 100)
(def inertia (atom default-inertia))
(def goal (atom nil))
(def obstacle (atom nil))
(def obstacle-template {:xy [200 200] :radius 100})
(def obstacle-timeout 10000)

(defn print-func [& x]
  (. js/console (log (apply str x))))

;; DRAWING

(defn render-bird!
  [context bird color]
  (let [[x y] (v/as-vec (:xy bird))]
    (set! (.-fillStyle context) color)
    (.fillRect context x y 5 5)))

(defn draw-bird!
  [context bird]
  (render-bird! context bird (:color bird)))

(defn erase-bird!
  [context bird]
  (let [[x y] (:xy bird)]
    (.clearRect context x y 5 5)))

(defn render-obstacle!
  [color]
  (let [{xy :xy radius :radius} @obstacle]
    (set! (.-strokeStyle context) color)
    (.beginPath context)
    (.arc context (first xy) (second xy) (- radius 20) 0 (* 2 Math/PI))
    (.stroke context)))

(defn draw-obstacle! []
  (render-obstacle! "black"))

(defn erase-obstacle! []
  (render-obstacle! "white"))

(defn wrap [v] (mapv mod v canvas-dimensions))

(defn erase-canvas! [context]
  (let [[l w] canvas-dimensions]
    (.clearRect context 0 0 l w)))

;; MATHS

(defn distance
  "tuple tuple -> Number."
  [[v1 v2] [w1 w2]]
  (Math/sqrt
    (+ (Math/pow (- v1 w1) 2) (Math/pow (- v2 w2) 2)))
  #_(->> (mapv - v1 v2)
       (mapv #(Math/pow % 2))
       (reduce +)
       (Math/sqrt)))

(defn distance
  "tuple tuple -> Number."
  [[v1 v2] [w1 w2]]
  (Math/sqrt
    (+ (Math/pow (- v1 w1) 2) (Math/pow (- v2 w2) 2))))

(defn sum-vectors
  [& vecs]
  (apply mapv + vecs))

(defn normalize-vector
  [v]
  (let [squared (mapv #(Math/pow % 2) v)
        summed (reduce + squared)
        rooted (Math/sqrt summed)]
    (mapv #(/ % rooted) v)))

(defn if-empty-wrapper
  [func neighbors bird]
  (if (empty? neighbors)
    [0 0]
    (func neighbors bird)))

(defn direction
  [from to]
  (mapv - to from))

(defn heading-to-dest
  "bird dest -> heading."
  [{:keys [xy] :as bird} dest]
  (direction xy dest))

(defn birds-within-radius
  "Bird [List of birds] Number -> [List of birds].
  Returns all the birds in the flock within a radius of the bird. Does not
  include the bird itself."
  [{:keys [xy] :as bird} flock radius]
  (filter #(and (not= bird %) (< (distance xy (:xy %)) radius)) flock))

(defn weighted-repulsion
  "tuple tuple int -> heading."
  [repulse-location location radius]
  (let [d (distance location repulse-location)
        repulse-weight (/ radius (if (zero? d) 0.001 d))]
    (mapv (partial * repulse-weight)
          (direction repulse-location location))))

;; BEHAVIORS

(defn adhere-to-center
  "[list of birds] bird -> heading."
  [neighbors bird]
  (let [center (->> neighbors
                    (map :xy)
                    (apply sum-vectors)
                    (mapv #(/ % (count neighbors))))]
    (heading-to-dest bird center)))

(defn maintain-separation
  "Flock, bird -> heading."
  [flock {:keys [xy] :as bird}]
  (let [weighted-away-dir (fn [bird] (weighted-repulsion (:xy bird) xy min-separation))
        birds-too-close (birds-within-radius bird flock min-separation)
        away-dirs (map weighted-away-dir birds-too-close)
        result (apply sum-vectors away-dirs)]

    #_(print-func "maintain-separation" "\n\t"
                birds-too-close "\n\t"
                weighted-away-dir "\n\t"
                away-dirs "\n\t"
                result)

    (if (empty? result) [0 0] result)))

(defn align-direction
  "Flock, bird -> heading."
  [flock bird]
  (apply sum-vectors (map :heading flock)))

(defn go-for-goal
  "Flock (ignored), bird -> heading."
  [_ bird]
  (if-let [g @goal]
    (heading-to-dest bird g)
    [0 0]))

(defn obstacle-avoidance
  [_ bird]
  "Flock (ignored), bird -> heading."
  (if-let [{xy :xy radius :radius}  @obstacle]
    (if (< (distance xy (:xy bird)) radius)
      (mapv (partial * 100) (weighted-repulsion xy (:xy bird) radius))
      [0 0])
    [0 0]))

(def behaviors [] #_(map memoize [(partial if-empty-wrapper adhere-to-center)
                             (partial if-empty-wrapper align-direction)
                             (partial if-empty-wrapper maintain-separation)
                             obstacle-avoidance
                             go-for-goal]))

;; BOID CONTROL

(defn update-heading
  "bird, [list of birds] -> bird with new heading."
  [{:keys [heading xy] :as bird} flock]
  (let [visible-birds (birds-within-radius bird
                                           flock
                                           visible-range)
        list-of-new-headings (map #(% visible-birds bird) behaviors)
        new-heading (normalize-vector (apply sum-vectors
                                             (mapv (partial * @inertia) heading)
                                             (remove empty? list-of-new-headings)))]

    ;; debug
    (when (some #(js/isNaN (first %)) list-of-new-headings)
      (render-bird! context bird "red")
      (print-func list-of-new-headings)
      (throw "BOOM"))

    (assoc bird :heading (mapv (partial * pixel-speed) new-heading))))

(defn update-coords
  "bird -> bird with new xy coordinates and velocity."
  [{:keys [xy heading velocity] :as bird}]
  (assoc bird :xy
         (wrap (mapv Math/round (sum-vectors xy heading)))))

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
          (condp = t
            "mousemove" (do (reset! goal [(.-clientX e) (.-clientY e)])
                            (reset! inertia (/ default-inertia 2)))
            "mouseout" (do (reset! goal nil)
                           (reset! inertia default-inertia))
            "click" (go (do
                          (let [xy [(.-clientX e) (.-clientY e)]]
                            (when-let [o @obstacle]
                              (erase-obstacle!))
                            (reset! obstacle (assoc obstacle-template :xy xy))
                            (draw-obstacle!)
                            (<! (timeout obstacle-timeout))
                            (erase-obstacle!)
                            (reset! obstacle nil))))))))))

(handle-events)

;; WORLD TICKER

(defn tick
  [boids]
  (go (loop [boids boids]
        (<! (timeout frame-rate))

        (erase-canvas! context)
        (doseq [bird boids]
          (draw-bird! context bird))

        #_(let [boids (map (fn [bird] (-> bird
                                      (update-heading boids)
                                      (update-coords))) boids)]
          (erase-canvas! context)
          (doseq [bird boids]
            (draw-bird! context bird))
          (recur boids)))))

(tick (for [n (range num-birds)]
        {:xy (v/Vector2d. (rand-int (nth canvas-dimensions 0)) (rand-int (nth canvas-dimensions 1)))
         :color "black"
         :uid n
         :heading (v/Vector2d. (* n 10) (* n 10))}))
