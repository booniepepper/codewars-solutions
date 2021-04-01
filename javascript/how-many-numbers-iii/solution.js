// https://www.codewars.com/kata/5877e7d568909e5ff90017e6

function findAll(n, k) {
  var possibles = [];
  
  for (
    var possible = Array(k).fill("1").join('');
    possible;
    possible = increment(possible)
  ) {
    //console.log(`possible: ${possible}`);
    if (sumOfDigits(possible) == n) {
      possibles.push(possible);
    }
  }
  
  return possibles.length ?
    [possibles.length, possibles[0], possibles[possibles.length - 1]] :
    [];
}

function sumOfDigits(n) {
  return n.toString()
    .split('')
    .map(d => parseInt(d, 10))
    .reduce((a, b) => a + b);
}

function increment(n, max=9) {
  if (n.toString().match(/^9+$/)) return null;
  var result = parseInt(n, 10) + 1;
  return result.toString()
    .split('')
    .reduce((a, b) => 
      a.toString() +
      (parseInt(b, 10) < parseInt(a[a.length-1],10) ?
        a[a.length-1] :
        b)
    );
}

