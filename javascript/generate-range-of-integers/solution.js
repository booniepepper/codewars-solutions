// https://www.codewars.com/kata/55eca815d0d20962e1000106

const generateRange = (min, max, step) => {
  let values = [];
  let next = min;
  while (next <= max) {
    values.push(next);
    next += step;
  }
  return values;
}

