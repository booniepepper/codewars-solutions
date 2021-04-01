// https://www.codewars.com/kata/55dc4520094bbaf50e0000cb

let range = (a, b) => [...new Array(b + 1).keys()].slice(a);
let fact = i => range(1, i).reduce((a, b) => a * b, 1);
let wilson = p => (fact(p - 1) + 1) / (p**2);
let isWholeNum = i => i == ~~i;
let amIWilson = p => isWholeNum(wilson(p));

