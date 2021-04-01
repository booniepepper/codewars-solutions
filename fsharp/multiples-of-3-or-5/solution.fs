// https://www.codewars.com/kata/514b92a657cdc65150000006

let triOrQuin = fun n -> n % 3 = 0 || n % 5 = 0

let solve n =
  [0 .. n-1]
    |> List.filter triOrQuin
    |> List.sum

