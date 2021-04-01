# https://www.codewars.com/kata/5467e4d82edf8bbf40000155

def Descending_Order(num):
    digits = list(str(num))
    list.sort(digits, reverse=True)
    return int("".join(digits))

