// https://www.codewars.com/kata/54d7660d2daf68c619000d95

function convertFrac(fs){
  if (!fs.length) return '';

  var denominator = fs.map(a => a[1]).reduce(leastCommonMultiple);
  var numerators = fs.map(a => a[0] * (denominator / a[1]));

  var begin = "(";
  var end = "," + denominator + ")";
  var separator = end + begin;
  return begin + numerators.join(separator) + end;
}

function leastCommonMultiple(a, b) {
  if (a == b) return a;

  var min = a <= b ? a : b;
  var max = a <= b ? b : a;

  for (var i = 1; i <= a * b && i < Infinity; i++) {
    if ( (max * i) % min == 0) {
      return max * i;
    }
  }

  throw `Whoa couldn't find a least common multiple for ${a} and ${b}`;
}

