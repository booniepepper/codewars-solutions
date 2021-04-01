// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

function duplicateEncode(word){
  const SINGLE = "(";
  const MULTIPLE = ")";
  
  var counts = {};
  
  word.split('')
    .forEach((c) => {
      c = c.toLowerCase();
      counts[c] = counts[c] ? counts[c] + 1 : 1;
    });
    
  return word.split('')
    .map((c) => {
      c = c.toLowerCase();
      return counts[c] > 1 ? MULTIPLE : SINGLE;
    })
    .join('');
}

