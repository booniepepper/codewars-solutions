// https://www.codewars.com/kata/554b4ac871d6813a03000035

const highAndLow = numberString =>
  (numbers => [numbers.reduce((a, b) => Math.max(a, b)), numbers.reduce((a, b) => Math.min(a, b))])
  (numberString.split(' ').map(Number))
  .join(' ');

