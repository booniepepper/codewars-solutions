// https://www.codewars.com/kata/59901cd68fc658ab6c000025

function distribute(m, n) {
  if (m < 0) {
    m = 0;
  }
  let r = [];
  for (let i = 0; i < n; i++) {
    let v = Math.floor(m/(n-i));
    r.push(v);
    m -= v;
  }
  return r;
}

