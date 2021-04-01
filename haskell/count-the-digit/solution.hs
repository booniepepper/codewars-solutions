-- https://www.codewars.com/kata/566fc12495810954b1000030

module Codewars.G964.Countdig where

nbDig :: Int -> Int -> Int
nbDig n d = sum [digitOcc (k^2) d | k <- [0..n]]

-- Digit occurrences of digit d in number n
digitOcc :: Int -> Int -> Int
digitOcc n d
  | n == d          = 1
  | n `div` 10 == 0 = 0
  | n `mod` 10 == d = 1 + digitOcc (n `div` 10) d
  | otherwise       = digitOcc (n `div` 10) d

