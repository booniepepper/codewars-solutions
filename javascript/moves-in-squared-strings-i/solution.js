// https://www.codewars.com/kata/56dbe0e313c2f63be4000b25

let reverse = s => s.split('').reverse().join('');

let vertMirror = s => s.split(/\n/g).map(reverse).join('\n');

let horMirror = s => s.split(/\n/g).reverse().join('\n');

let oper = (f, s) => f(s);

