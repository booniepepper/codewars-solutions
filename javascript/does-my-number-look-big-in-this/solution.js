// https://www.codewars.com/kata/5287e858c6b5a9678200083c

let cToI = d => Number.parseInt(d, 10);
let digits = n => n.toString().split('').map(cToI);
let pow = e => n => Math.pow(n, e);
let sum = (a, b) => a + b;
let narcissistic = n => {
  let ds = digits(n);
  return n == ds.map(pow(ds.length)).reduce(sum, 0);
};

