; https://www.codewars.com/kata/5e23eadb0879110028b96424

#lang racket

(provide
  square
  average
  absolute-value
  improve
  good-enough?
  try
  square-root)

(define (square x)
    (* x x))

(define (average x y)
    (/ (+ x y) 2))
    
(define (absolute-value x)
    (if (< x 0) (- x)
        x))

(define (improve guess x)
    (average guess (/ x guess)))

(define (good-enough? guess x)
  (< (abs (- (square guess) x))
     .001))

(define (try guess x)
  (if (good-enough? guess x)
      guess
      (try (improve guess x) x)))

(define (square-root x) (try 1 x))

