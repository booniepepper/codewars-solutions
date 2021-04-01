// https://www.codewars.com/kata/556deca17c58da83c00002db

const tribonacci = (signature, n) => {
  const trib = signature.slice();
  
  while (trib.length < n) {
      trib.push(trib.slice(-3).reduce((a, b) => a + b));
  }
  
  return trib.slice(0, n);
}

