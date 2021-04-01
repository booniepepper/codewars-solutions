// https://www.codewars.com/kata/5779474882d7d0a10f000005

let formatLine = line => {
  let pos = 0;
  return line.split('')
    .map(char => {
      if (char == '\t') {
        let fill = " ".repeat(4 - pos);
        pos = 0;
        return fill;
      }
      else {
        pos = (pos + 1) % 4;
        return char;
      }
    })
    .join('');
};

let tabToSpaces = text => text.split('\n').map(formatLine).join('\n');

