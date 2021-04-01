# https://www.codewars.com/kata/515f51d438015969f7000013

def pyramid(n): return [] if n <= 0 else [[1]] + [[1] + a for a in pyramid(n - 1)]

