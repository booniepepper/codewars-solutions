// https://www.codewars.com/kata/5583d268479559400d000064

const binaryToString = binary =>
  binary.length ?
    binary.match(/.{8}/g)
      .map(b => parseInt(b, 2))
      .map(n => String.fromCharCode(n))
      .join('')
  : '';

