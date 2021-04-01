; https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

#lang racket
(provide century)

(define (century year)
  (add1 (floor (/ (sub1 year) 100))))

