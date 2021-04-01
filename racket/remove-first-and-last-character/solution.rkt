; https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

#lang racket

(provide remove-char)

(define (remove-char str)
  (let ([len (string-length str)])
    (let ([end (- len 1)])
      (substring str 1 end))))

