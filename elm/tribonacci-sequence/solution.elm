-- https://www.codewars.com/kata/556deca17c58da83c00002db

module Kata exposing (tribonacci)

tribonacci : (Float, Float, Float) -> Int -> List Float
tribonacci (a, b, c) n = 
  case n of
    0 -> []
    _ -> [a] ++ tribonacci (b, c, a+b+c) (n-1)

