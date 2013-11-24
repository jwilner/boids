(ns boids.core
  (:use [cljs.core.async :only [<! >! timeout]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def canvas (.getElementById js/document "sky"))
(def canvas-color "white")
(def context (.getContext canvas "2d"))
(def canvas-dimensions {:x (.-width canvas)
                        :y (.-height canvas)})

(defn render-bird!
  [context bird color]
  (let [[x y] (:xy bird)]
    (set! (.-fillStyle context) color)
    (.fillRect context x y 10 10)))

(defn draw-bird! 
  [context bird]
  (render-bird! context bird "black"))

(defn erase-bird! 
  [context bird]
  (render-bird! context bird canvas-color))

(defn print-func [x]
  (. js/console (log (str x))))

(defn sum-vectors
  [first-vec & vecs]
  (apply mapv + first-vec vecs))

(defn normalize-vector
  [v]
  (let [squared (mapv #(Math/pow % 2) v)
        summed (reduce + squared)
        rooted (Math/sqrt summed)]
    (print-func summed)
    (mapv #(/ % rooted) v)))

(defn test-turn-func [bird]
  (mapv inc (:heading bird)))

(defn update-heading
  [{:keys [turn-funcs heading] :as bird}]
  (let [list-of-new-headings (map #(% bird) turn-funcs)
        new-heading (normalize-vector (sum-vectors heading
                                                   list-of-new-headings))]
    (assoc bird :heading new-heading)))

(defn update-coords
  [{:keys [xy heading] :as bird}]
  (assoc bird :xy (sum-vectors xy heading)))

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
                       :turn-funcs []
                       :speed 30})

