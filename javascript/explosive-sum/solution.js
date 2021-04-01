// https://www.codewars.com/kata/52ec24228a515e620b0005ef

function sum(num) {
  // reject negatives and non-integers
  if (typeof num != 'number' || num <= 0 || num % 1 !== 0) {
    return 0;
  }
  else if (num === 1) return 1;
  
  return ways(num) + 1;
}

var knownWays = {};
function ways(num, max=num-1) {
  if      (max == 0) return 0;
  else if (num == 0) return 1;
  else if (num < 0)  return 0;
  
  var key = num + "|" + max;
  if (knownWays[key]) return knownWays[key];
  
  var result = ways(num, max - 1) + ways(num - max, max);
  knownWays[key] = result;
  return result;
}

