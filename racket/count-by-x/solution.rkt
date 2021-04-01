; https://www.codewars.com/kata/5513795bd3fafb56c200049e

#lang racket
(provide count-by)

(define (count-by multiples-of list-length)
  (map
    (lambda (n) (* multiples-of (+ 1 n)))
    (for/list ([i (in-range list-length)]) i)))

