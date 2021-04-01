// https://www.codewars.com/kata/577a98a6ae28071780000989

let gt = (a, b) => a > b ? a : b;
let lt = (a, b) => a < b ? a : b;
var min = ns => ns.reduce(lt, Infinity);
var max = ns => ns.reduce(gt, -Infinity);

