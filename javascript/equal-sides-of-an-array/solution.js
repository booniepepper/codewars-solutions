// https://www.codewars.com/kata/5679aa472b8f57fb8c000047

const findEvenIndex = arr => {
  if (!arr.length) return 0;
  
  let pos = 0;
  let left = 0;
  let right = arr.slice(1).reduce((a, b) => a + b);
  
  while (pos < arr.length) {
    if (left == right) return pos;
    
    left += arr[pos];
    right -= arr[pos+1];
    pos++;
  }
  
  return -1;
}

