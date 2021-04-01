-- https://www.codewars.com/kata/55466989aeecab5aac00003e

module Codewars.Kata.Rectangle where

squaresInRect :: Integer -> Integer -> Maybe [Integer]
squaresInRect lng wdth
  | lng == wdth = Nothing
  | otherwise   = Just (findSquares lng wdth)

findSquares :: Integer -> Integer -> [Integer]
findSquares a b
  | a == b    = [a]
  | otherwise = [c] ++ (findSquares c (d - c))
  where
    c = min a b
    d = max a b

