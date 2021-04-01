; https://www.codewars.com/kata/556deca17c58da83c00002db

#lang racket

(provide tribonacci)

(define (tribonacci sign n)
  (if (<= n 3)
    (take sign n)
    (trib sign (- n 3))))

(define (trib sign n)
  (if (<= n 0)
    sign
    (let ([a (list-ref sign 0)]
          [b (list-ref sign 1)]
          [c (list-ref sign 2)])
      (let ([d (+ a b c)])
        (append (list a) (trib (list b c d) (- n 1)))))))

