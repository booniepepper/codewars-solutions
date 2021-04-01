// https://www.codewars.com/kata/5ce6728c939bf80029988b57

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const sorted = s => s.split('').sort().join('');
const solve = s => alphabet.search(sorted(s)) != -1;

