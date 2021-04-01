// https://www.codewars.com/kata/57eaec5608fed543d6000021

const divCon = ns => ns.map(n => typeof n == 'string' ? - Number(n) : n).reduce((a, b) => a + b);

