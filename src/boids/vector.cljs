(ns boids.vector)

(defn square [n] (Math/pow n 2))

(defprotocol ISpatialVector
  (as-vec [this] "SpatialVector -> Persistent Vector")
  (add [this other] "Adds two vectors (coordinate-wise).")
  (subt [this other] "Subtracts the 2nd from the 1st (coordinate-wise).")
  (distance [this other] "Euclidean distance between two SpatialVectors.")
  (length [this] "Distance to zero.")
  (scale  [this l] "Scales the vector by a number l.")
  (normalize [this] "Divides a vector by its length, returning a vector of length = 1.")
  (wrap [this modulus-x modulus-y] "Mods the vector by modulus (coordinate-wise)."))

(deftype Vector2d
  [x y]
  ISpatialVector
  (as-vec [this] [x y])
  (add [this other]
    (Vector2d. (+ (:x this) (:x other)) (+ (:y this) (:y other))))
  (subt [this other]
    (Vector2d. (- (:x this) (:x other)) (- (:y this ) (:y other))))
  (distance
    [this other]
    (Math/sqrt
      (+ (square (- (:x this) (:x other)))
         (square (- (:y this) (:y other))))))
  (length [this]
    (distance this (Vector2d. 0 0)))
  (scale [this l]
    (Vector2d. (* (:x this) l)
               (* (:y this) l)))
  (normalize [this]
    (if (= 0 (length this))
      this
      (scale this (/ 1 (length this)))))
  (wrap [this modulus-x modulus-y]
    (Vector2d. (mod (Math/round (:x this)) modulus-x) (mod (Math/round (:y this)) modulus-y)))
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

;; TODO Implement the print interface
(defn print-func [& x]
  (. js/console (log (apply str x))))

(defn printv
  [vector2d]
  (print-func (as-vec vector2d)))
