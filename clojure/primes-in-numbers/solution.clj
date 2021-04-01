;; https://www.codewars.com/kata/54d512e62a5e54c96200019e

(ns prime-decomp.core)
(use '[clojure.string :only (join)])

(defn divisible? [a b] (= 0 (rem a b)))

(defn format-factor [[n freq]]
  (cond
    (= freq 0) ""
    (= freq 1) (join (list "(" n ")"))
    :else (join (list "(" n "**" freq ")"))))

(defn prime-factors 
  ([n]
    (join
      (map format-factor 
        (frequencies (reverse (prime-factors n 2 ()))))))
  ([n f factors] 
    (if (= 1 n)      
      factors
      (if (divisible? n f)
        (recur (quot n f) f (cons f factors))
        (recur n (inc f) factors)))))

