# https://www.codewars.com/kata/563b662a59afc2b5120000c6

def nb_year(population, percent, increment, target):
    years = 0
    while population < target:
        population *= 1 + percent / 100
        population += increment
        years += 1
    return years

