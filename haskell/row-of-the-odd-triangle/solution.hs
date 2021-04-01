-- https://www.codewars.com/kata/5d5a7525207a674b71aa25b5

module Solution where

oddRow :: Integer -> [Integer]
oddRow row = [base + n * 2 + 1 | n <- [0..row - 1]]
             where base = row * (row - 1)

