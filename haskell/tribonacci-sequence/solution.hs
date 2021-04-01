-- https://www.codewars.com/kata/556deca17c58da83c00002db

module Tribonacci where

tribonacci :: Num a => (a, a, a) -> Int -> [a]
tribonacci _ 0 = []
tribonacci (a, _, _) 1 = [a]
tribonacci (a, b, _) 2 = a:[b]
tribonacci (a, b, c) n = trib (a:b:[c]) (a,b,c) (n - 3)

trib :: Num a => [a] -> (a, a, a) -> Int -> [a]
trib ns _ 0 = ns
trib ns (a, b, c) n = trib (ns ++ [d]) (b, c, d) (n - 1)
    where d = a + b + c

