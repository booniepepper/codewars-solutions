// https://www.codewars.com/kata/54b724efac3d5402db00065e

const MORSE_SPACE = '   ';
const SPACE = ' ';
const NO_SPACE = '';

const decodeMorseChar = c => MORSE_CODE[c];
const decodeMorseWord = w => w.split(SPACE).map(decodeMorseChar).join(NO_SPACE);
const decodeMorse = m => m.trim().split(MORSE_SPACE).map(decodeMorseWord).join(SPACE);

