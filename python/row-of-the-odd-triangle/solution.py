# https://www.codewars.com/kata/5d5a7525207a674b71aa25b5

def odd_row(row):
    base = row * (row - 1)
    return [base + n * 2 + 1 for n in range(row)]

