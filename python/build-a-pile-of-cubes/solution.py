# https://www.codewars.com/kata/5592e3bd57b64d00f3000047

# https://study.com/academy/lesson/finding-the-sum-of-consecutive-numbers.html
def gauss(n): return (n / 2) * (1 + n)

# https://www.math.hmc.edu/funfacts/ffiles/10001.2-5.shtml
def sum_of_cubes(n): return int(gauss(n)) ** 2

UPPER_BOUND = 500000
KNOWN_CUBE_SUMS = {sum_of_cubes(n):n for n in range(0, UPPER_BOUND)}

def find_nb(m):
  val = KNOWN_CUBE_SUMS.get(m)
  if val != None:
      return val
  return -1

