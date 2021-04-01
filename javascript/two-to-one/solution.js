// https://www.codewars.com/kata/5656b6906de340bd1b0000ac

let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
let isin = (a, b) => c => a.match(c) || b.match(c);
let longest = (a, b) => alphabet.filter(isin(a, b)).join('');

