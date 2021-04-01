-- https://www.codewars.com/kata/515f51d438015969f7000013

module Kata where

pyramid :: Int -> [[Int]]
pyramid 0 = []
pyramid n = [[1 | _ <- [1..a]] | a <- [1..n]]

