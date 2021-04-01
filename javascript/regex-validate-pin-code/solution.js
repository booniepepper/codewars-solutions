// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

function validatePIN (pin) {
  return !!pin.match(/^[0-9]{4}([0-9][0-9])?$/);
}

