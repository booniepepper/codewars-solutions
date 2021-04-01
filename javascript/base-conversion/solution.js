// https://www.codewars.com/kata/526a569ca578d7e6e300034e

function convert(input, source, target) {
  var asInt = input.split('')
    .map(c => source.indexOf(c))
    .reduce((a, b) => a * source.length + b);
  
  if (asInt === 0) {
    return target[0];
  }
  
  var asTarget = "";
  var m = target.length;
  
  while (asInt) {
    asTarget = target[asInt % m] + asTarget;
    asInt = Math.floor(asInt / m);
  }
  
  return asTarget;
}

