// https://www.codewars.com/kata/526571aae218b8ee490006f4

var countBits = function(n) {
  var count = 0;
  while (n > 0) {
    if (n % 2 !== 0) {
      count++;
    }
    n = Math.floor(n / 2);
  }
  return count;
}

