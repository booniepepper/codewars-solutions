// https://www.codewars.com/kata/515f51d438015969f7000013

export const pyramid = (n: number): Array<Array<number>> =>
  new Array(n).fill(0)
    .map((_, i) => new Array(i + 1).fill(1));

