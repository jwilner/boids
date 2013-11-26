(ns boids.core
  (:use [cljs.core.async :only [<! >! timeout chan close!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def canvas (.getElementById js/document "sky"))
(def canvas-color "white")
(def context (.getContext canvas "2d"))
(def canvas-dimensions [(.-width canvas)
                        (.-height canvas)])

(def visible-range 100)
(def inertia 1000)
(def num-birds 20)

(def boids (atom {}))

(def min-separation 30)

(def goal (atom [200 200]))

(defn print-func [& x]
  (. js/console (log (apply str x))))

;; canvas functions
(defn render-bird!
  [context bird color]
  (let [[x y] (:xy bird)]
    (set! (.-fillStyle context) color)
    (.fillRect context x y 10 10)))

(defn draw-bird! 
  [context bird]
  (render-bird! context bird (:color bird)))

(defn erase-bird! 
  [context bird]
  (let [[x y] (:xy bird)]
    (.clearRect context x y 10 10)))

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

;; turn funcs and helpers

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

(defn adhere-to-center
  "[list of birds] bird -> heading."
  [neighbors bird]
  (let [center (->> neighbors
                    (map :xy)
                    (apply sum-vectors)
                    (mapv #(/ % (count neighbors))))]
    (heading-to-dest bird center)))

;; TODO birds-within-radius infactor

(defn birds-within-radius
  "bird [list of birds :as flock] Number -> [list of birds :as sub-flock]."
  [{:keys [xy] :as bird} flock radius]
  (filter #(< (distance xy (:xy %)) radius) flock))

(defn maintain-separation 
  "Flock, bird -> heading."
  [flock {:keys [xy] :as bird}]
  (let [birds-too-close (birds-within-radius bird flock min-separation)
        weight (fn [b2]
                 (/ min-separation (distance xy (:xy b2))))
        get-away-dir (fn [bird] (direction (:xy bird) xy))
        weighted-away-dir (fn [bird] (mapv #(* (weight bird) %) (get-away-dir bird)))
        ;away-dirs (remove (comp js/isNaN first) (map weighted-away-dir birds-too-close))
        away-dirs (map weighted-away-dir birds-too-close)
        result (apply sum-vectors away-dirs)]
  ;  (when (js/isNaN (first result)) (print-func result (:xy bird) away-dirs))
    (if (empty? result) [0 0] result)))

(defn align-direction 
  [flock bird]
  (apply sum-vectors (map :heading flock)))

(defn go-for-goal
  [_ bird]
  ;(print-func (heading-to-dest bird @goal))
  (heading-to-dest bird @goal))

;; bird functions
(defn update-heading
  "bird, [list of birds] -> bird with new heading."
  [{:keys [turn-funcs heading xy] :as bird} flock]
  (let [flockers (remove (partial = bird) flock)
        visible-birds (birds-within-radius bird flockers visible-range)
        list-of-new-headings (map (fn [func]
                                    (let [res (func visible-birds bird)]
                                     (when (empty? res)
                                      (print-func func))
                                      res))
                                       turn-funcs)
        new-heading (normalize-vector (apply sum-vectors 
                                             (mapv (partial * inertia) heading)
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
          (<! (timeout (/ 20000 (:speed old-bird))))  

          (erase-bird! context old-bird)
          (draw-bird! context new-bird)
          (register-bird! new-bird)

          (recur new-bird)))))

;(. js/console (log "Hello world!"))

(doseq [n (range num-birds)]
  (register-bird!
    {:xy (mapv rand-int canvas-dimensions) 
     :color "black" 
     :heading [(* n 10) (* n 10)]
     :turn-funcs [(partial if-empty-wrapper adhere-to-center)
                  (partial if-empty-wrapper maintain-separation)
                  (partial if-empty-wrapper align-direction)
                  go-for-goal
                  ]
     :uid n
     :speed 1000}))

(doseq [b @boids]
  (animate-bird context (second b)))
