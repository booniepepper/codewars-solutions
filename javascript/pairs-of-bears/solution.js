// https://www.codewars.com/kata/57d165ad95497ea150000020

// Let the mad incantation begin...
const bears = (expected, as) => (
  bs = (as.match(/(8B|B8)/g) || []).join(''),
  [bs, ~~(bs.length / 2) >= expected]
);

