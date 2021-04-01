# https://www.codewars.com/kata/556deca17c58da83c00002db

def tribonacci(signature, n):
    result = []
    [a, b, c] = signature

    while len(result) < n:
        result.append(a)
        [a, b, c] = [b, c, a+b+c]

    return result

