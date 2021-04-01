// https://www.codewars.com/kata/57f222ce69e09c3630000212

const well = as => (
  bs = as.filter(a => a == 'good').length,
  bs == 0
    ? 'Fail!'
    : bs < 3
        ? 'Publish!'
        : 'I smell a series!'
);

