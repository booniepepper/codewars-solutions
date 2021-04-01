// https://www.codewars.com/kata/515f51d438015969f7000013

let rec pyramid = (n: int) => {
  switch n {
  | 0 => [| |]
  | _ => Array.append(pyramid(n - 1), [| Array.make(n, 1) |])
  }
}

