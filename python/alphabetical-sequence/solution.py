# https://www.codewars.com/kata/5bd00c99dbc73908bb00057a

alphabet = '_abcdefghijklmnopqrstuvwxyz'
def alphaPos(c): return alphabet.find(c)
def expand(c): return c * alphaPos(c)
def properCase(s): return s.title()

def alpha_seq(s):
  s = s.lower()
  s = list(s)
  s = sorted(s)
  s = map(expand, s)
  s = map(properCase, s)
  return ','.join(s)

