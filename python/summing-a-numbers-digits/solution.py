# https://www.codewars.com/kata/52f3149496de55aded000410

from math import floor

def sum_digits(n):
    n = abs(n)
    sum = 0
    while n > 0:
        sum += n % 10
        n = floor(n / 10)
    return sum

