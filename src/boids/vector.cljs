(ns boids.vector)

(defn square [n] (Math/pow n 2))

(defprotocol ISpatialVector
  (as-vec [this] "SpatialVector -> Persistent Vector")
  (add [this other] "Adds two vectors (coordinate-wise).")
  (subt [this other] "Subtracts the 2nd from the 1st (coordinate-wise).")
  (distance [this other] "Euclidean distance between two SpatialVectors.")
  (length [this] "Distance to zero.")
  (normalize [this] "Divides a vector by its length, returning a vector of length = 1.")
  (wrap [this modulus-x modulus-y] "Mods the vector by modulus (coordinate-wise)."))

(deftype Vector2d
  [x y]
  ISpatialVector
  (add [this other]
    (Vector2d. (+ (:x this) (x other)) (+ (:y this) (:y other))))
  (subt [this other]
    (Vector2d. (- (:x this) (:x other)) (- (:y this ) (:y other))))
  (as-vec [this] [x y])
  (distance
    [this other]
    (Math/sqrt
      (+ (square (- (nth this 0) (nth other 0)))
         (square (- (nth this 1) (nth other 1))))))
  (length [this]
    (distance this (Vector2d. 0 0)))
  (normalize [this] (let [l (length this)]
      (Vector2d. (/ (:x this) l) (/ (:y this) l))))
  (wrap [this modulus-x modulus-y]
    (Vector2d. (mod (:x this) modulus-x) (mod (y this) modulus-y)))
  ILookup
  (-lookup [this key default]
    (condp keyword-identical? key
      :x x
      :y y
      default))
  (-lookup [this key]
    (condp keyword-identical? key
      :x x
      :y y
      nil)))

(defn print-func [& x]
  (. js/console (log (apply str x))))

(defn printv
  [vector2d]
  (print-func (as-vec vector2d)))
