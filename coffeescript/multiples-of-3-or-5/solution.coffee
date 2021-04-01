// https://www.codewars.com/kata/514b92a657cdc65150000006

solution = (number) ->
  [1 ... number]
    .filter((n) -> n % 3 == 0 || n % 5 == 0)
    .reduce((sum, n) -> sum + n)

