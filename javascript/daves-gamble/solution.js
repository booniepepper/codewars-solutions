// https://www.codewars.com/kata/563b8a23b554206f49000059

const horses = n => 
  !Number.isInteger(n) ? undefined
  : n < 3 ? n
  : [n, n-1, n-2].reduce((a, b) => a * b);

