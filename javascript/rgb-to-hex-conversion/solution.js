// https://www.codewars.com/kata/513e08acc600c94f01000001

const rgb = (r, g, b) => [r, g, b]
  .map(c => (
    c = ~~c,
    c = c < 0 ? 0 : 255 < c ? 255 : c,
    c = c.toString(16),
    c = c.length == 1? '0' + c : c,
    c
  ))
  .join('')
  .toUpperCase();

