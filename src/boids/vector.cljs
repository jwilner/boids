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

(defn sum
  [coll]
  (reduce add origin coll))

;;
;; TESTS
;;

(defn eq-test
  [v1 v2]
  (try
  (assert (= (as-vec v1)
             (as-vec v2)))
    (catch js/Error e
      (print-func (as-vec v1) (as-vec v2)))))

(def origin (Vector2d. 0 0))

;; add

(eq-test (Vector2d. 42 12)
         (add (Vector2d. 0 0) (Vector2d. 42 12)))
(eq-test origin
         (add (Vector2d. -1 -2) (Vector2d. 1 2)))

;; subt

(eq-test (Vector2d. 1 0) (subt
                           (Vector2d. 2 2) (Vector2d. 1 2)))
(eq-test (Vector2d. -1 0) (subt
                           (Vector2d. 1 2) (Vector2d. 2 2)))

;; distance

(assert (= 5
           (distance origin (Vector2d. 3 4))))
(assert (= 5
           (distance origin (Vector2d. -3 4))))
(assert (= 5
           (distance origin (Vector2d. 3 -4))))
(assert (= 5
           (distance (Vector2d. 6 8) (Vector2d. 3 4))))

;; length

(assert (= (Math/sqrt 34) (length (Vector2d. 3 5))))

;; scale

(eq-test (Vector2d. 1 1) (scale (Vector2d. 4 4) 0.25))

;; normalize

(eq-test (Vector2d. (/ 1 (Math/sqrt 2)) (/ 1 (Math/sqrt 2)))
         (normalize (Vector2d. 1 1)))

;; wrap

(eq-test (Vector2d. 5 5)
         (wrap (Vector2d. 5 5) 10 10))
(eq-test origin
         (wrap (Vector2d. 10 10) 10 10))
(eq-test (Vector2d. 1 1)
         (wrap (Vector2d. 11 11) 10 10))

;; sum
(sum [origin origin origin])
(eq-test origin (sum [origin origin origin]))
