(ns boids.core
  (:use [cljs.core.async :only [<! >! timeout chan close! put!]])
  (:require [goog.dom :as dom]
            [goog.events :as events])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def canvas (.getElementById js/document "sky"))
(def context (.getContext canvas "2d"))
(def canvas-dimensions [(.-width canvas)
                        (.-height canvas)])

(def timeout-amount 1)
(def visible-range 200)
(def num-birds 25)
(def min-separation 30)

(def default-inertia 100)
(def inertia (atom default-inertia))
(def boids (atom {}))
(def goal (atom nil))
(def obstacle (atom nil))
(def obstacle-template {:xy [200 200] :radius 100})
(def obstacle-timeout 10000)

(defn print-func [& x]
  (. js/console (log (apply str x))))

;; canvas functions
(defn render-bird!
  [context bird color]
  (let [[x y] (:xy bird)]
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

;; math ops
(defn distance
  "tuple tuple -> Number."
  [v1 v2]
  (->> (mapv - v1 v2)
       (mapv #(Math/pow % 2))
       (reduce +)
       (Math/sqrt)))


(defn sum-vectors
  [& vecs]
  (apply mapv + vecs))

(defn normalize-vector
  [v]
  (let [squared (mapv #(Math/pow % 2) v)
        summed (reduce + squared)
        rooted (Math/sqrt summed)]
    (mapv #(/ % rooted) v)))

;; turn func helpers
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
  "bird [list of birds :as flock] Number -> [list of birds :as sub-flock]."
  [{:keys [xy] :as bird} flock radius]
  (filter #(< (distance xy (:xy %)) radius) flock))

(defn weighted-repulsion
  "tuple tuple int -> heading."
  [repulse-location location radius]
  (let [repulse-weight (/ radius (distance location repulse-location))]
    (mapv (partial * repulse-weight) 
          (direction repulse-location location))))

; turn-funcs
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
  (let [birds-too-close (birds-within-radius bird flock min-separation)
        weighted-away-dir #(weighted-repulsion (:xy %) xy min-separation)
        away-dirs (map weighted-away-dir birds-too-close)
        result (apply sum-vectors away-dirs)]
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

;; bird functions

(defn update-heading
  "bird, [list of birds] -> bird with new heading."
  [{:keys [turn-funcs heading xy] :as bird} flock]
  (let [visible-birds (remove (partial = bird) 
                              (birds-within-radius bird 
                                                   flock 
                                                   visible-range))
        list-of-new-headings (map #(% visible-birds bird)
                                  turn-funcs)
        new-heading (normalize-vector (apply sum-vectors 
                                             (mapv (partial * @inertia) heading)
                                             (remove empty? list-of-new-headings)))]
    (assoc bird :heading (mapv (partial * 3) new-heading))))

(defn update-coords
  [{:keys [xy heading] :as bird}]
  (assoc bird :xy
         (wrap (mapv Math/round (sum-vectors xy heading)))))

(defn register-bird!
  [bird]
  (swap! boids assoc (:uid bird) bird))

(defn animate-bird 
  [context bird]
  (go (loop [old-bird bird]
        (let [new-bird (update-coords (update-heading old-bird
                                                      (vals @boids)))]
          (<! (timeout (/ timeout-amount (:speed old-bird))))  
          (erase-bird! context old-bird)
          (draw-bird! context new-bird)
          (register-bird! new-bird)
          (recur new-bird)))))

#_(defn animation-loop []
  (go (while true
        (<! (timeout 100))
        (doseq [b @boids]
          (erase-bird! context b)
          (draw-bird! context b)))))


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

(doseq [n (range num-birds)]
  (register-bird!
    {:xy (mapv rand-int canvas-dimensions) 
     :color "black" 
     :heading [(* n 10) (* n 10)]
     :turn-funcs [(partial if-empty-wrapper adhere-to-center)
                  (partial if-empty-wrapper maintain-separation)
                  (partial if-empty-wrapper align-direction)
                  obstacle-avoidance
                  go-for-goal]
     :uid n
     :speed 1000}))

(doseq [b @boids]
  (animate-bird context (second b)))

(handle-events)

