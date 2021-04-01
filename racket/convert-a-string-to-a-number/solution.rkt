; https://www.codewars.com/kata/544675c6f971f7399a000e79

#lang racket
(provide string-to-number)

(define (string-first str) (string-ref str 0))
(define (string-rest str) (substring str 1))
(define (negative n) (- 0 n))
(define (char-to-number c) (- (char->integer c) 48))

(define (string-to-number str [prev 0])
  (if (= 0 (string-length str))
      prev
      (if (equal? #\- (string-first str))
          (negative (string-to-number (string-rest str)))
          (let ([prev
                 (+
                  (* 10 prev)
                  (char-to-number (string-first str)))])
            (string-to-number (string-rest str) prev)))))

