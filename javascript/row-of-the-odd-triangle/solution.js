// https://www.codewars.com/kata/5d5a7525207a674b71aa25b5

const oddRow = row => [...Array(row).keys()].map(n => row * (row - 1) + n * 2 + 1);

