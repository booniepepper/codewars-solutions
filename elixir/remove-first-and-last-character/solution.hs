-- https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

defmodule Solution do
  def remove_chars(s) do
    String.slice(s,1..(String.length(s)-2))
  end
end

