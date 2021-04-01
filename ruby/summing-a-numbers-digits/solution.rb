# https://www.codewars.com/kata/52f3149496de55aded000410

def sumDigits(n)
  n = n.abs
  sum = 0
  while n > 0
    sum += n % 10
    n = n / 10
  end
  sum
end

