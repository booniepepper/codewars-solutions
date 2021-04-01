// https://www.codewars.com/kata/515f51d438015969f7000013

const pyramid = n =>
  n <= 0 ? []
  : [[], ...pyramid(n - 1)].map(a => [1, ...a]);

