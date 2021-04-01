# https://www.codewars.com/kata/5ce6cf94cb83dc0020da1929

import re

alpha = re.compile('[a-zA-Z]')

def uglify_word(s):
    uglified = ''
    nextUpper = True
    for c in s:
        if alpha.match(c):
            uglified += c.upper() if nextUpper else c.lower()
            nextUpper = not nextUpper
        else:
            uglified += c
            nextUpper = True
    return uglified

