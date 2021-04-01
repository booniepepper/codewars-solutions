-- https://www.codewars.com/kata/5208f99aee097e6552000148

module Codewars.Kata.BreakCamelCase where
import Data.Char (isUpper)

spacedUpper :: Char -> String
spacedUpper c
  | isUpper c = ' ':[c]
  | otherwise = [c]

solution :: String -> String
solution (c:s) = c:(concatMap spacedUpper s)

