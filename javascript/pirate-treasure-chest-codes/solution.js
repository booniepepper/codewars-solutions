// https://www.codewars.com/kata/595fb7d8de9d34743f000162

const gcd = (a, b) => 
  a == 0 ? b
  : a == b ? a
  : gcd(b % a, a);

const treasureCode = clue => (
  divisor = 0,
  clue.split(/(?<=\d)(?=[A-Z])/)
    .map(code => code.split(/(?<=[A-Z])(?=\d)/))
    .map(([label, num]) => ({ label, num: parseInt(num)}))
    .reduce((codes, code) => (
        codes.push(code),
        divisor = gcd(divisor, code.num),
        codes
      ),
      []
    )
    .map(({label, num}) => label + (num / divisor))
    .reduce((simplified, code) => simplified + code)
);

