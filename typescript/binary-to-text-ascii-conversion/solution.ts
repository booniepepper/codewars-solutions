// https://www.codewars.com/kata/5583d268479559400d000064

export const binaryToString = (binary: string): string => {
  if (binary !== null && binary.length != 0) {
    const matches = binary.match(/.{8}/g);
    if (matches !== null && matches.length != 0) {
      return matches
          .map(b => parseInt(b, 2))
          .map(n => String.fromCharCode(n))
          .join('');
    }
  }
  return '';
}

