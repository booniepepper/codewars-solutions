// https://www.codewars.com/kata/5301329926d12b90cc000908

function cumulativeTriangle(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  else if (n < 0) {
    return -1;
  }
  let center = 1;
  for (let i = 1.5; i < n; i++) {
    center += i;
  }
  return center * n;
}

