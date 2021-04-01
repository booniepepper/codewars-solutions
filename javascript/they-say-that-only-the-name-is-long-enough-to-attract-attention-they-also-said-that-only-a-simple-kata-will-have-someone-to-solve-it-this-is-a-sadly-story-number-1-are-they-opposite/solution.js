// https://www.codewars.com/kata/574b1916a3ebd6e4fa0012e7

const isOpposite = (sA, sB) =>
    sA.length == sB.length &&
    sA.length != 0 &&
    sA.split('')
      .map((a, i) => [a.charCodeAt(0), sB.charCodeAt(i)])
      .map(([a, b]) => Math.abs(a - b))
      .every(diff => diff == 32);

