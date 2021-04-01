;; https://www.codewars.com/kata/556deca17c58da83c00002db

(ns kata)
(defn tribonacci [[a b c] n]
  (if (<= n 3)
    (take n [a b c])
    (let [d (+ a b c)]
      (concat [a] (tribonacci [b c d] (- n 1))))))

