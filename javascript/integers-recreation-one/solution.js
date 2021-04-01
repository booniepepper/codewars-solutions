// https://www.codewars.com/kata/55aa075506463dac6600010d

function listSquared(lower, upper) {
  positiveNonZeroIntegerOrDie(lower);
  positiveNonZeroIntegerOrDie(upper);
  orderedOrDie(lower, upper);
  
  var myList = [];
  for (var i = lower; i <= upper; i++) {
    var mySumOfSquareDivisors = sumOfSquares(divisors(i));
    if (isSquare(mySumOfSquareDivisors)) {
      myList.push([i, mySumOfSquareDivisors]);
    }
  }
  
  return myList;
}

function isSquare(a) {
  return Math.pow(~~Math.sqrt(a), 2) == a;
}

// Takes a list of integers and returns the sum of their squares
function sumOfSquares(list) {
  return list.map((a) => {
    positiveNonZeroIntegerOrDie(a);
    return Math.pow(a, 2);
  })
  .reduce((a, b) => {
    return a + b;
  });
}

// Returns an unsorted list of divisors for postive, nonzero integer a
function divisors(a) {
  positiveNonZeroIntegerOrDie(a);
  
  if (a === 1) { return [1]; }
  else if (isSquare(a)) { return [1, Math.sqrt(a), a]; }
  
  var max = a;
  var myDivisors = [];
  
  for (var i = 1; i < max; i++) {
    if (a % i == 0) {
      max = a / i;
      myDivisors.push(i);
      if (i != max) { myDivisors.push(max); }
    }
  }
  
  return myDivisors;
}

// throw error if not a positive, nonzero integer
function positiveNonZeroIntegerOrDie(a) {
  if (typeof a != 'number' || a < 1 || Math.floor(a) !== a) {
    throw new TypeError(`Expected positive, nonzero integer but got ${JSON.stringify(a)}`);
  }
}

// throw error if second parameter is not greater than or equal to first
function orderedOrDie(a, b) {
  if (b < a) {
    throw new TypeError(`Expected smaller value first but got ${a} then ${b}.`);
  }
}

