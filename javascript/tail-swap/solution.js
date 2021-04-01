// https://www.codewars.com/kata/5868812b15f0057e05000001

const tailSwap = ([ab, ba]) => (
  [a1, b2] = ab.split(':'),
  [b1, a2] = ba.split(':'),
  [`${a1}:${a2}`, `${b1}:${b2}`]
);

