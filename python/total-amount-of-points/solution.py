# https://www.codewars.com/kata/5bb904724c47249b10000131

def points(games):
    total = 0
    for x, _, y in games:
        if x > y: total += 3
        elif x == y: total += 1
    return total

