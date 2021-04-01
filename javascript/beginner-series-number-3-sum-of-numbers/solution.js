// https://www.codewars.com/kata/55f2b110f61eb01779000053

// Gives the sum of all integers from a to b (inclusive)
function sumRange(a,b) {
  const smaller = a <= b ? a : b;
  const larger = a + b - smaller;
  
  var sum = 0;
  for (var i = smaller; i <= larger; i++) {
    sum += i;
  }
  return sum;
}

// function name as required by tests
var GetSum = sumRange;

