; https://www.codewars.com/kata/55d24f55d7dd296eb9000030

#lang racket
(provide summation)

(define (summation n)
  (for/sum ([i (in-range 0 n)]) (add1 i)))

