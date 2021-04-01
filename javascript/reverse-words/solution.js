// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

const reverseWord = word => word.split('').reverse().join('');
const reverseWords = str => str.split(' ').map(reverseWord).join(' ');

