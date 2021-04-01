-- https://www.codewars.com/kata/54ff3102c1bad923760001f3

defmodule VowelCount do
  def get_count(str) do
    String.length(String.replace(str, ~r/[^aeiou]/, ""))
  end
end

