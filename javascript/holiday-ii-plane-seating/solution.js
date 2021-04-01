// https://www.codewars.com/kata/57e8f757085f7c7d6300009a

const section = n =>  1 <= n && n <= 20 ? 'Front'
                   : 21 <= n && n <= 40 ? 'Middle'
                   : 40 <= n && n <= 60 ? 'Back'
                   : null;

const side = c => c.match(/^[A-C]$/) ? 'Left'
                : c.match(/^[D-F]$/) ? 'Middle'
                : c.match(/^(G|H|K)$/)? 'Right'
                : null;

const planeSeat = code => (
  first = section(code.match(/^\d\d?/)[0]),
  second = side(code.match(/\w$/)[0]),
  console.log(first, second),
  first && second ? `${first}-${second}`
                  : 'No Seat!!'
);

