; https://www.codewars.com/kata/55edaba99da3a9c84000003b

#lang racket

(provide divisible-by)

(define (divisible-by numbers divisor)
  (filter
    (lambda (n) (= 0 (remainder n divisor)))
    numbers))

