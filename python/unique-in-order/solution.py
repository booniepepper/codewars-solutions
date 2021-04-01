# https://www.codewars.com/kata/54e6533c92449cc251001667

def unique_in_order(elems):
    prev = None
    uniques = []
    for elem in elems:
        if elem != prev:
            uniques.append(elem)
            prev = elem
    return uniques

