// https://www.codewars.com/kata/5ce969ab07d4b7002dcaa7a1

const solve = s => {
  const limit = ~~(s.length / 2);
  for (let length = limit; length > 0; length--) {
    const prefix = s.slice(0, length);
    const suffix = s.slice(-length);
    if (prefix === suffix) {
      return length;
    }
  }
  return 0;
}

