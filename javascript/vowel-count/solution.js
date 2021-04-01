// https://www.codewars.com/kata/54ff3102c1bad923760001f3

const VOWELS = new Set("aeiou");
const getCount = str => str.toLowerCase()
  .split('')
  .filter(c => VOWELS.has(c))
  .length;

