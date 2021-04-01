// https://www.codewars.com/kata/554e4a2f232cdd87d9000038

let complements = {A:'T', T: 'A', G:'C', C:'G'};
let DNAStrand = dna => dna.split('').map(s => complements[s]).join('');

