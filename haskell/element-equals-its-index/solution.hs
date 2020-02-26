-- https://www.codewars.com/kata/5b7176768adeae9bc9000056

module IndexEqualsValue (indexEqualsValue) where

import Data.Array.Unboxed
import Data.Foldable
import Data.Maybe

indexEqualsValue :: UArray Int Int -> Int
indexEqualsValue arr = fromMaybe (-1) $ sortedFindEqual arr bound bound
  where bound = bounds arr

sortedFindEqual :: UArray Int Int -> (Int, Int) -> (Int, Int) -> Maybe Int
sortedFindEqual xs (start, end) (lowest, highest)
  | i < lowest || highest < i = Nothing
  | ith == i = (next start lower) `orElse` i
  | start >= end = Nothing
  | ith < i = next higher end
  | ith > i = next start lower
  where i = between start end
        ith = xs ! i
        (higher, lower) = (succ i, pred i)
        next start end = sortedFindEqual xs (start, end) (lowest, highest)

between :: Int -> Int -> Int
between a b = (a + b) `div` 2

orElse :: Maybe a -> a -> Maybe a
orElse maybeValue def = maybe (Just def) (Just) maybeValue

