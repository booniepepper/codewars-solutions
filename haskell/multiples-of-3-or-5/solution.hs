-- https://www.codewars.com/kata/514b92a657cdc65150000006

module MultiplesOf3And5 where

solution :: Integer -> Integer
solution a = sum [b | b <- [1..a-1], b `mod` 3 == 0 || b `mod` 5 == 0]

