// https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0

const [LT, EQ, GT] = [-1, 0, 1];

const lastOf = a => a[a.length-1];
const compare = (a, b) => a > b ? GT : a < b ? LT : EQ;
const compareLastOf = (a, b) => compare(lastOf(a), lastOf(b));
const weirdCompare = (a, b) => compareLastOf(a, b) || LT;
const last = as => as.split(' ').sort(weirdCompare);

