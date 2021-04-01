# https://www.codewars.com/kata/5e23eadb0879110028b96424

def square(x): return x * x

def average(x, y): return (x + y) / 2

def absolute_value(x): return x if x >= 0 else -x

def improve(guess, x): return average(guess, x / guess)

def is_good_enough(guess, x): return absolute_value(square(guess) - x) < 0.001

def try_guess(guess, x): return guess if is_good_enough(guess, x) else try_guess(improve(guess, x), x)

def square_root(x): return try_guess(1, x)

