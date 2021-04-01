// https://www.codewars.com/kata/515f51d438015969f7000013

func pyramid(_ n: Int) -> [[Int]] {
  return n <= 0
    ? []
    : (1...n).map { Array(repeating: 1, count: $0) }
}

