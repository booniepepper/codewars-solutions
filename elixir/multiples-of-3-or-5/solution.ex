-- https://www.codewars.com/kata/514b92a657cdc65150000006

defmodule Challenge do
  def solution(number) do 
    0..(number - 1)
    |> Enum.filter(fn n -> Integer.mod(n, 3) == 0 or Integer.mod(n, 5) == 0 end)
    |> Enum.reduce(fn n, sum -> sum + n end)
  end
end

