-- https://www.codewars.com/kata/515f51d438015969f7000013

module Kata exposing (pyramid)

pyramid : Int -> List (List Int)
pyramid n =
  case n of
    0 -> []
    _ -> List.map (\i -> List.repeat i 1) (List.range 1 n)

