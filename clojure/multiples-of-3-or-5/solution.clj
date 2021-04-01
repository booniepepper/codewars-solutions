;; https://www.codewars.com/kata/514b92a657cdc65150000006

(ns multiples)

(defn divisible? [a b] (= 0 (mod a b)))

(defn solution [number]
  (reduce +
    (filter
      (fn [n] (or (divisible? n 3) (divisible? n 5)))
      (range 1 number))))

