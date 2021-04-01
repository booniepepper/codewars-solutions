-- https://www.codewars.com/kata/57eaeb9578748ff92a000009

module Mixed where

sumMix :: [Either String Int] -> Int
sumMix (Left s:others) = (read s) + sumMix others
sumMix (Right i:others) = i + sumMix others
sumMix [] = 0

