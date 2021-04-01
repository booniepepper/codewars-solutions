// https://www.codewars.com/kata/54d512e62a5e54c96200019e

const primeFactors = n => {
  const factors = new Map();
  const incFactor = n => (count = factors.get(n) || 0, factors.set(n, count+1));

  let rem = n;
  
  const handleFactor = n => {
    while (rem % n == 0) {
      incFactor(n);
      rem /= n;
    }
  };
  
  handleFactor(2);
  
  for (let i = 3; i <= rem; i += 2) {
    handleFactor(i);
  }
  
  return [...factors.entries()]
    .map(([prime, count]) => `(${prime}${count > 1 ? '**' + count : ''})`)
    .join('');
}

