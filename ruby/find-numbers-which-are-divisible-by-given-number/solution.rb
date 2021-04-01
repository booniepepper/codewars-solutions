# https://www.codewars.com/kata/55edaba99da3a9c84000003b

def divisible_by(numbers, divisor)
  numbers.select{ |n| n % divisor == 0 }
end

