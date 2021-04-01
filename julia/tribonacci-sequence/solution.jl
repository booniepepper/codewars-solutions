# https://www.codewars.com/kata/556deca17c58da83c00002db

function tribonacci((a, b, c), n::Int)::Array{Float64}
  if n <= 3
    [a, b, c][1:n]
  else
    d = a + b + c
    append!([a], tribonacci((b, c, d), n-1))
  end
end

