(ns boids.vector)

(defn square [n] (Math/pow n 2))

(defprotocol ISpatialVector
  (as-vec [this] "Returns the SpatialVector as a Persistent Vector")
  (add [this other] "Adds two vectors (coordinate-wise).")
  (subt [this other] "Subtracts the 2nd from the 1st (coordinate-wise).")
  (distance [this other] "Euclidean distance between two SpatialVectors.")
  (length [this] "Distance to zero.")
  (wrap [this modulus] "Mods the vector by modulus (coordinate-wise)."))

(defprotocol IVector2d
  (x [this])
  (y [this]))

(deftype Vector2d
  [v1 v2]
  ISpatialVector
  (add [this other]
    (Vector2d. (+ (x this) (x other)) (+ (y this) (y other))))
  (subt [this other]
    (Vector2d. (- (x this) (x other)) (- (y this ) (y other))))
  (as-vec [this]
    [v1 v2])
  (distance
    [this other]
    (Math/sqrt
      (+ (square (- (nth this 0) (nth other 0)))
         (square (- (nth this 1) (nth other 1))))))
  (length [this]
    (distance this (Vector2d. 0 0)))
  (wrap [this modulus]
    (Vector2d. (mod (x this) modulus) (mod (y this) modulus)))
  IVector2d
  (x [this] v1)
  (y [this] v2))

(defn print-func [& x]
  (. js/console (log (apply str x))))

(defn printv
  [vector2d]
  (print-func (as-vec vector2d)))
