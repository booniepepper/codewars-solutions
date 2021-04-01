-- https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

module Kata.ArrayPlusArray where

arrayPlusArray :: [Int] -> [Int] -> Int
arrayPlusArray = (sum .) . (++)

