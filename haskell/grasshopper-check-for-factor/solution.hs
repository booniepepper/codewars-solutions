-- https://www.codewars.com/kata/55cbc3586671f6aa070000fb

module CheckFactor where

checkForFactor :: Int -> Int -> Bool
checkForFactor base factor = base `mod` factor == 0

