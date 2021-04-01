// https://www.codewars.com/kata/5601409514fc93442500010b

const sum = (a, b) => a + b;
const avg = as => as.reduce(sum) / as.length;

const betterThanAverage = (theirScores, myAvg) => avg(theirScores) < myAvg;

