-- https://www.codewars.com/kata/5412509bd436bd33920011bc

module Maskify where

maskify :: String -> String
maskify (_:str@(_:_:_:_:_)) = '#':maskify str
maskify str = str

