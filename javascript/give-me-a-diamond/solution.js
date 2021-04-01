// https://www.codewars.com/kata/5503013e34137eeeaa001648

function diamond(n){
  if (n % 2 === 0 || n <= 0) {
    return null;
  }
  
  var repeat = (char, times) => {
    var str = '';
    for (var i = 0; i < times; i++) {
      str += char;
    }
    return str;
  };
  
  var center = repeat('*', n);
  var top = [];
  
  for (var i = 1; i < n; i += 2) {
    var index = (i - 1) / 2;
    top[index] = repeat(' ', (n - i) / 2)
      + repeat('*', i);
  }
  
  result = [...top, center, ...top.reverse(), ''].join('\n');
  console.log(result);
  return result;
}

