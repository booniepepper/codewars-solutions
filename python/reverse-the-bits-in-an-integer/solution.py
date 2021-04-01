# https://www.codewars.com/kata/5959ec605595565f5c00002b

def reverse_bits(n):
    binary = str(bin(n))[2:]
    binary_reversed = binary[::-1]
    return int(binary_reversed, 2)

