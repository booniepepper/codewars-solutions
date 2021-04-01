// https://www.codewars.com/kata/556deca17c58da83c00002db

tribonacci = (sig, n) ->
    if n < 3
        return sig.slice(0, n)

    trib = sig
    while (trib.length < n)
        trib.push(trib.slice(-3).reduce((a, b) -> a + b))
    trib

