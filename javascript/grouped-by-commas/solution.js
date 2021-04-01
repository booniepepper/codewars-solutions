// https://www.codewars.com/kata/5274e122fc75c0943d000148

const groupByCommas = n => n.toString().replace(/(?<=\d)(?=(\d\d\d)+(?!\d))/g, ',');

