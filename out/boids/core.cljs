(ns boids.core
  (:use [cljs.core.async :only [<! >! timeout]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def canvas (.getElementById js/document "sky"))
(def canvas-color "white")
(def context (.getContext canvas "2d"))
(def canvas-dimensions [(.-width canvas)
                        (.-height canvas)])

(let [[x y] canvas-dimensions]
  (set! (.-fillStyle context) "white")
  (.fillRect context 0 0 x y))

(defn print-func [x]
  (. js/console (log (str x))))

(defn render-bird!
  [context bird color]
  (let [[x y] (:xy bird)]
    (set! (.-fillStyle context) color)
    (.fillRect context x y 10 10)))

(defn draw-bird! 
  [context bird]
  (print-func "Drawing: ")
  (print-func (:xy bird))
  (render-bird! context bird (:color bird)))

(defn erase-bird! 
  [context bird]
  (print-func "Erasing: ")
  (print-func (:xy bird))
  (let [[x y] (:xy bird)]
    (.clearRect context x y 10 10)))


(defn sum-vectors
  [first-vec & vecs]
  (apply mapv + first-vec vecs))

(defn normalize-vector
  [v]
  (let [squared (mapv #(Math/pow % 2) v)
        summed (reduce + squared)
        rooted (Math/sqrt summed)]
    (mapv #(/ % rooted) v)))

(defn test-turn-func [bird]
  (mapv inc (:heading bird)))

(defn update-heading
  [{:keys [turn-funcs heading] :as bird}]
  (let [list-of-new-headings (map #(% bird) turn-funcs)
        new-heading (normalize-vector (apply sum-vectors 
                                             heading
                                             list-of-new-headings))]
    (assoc bird :heading new-heading)))

(defn update-coords
  [{:keys [xy heading] :as bird}]
  (assoc bird :xy (mapv Math/round (sum-vectors xy heading))))

(defn animate-bird 
  [context bird]
  (go (loop [old-bird bird]
        (let [new-bird (update-coords (update-heading old-bird))]
          (<! (timeout (/ 1000 (:speed old-bird))))  
          (erase-bird! context old-bird)
          (draw-bird! context new-bird)
          (recur new-bird)))))

(. js/console (log "Hello world!"))


(animate-bird context {:xy [0 0] 
                       :color "black" 
                       :heading [0 0]
                       :turn-funcs [test-turn-func]
                       :speed 30})


