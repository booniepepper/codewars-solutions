// https://www.codewars.com/kata/546f922b54af40e1e90001da

let alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
  .reduce((map, c, i) => { map[c] = i + 1; return map; }, {});

function alphabetPosition(text) {
  return text.toLowerCase()
    .split('')
    .map(c => alphabet[c])
    .filter(i => i)
    .join(' ');
}

