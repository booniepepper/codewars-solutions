// https://www.codewars.com/kata/597bb84522bc93b71e00007e

let stringMerge = (a, b, c) =>
    a.slice(0, a.indexOf(c))
  + b.slice(b.indexOf(c));

