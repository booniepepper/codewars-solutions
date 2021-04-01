;; https://www.codewars.com/kata/515f51d438015969f7000013

(ns kata.pyramid)
(defn pyramid [n]
  (map
    (fn [len] (repeat (+ 1 len) 1))
    (range n)))

