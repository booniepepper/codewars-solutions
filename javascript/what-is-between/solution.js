// https://www.codewars.com/kata/55ecd718f46fba02e5000029

const between = (a, b) => [...new Array(b - a + 1).keys()].map(v => v + a);

