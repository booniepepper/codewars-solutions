# https://www.codewars.com/kata/56efab15740d301ab40002ee

def _gcdi(a, b): return a if b == 0 else _gcdi(b, a % b)

def gcdi(a, b):return _gcdi(abs(a), abs(b))

def lcmu(a, b): return abs(a * b) / gcdi(a, b)

def som(a, b): return a + b

def maxi(a, b): return a if a >= b else b

def mini(a, b): return a if a <= b else b

def oper_array(fct, arr, init): 
    out = [init]
    for i in range(len(arr)):
        out.append(fct(out[i], arr[i]))
    return out[1:]

