(ns boids.core
  (:use [cljs.core.async :only [<! >! timeout chan close!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def canvas (.getElementById js/document "sky"))
(def canvas-color "white")
(def context (.getContext canvas "2d"))
(def canvas-dimensions [(.-width canvas)
                        (.-height canvas)])

(def boids (atom {}))

(defn print-func [x]
  (. js/console (log (str x))))

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

;; math ops
(defn distance
  [[x1 y1] [x2 y2]]
  (Math/sqrt (+ (Math/pow (- x1 x2) 2)
                (Math/pow (- y1 y2) 2))))

(defn sum-vectors
  [first-vec & vecs]
  (apply mapv + first-vec vecs))

(defn normalize-vector
  [v]
  (let [squared (mapv #(Math/pow % 2) v)
        summed (reduce + squared)
        rooted (Math/sqrt summed)]
    (mapv #(/ % rooted) v)))

(def min-separation 20)

;; turn funcs and helpers
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
                    (apply mapv +)
                    (mapv #(/ % (count neighbors))))]
    (heading-to-dest bird center)))

(defn maintain-separation 
  [flock {:keys [xy] :as bird}]
  (let [birds-too-close (filter #(< (distance xy (:xy %)) min-separation) 
                                flock)
        locations (map :xy birds-too-close)
        away-dirs (map #(direction % xy) locations)]
    (apply mapv + away-dirs)))

(defn align-direction 
  [flock bird]
  (apply mapv + (map :heading flock)))

(defn test-turn-func 
  [_ bird]
  (mapv inc (:heading bird)))

;; bird functions
(defn update-heading
  "bird, [list of birds] -> bird with new heading."
  [{:keys [turn-funcs heading] :as bird} flock]
  (let [flockers (remove (partial = bird) flock)
        list-of-new-headings (map #(% flockers bird) turn-funcs)
        new-heading (normalize-vector (apply sum-vectors 
                                             heading
                                             list-of-new-headings))]
    (assoc bird :heading new-heading)))

(defn update-coords
  [{:keys [xy heading] :as bird}]
  (assoc bird :xy (mapv Math/round (sum-vectors xy heading))))

(def turn-channel (chan))

(go
 (loop []
   (<! (timeout 500))
   (def turn-channel (chan))
   (>! turn-channel "foo")
   (close! turn-channel)
   (print-func "foo")
   (recur)))

(go (loop [] (print-func (<! turn-channel)) (recur)))

(defn register-bird!
  [bird]
  (swap! boids assoc (:uid bird) bird))

(defn animate-bird 
  [context bird]
  (go (loop [old-bird bird]
        (let [new-bird (update-coords (update-heading old-bird
                                                      (vals @boids)))]
          (<! (timeout (/ 1000 (:speed old-bird))))  

          (erase-bird! context old-bird)
          (draw-bird! context new-bird)
          (register-bird! new-bird)

          (recur new-bird)))))

;(. js/console (log "Hello world!"))

(doseq [n (range 50)]
  (register-bird!
    {:xy [(rand-int 400)
          (rand-int 400)]
     :color "black" 
     :heading [(* n 10) (* n 10)]
     :turn-funcs [adhere-to-center
                  ;;maintain-separation
                  align-direction]
     :uid n
     :speed 3000}))

(doseq [b @boids]
  (animate-bird context (second b)))
