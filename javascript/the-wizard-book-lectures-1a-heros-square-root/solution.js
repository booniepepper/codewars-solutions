// https://www.codewars.com/kata/5e23eadb0879110028b96424

const square = x => x * x;

const average = (x, y) => (x + y) / 2;
    
const absoluteValue = x => x < 0 ? -x : x;

const improve = (guess, x) => average(guess, x / guess);

const isGoodEnough = (guess, x) => absoluteValue(square(guess) - x) < 0.001;

const tryGuess = (guess, x) => isGoodEnough(guess, x) ? guess : tryGuess(improve(guess, x), x);

const squareRoot = x => tryGuess(1, x);

