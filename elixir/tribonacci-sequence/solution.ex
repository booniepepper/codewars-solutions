-- https://www.codewars.com/kata/556deca17c58da83c00002db

defmodule TribonacciSequence do
  import Kernel

  @spec tribonacci({number, number, number}, non_neg_integer) :: [number]

  def tribonacci(_, n) when n <= 0 do [] end

  def tribonacci({a, b, c}, n) do
    d = a + b + c
    [a | tribonacci({b, c, d}, n - 1)]
  end

end

