-- https://www.codewars.com/kata/529eef7a9194e0cbc1000255

module Codewars.Anagram where
import Data.List
import Distribution.Simple.Utils

isAnagramOf :: String -> String -> Bool
isAnagramOf a b = (sort $ lowercase a) == (sort $ lowercase b)

