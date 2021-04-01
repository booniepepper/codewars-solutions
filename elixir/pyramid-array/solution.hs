-- https://www.codewars.com/kata/515f51d438015969f7000013

defmodule Kata do
  def pyramid(0), do: []
  def pyramid(n), do: 1..n |> Enum.map(fn i -> List.duplicate(1, i) end)
end

