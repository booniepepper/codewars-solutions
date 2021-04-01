# https://www.codewars.com/kata/514b92a657cdc65150000006

def solution(number : Int32)
  (1...number).select{|n| n % 3 == 0 || n % 5 == 0}.sum
end

