;; https://www.codewars.com/kata/56efab15740d301ab40002ee

(ns operarray.core)

(defn abs [a]
  (if (>= a 0) a (- a)))

(defn gcdi [a b]
  (defn gcd [a b] (if (= b 0) a (gcd b (mod a b))))
  (gcd (abs a) (abs b)))

(defn lcmu [a b]
  (quot (abs (* a b)) (gcdi a b)))

(def som +)

(defn maxi [a b] 
  (if (> a b) a b))

(defn mini [a b] 
  (if (< a b) a b))

(defn oper-array [f arr init]
  (rest (reductions f init arr)))

