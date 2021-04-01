-- https://www.codewars.com/kata/54ff3102c1bad923760001f3

module Codewars.Kata.Vowel where

getCount :: String -> Int
getCount [] = 0
getCount (x:xs)
  | elem x "aeiou" = 1 + next
  | otherwise = next
  where next = getCount xs

