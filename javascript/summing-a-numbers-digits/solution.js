// https://www.codewars.com/kata/52f3149496de55aded000410

const sumDigits = n => {
  n = Math.abs(n);
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

