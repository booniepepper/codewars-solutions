// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

const persistence = num => {
  var count = 0;
  for( ; ~~(num / 10) > 0 ; count++) num = digitalProduct(num);
  return count;
}

const digitalProduct = num => num.toString().split('').map(a => parseInt(a)).reduce((a, b) => a * b);

