-- https://www.codewars.com/kata/514b92a657cdc65150000006

local solution = {}

function solution.solution(upTo)
  local sum = 0
  for n = 0, upTo - 1 do
    if n % 3 == 0 or n % 5 == 0 then
      sum = sum + n
    end
  end
  return sum
end

return solution

