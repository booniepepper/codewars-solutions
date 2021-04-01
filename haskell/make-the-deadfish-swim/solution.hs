-- https://www.codewars.com/kata/51e0007c1f9378fa810002a9

module Kata.Deadfish (parse) where

parse :: String -> [Int]
parse s = fst $ snd $ parse' (s, ([], 0))

-- Should be a record at least, better a monad, I suppose
-- I should clean this up when it's not 1am, why am I even doing this
parse' :: (String, ([Int], Int)) -> (String, ([Int], Int))
parse' (('i':s), (bs, a)) = parse' (s, (bs, a + 1))
parse' (('d':s), (bs, a)) = parse' (s, (bs, a - 1))
parse' (('s':s), (bs, a)) = parse' (s, (bs, a * a))
parse' (('o':s), (bs, a)) = parse' (s, (bs ++ [a], a))
parse' ((_:s), (bs, a)) = parse' (s, (bs, a))
parse' ("", (bs, a)) = ("", (bs, a))

