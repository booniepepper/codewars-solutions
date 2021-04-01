-- https://www.codewars.com/kata/55edaba99da3a9c84000003b

module DivisibleBy (divisibleBy) where

divisibleBy :: [Int] -> Int -> [Int]
divisibleBy as div = [a | a <- as, a `mod` div == 0]

