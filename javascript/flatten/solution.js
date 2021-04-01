// https://www.codewars.com/kata/513fa1d75e4297ba38000003

const flatten = (...as) => as.map(b =>
    b instanceof Array
    ? flatten(...b)
    : b
  )
  .reduce((a, b) => a.concat(b), []);

