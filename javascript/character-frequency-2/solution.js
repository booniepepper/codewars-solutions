// https://www.codewars.com/kata/548ef5b7f33a646ea50000b2

let intoDict = (d,c) => {d[c] = d[c]? d[c]+1 : 1; return d;};
let charFreq = s => s.split('').reduce(intoDict,{});

