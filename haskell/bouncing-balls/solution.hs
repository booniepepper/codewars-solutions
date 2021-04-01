-- https://www.codewars.com/kata/5544c7a5cb454edb3c000047

module Codewars.Kata.BouncingBall where

bouncingBall :: Double -> Double -> Double -> Integer
bouncingBall height bounce window
  | height <= 0 = -1
  | bounce <= 0 || 1 <= bounce = -1
  | height <= window = -1
  | otherwise = 1 + bouncingBall' (height * bounce) bounce window

bouncingBall' :: Double -> Double -> Double -> Integer
bouncingBall' height bounce window
  | height > window = 2 + bouncingBall' (height * bounce) bounce window
  | otherwise = 0

