// https://www.codewars.com/kata/52efefcbcdf57161d4000091/solutions/javascript/me

let intoDict = (d, c) => {d[c] = d[c] ? d[c] + 1 : 1; return d;}
let count = s => s.split('').reduce(intoDict,{});

