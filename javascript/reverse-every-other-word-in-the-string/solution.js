// https://www.codewars.com/kata/58d76854024c72c3e20000de

let reverseWord = w => w.split('').reverse().join('');
let even = i => i % 2 == 0;
let alterWords = (s, f) => s.split(' ').map(f).join(' ');
let reverseEven = (w, i) => even(i) ? w : reverseWord(w);
let reverse = s => alterWords(s.trim(), reverseEven);

