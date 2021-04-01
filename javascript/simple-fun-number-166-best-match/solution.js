// https://www.codewars.com/kata/58b38256e51f1c2af0000081

const bestMatch = (as, bs) =>
  as.map((a, i) => { return { b: bs[i], diff: a - bs[i], index: i}})
    .sort((a, b) => a.b == b.b ? a.index - b.index : b.b - a.b)
    .reduce((min, a) => a.diff < min.diff ? a : min)
    .index;

