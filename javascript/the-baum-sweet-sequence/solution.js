// https://www.codewars.com/kata/5d2659626c7aec0022cb8006

const isBaumSweet = n =>
  n == 0 ? true
  : !n.toString(2).split(/1/g).filter(z => z.length && z.length % 2).length;

function* baumSweet() {
  let n = 0;
  for ( ; true ; n++) {
    yield isBaumSweet(n) ? 1 : 0;
  }
}

