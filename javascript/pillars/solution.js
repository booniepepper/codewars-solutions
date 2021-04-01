// https://www.codewars.com/kata/5bb0c58f484fcd170700063d

let pillars = (n, d, w) => n == 1 ? 0 : (n - 2) * w + (n - 1) * d * 100;

