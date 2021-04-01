// https://www.codewars.com/kata/5bbb8887484fcd36fb0020ca

const signChange = (acc, a) => {
  acc.count += a != acc.prev ? 1 : 0;
  acc.prev = a;
  return acc;
};

const catchSignChange = as => as.length < 1 ? 0 
                            : as.map(a => a >= 0 ? 'a' : 'b')
                                .reduce(signChange, {prev:'c', count:-1})
                                .count;

