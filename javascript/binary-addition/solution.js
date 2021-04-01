// https://www.codewars.com/kata/551f37452ff852b7bd000139

function addBinary(a,b) {
  var sum = a + b;
  var bin = "";
  while (sum > 0) {
    bin = (sum % 2) + bin;
    sum = ~~(sum / 2);
  }
  return bin;
}

