// https://www.codewars.com/kata/56541980fa08ab47a0000040

const printerError = s => s.split('').filter(c => !c.match(/[a-m]/)).length + '/' + s.length;

