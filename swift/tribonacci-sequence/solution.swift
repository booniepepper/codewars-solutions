// https://www.codewars.com/kata/556deca17c58da83c00002db

func tribonacci(_ signature: [Int], _ n: Int) -> [Int] {
  guard n > 0 else { return [Int]() }
  
  let a = signature[0],
      b = signature[1],
      c = signature[2],
      d = a + b + c
  
  return [a] + tribonacci([b, c, d], n-1)
}

