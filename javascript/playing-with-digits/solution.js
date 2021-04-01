// https://www.codewars.com/kata/5552101f47fc5178b1000050

function digPow(number, k) {
  var pow = k;
  var sumOfDigitPowers = number.toString()
    .split('')
    .map((d) => {
      d = Math.pow(parseInt(d), pow);
      pow++;
      return d;
    })
    .reduce((a, b) => a + b );
  if (sumOfDigitPowers % number != 0) {
    return -1;
  }
  return sumOfDigitPowers / number;
}

