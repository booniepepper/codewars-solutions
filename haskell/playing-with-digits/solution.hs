-- https://www.codewars.com/kata/5552101f47fc5178b1000050

module Codewars.Kata.DigPow where

digpow :: Integer -> Integer -> Integer
digpow n p
  | sumOfDigitPows `mod` n == 0 = sumOfDigitPows `div` n
  | otherwise                   = -1
  where sumOfDigitPows = sumSuccPows (digits n) p

digits :: Integer -> [Integer]
digits n
  | n `div` 10 == 0 = [n `mod` 10]
  | otherwise       = digits (n `div` 10) ++ [n `mod` 10]

sumSuccPows :: [Integer] -> Integer -> Integer
sumSuccPows xs pow = sum [(fst a) ^ (snd a) | a <- zip xs [pow..]]

