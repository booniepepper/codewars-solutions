# https://www.codewars.com/kata/5270d0d18625160ada0000e4

POINTS = [
  [ [ '11111', 1200 ] , ['1111', 1100], [ '111', 1000 ], [ '11', 200 ], ['1', 100] ],
  [ [ '666', 600 ] ],
  [ [ '55555', 600 ], [ '5555', 550 ], [ '555', 500 ], [ '55', 100 ], [ '5', 50 ] ],
  [ [ '444', 400 ] ],
  [ [ '333', 300 ] ],
  [ [ '222', 200 ] ]
]

def score(dice):
    dice.sort()
    dice = "".join(str(d) for d in dice)
    score = 0
    for point_class in POINTS:
        for pattern, value in point_class:
            if pattern in dice:
                score += value
                break
    return score

