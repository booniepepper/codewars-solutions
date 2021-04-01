# https://www.codewars.com/kata/55f2b110f61eb01779000053

def get_sum(a,b):
    if a == b:
        return a
    
    larger  = a
    smaller = b
    if a < b:
        smaller = a
        larger  = b
    
    sum = larger
    for i in range(smaller, larger):
        sum += i
    
    return sum

