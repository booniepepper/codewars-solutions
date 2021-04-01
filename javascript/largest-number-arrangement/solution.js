// https://www.codewars.com/kata/59d902f627ee004281000160

const lt = -1, eq = 0, gt = 1;
const largestCompare = (a, b) => a == b ? eq
                               : a + b > b + a ? gt
                               : lt;
const largestSort = arr => arr.map(a => a.toString()).sort(largestCompare).reverse().join('');
const largestArrangement = arr => Number.parseInt(largestSort(arr));

