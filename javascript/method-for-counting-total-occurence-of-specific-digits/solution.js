// https://www.codewars.com/kata/56311e4fdd811616810000ce

class List {
  countSpecDigits(integers, digitsToCount) {
    const counts = new Map();
    digitsToCount.forEach(d => counts.set(d, 0));
    const digits = integers.map(i => Math.abs(i).toString())
      .join('')
      .split('')
      .map(d => Number.parseInt(d))
      .forEach(d => {
        const count = counts.get(d);
        if (count !== undefined) {
          counts.set(d, count + 1);
        }
      });
    return [...counts.entries()];
  }
}

