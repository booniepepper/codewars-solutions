// https://www.codewars.com/kata/552c028c030765286c00007d

function iqTest(numbers){
  const EVEN = 'e';
  const ODD = 'o';
  
  var evenOddStr = numbers
    .split(' ')
    .map((n) => {
      return n % 2 == 0? EVEN : ODD;
    })
    .join('');
  
  var evens = evenOddStr.match(new RegExp(EVEN, 'g')).length;
  var unique = evens === 1 ? EVEN : ODD;
  
  return evenOddStr.indexOf(unique) + 1;
}

