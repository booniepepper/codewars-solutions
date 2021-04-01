// https://www.codewars.com/kata/5bd00c99dbc73908bb00057a

const alpha = '_abcdefghijklmnopqrstuvwxyz';
const alphaPos = c => alpha.indexOf(c);
const expand = c => new Array(alphaPos(c)).fill(c).join('');
const lowerCase = s => s.toLowerCase();
const properCase = s => s.charAt(0).toUpperCase() + s.slice(1);
const alphaSeq = s => s.split('')
                       .map(lowerCase)
                       .sort()
                       .map(expand)
                       .map(properCase)
                       .join(',');

