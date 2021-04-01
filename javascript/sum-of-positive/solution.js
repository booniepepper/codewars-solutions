// https://www.codewars.com/kata/5715eaedb436cf5606000381

let isPositive = a => a > 0;
let sum = (a, b) => a + b;
let positiveSum = as => as.filter(isPositive).reduce(sum, 0);

