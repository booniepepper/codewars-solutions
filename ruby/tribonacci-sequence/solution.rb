# https://www.codewars.com/kata/556deca17c58da83c00002db

def tribonacci((a, b, c), n)
  unless n == 0
    d = a + b + c
    [a] + tribonacci([b, c, d], n-1)
  else
    []
  end
end

