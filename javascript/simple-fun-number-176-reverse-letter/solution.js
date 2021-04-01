// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b

let reverseLetter = s => s.replace(/[^a-zA-Z]/g, '').split('').reverse().join('');

