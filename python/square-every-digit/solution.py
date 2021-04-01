# https://www.codewars.com/kata/546e2562b03326a88e000020

def square_digits(n):
    chars = list(str(n))
    squares = [int(d)**2 for d in chars]
    ints = list(map(lambda x: str(x), squares))
    joined = ''.join(ints)
    return int(joined)

