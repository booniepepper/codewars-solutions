// https://www.codewars.com/kata/56efab15740d301ab40002ee

const abs = Math.abs;
const gcd = (a, b) => b == 0 ? a : gcd(b, a % b);
const gcdi = (a, b) => gcd(abs(a), abs(b));
const lcmu = (a, b) => abs(a * b) / gcdi(a, b);
const som = (a, b) => a + b;
const maxi = (a, b) => a > b ? a : b;
const mini = (a, b) => a < b ? a : b;
const operArray = (f, arr, init) =>
  arr.reduce((acc, n, i) => (acc.push(f(acc[i], n)), acc), [init]).slice(1);

