# https://www.codewars.com/kata/54ff3102c1bad923760001f3

strtochars = Base.Fix2(split, "")
isvowel = Base.Fix2(occursin, "aeiou")
onlyvowels = Base.Fix1(filter, isvowel)

getcount(str::String) =
  str |>
  strtochars |>
  onlyvowels |>
  length

