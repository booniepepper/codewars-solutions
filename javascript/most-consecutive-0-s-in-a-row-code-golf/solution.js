// https://www.codewars.com/kata/5b901127d0093853470001e7

f=n=>Math.max(...(''+n).match(/0+/g).map(n=>n.length))

