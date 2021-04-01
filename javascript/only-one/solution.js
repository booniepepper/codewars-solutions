// https://www.codewars.com/kata/5734c38da41454b7f700106e

let onlyOne = (...bs) => !bs        ? false 
                       : !bs.length ? false
                       : bs.filter(a=>a).length === 1;

