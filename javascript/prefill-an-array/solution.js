// https://www.codewars.com/kata/54129112fb7c188740000162

function prefill(n, v) {
  if (n === 0 || n === '0') {
    return [];
  }
  else if (!n.toString().match(/^\d+$/)) {
    throw { name: 'TypeError', message: `${n} is invalid` };
  }
  
  var myArray = new Array(n);
  myArray.fill(v);
  
  return myArray;
}

