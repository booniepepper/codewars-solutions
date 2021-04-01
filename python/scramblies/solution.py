# https://www.codewars.com/kata/55c04b4cc56a697bb0000048

def scramble(s1, s2):
    return len([c for c in set(s2) if s1.count(c) < s2.count(c)]) == 0

