; https://www.codewars.com/kata/515f51d438015969f7000013

#lang racket

(provide pyramid)

(define (pyramid n)
  (define (to-ones n) (make-list n 1))
  (define n-rows (range 1 (add1 n)))
  (map to-ones n-rows))

