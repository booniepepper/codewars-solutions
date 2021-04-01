// https://www.codewars.com/kata/5269452810342858ec000951

function isValidCoordinates(coordString){
  const coords = coordString.split(/, ?/);
  const validFormat = /^\-?[1]?\d{1,2}(\.\d*)?$/;
  const isValid = !!(coords.length === 2
    && coords[0].match(validFormat)
    && coords[1].match(validFormat)
    && Math.abs(parseFloat(coords[0])) <= 90
    && Math.abs(parseFloat(coords[1])) <= 180);
  console.log("<isValidCoordinates> input: ", coordString);
  console.log("<isValidCoordinates> output: ", isValid);
  return isValid;
}

