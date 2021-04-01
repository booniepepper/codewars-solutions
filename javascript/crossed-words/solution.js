// https://www.codewars.com/kata/5b72970db3d977e0f9000030

const crossedwords = (h, v) => {
  h = h.split('');
  v = v.split('');

  const hChars = new Set(h);

  const vertI = v.findIndex(c => hChars.has(c));
  const horzI = h.findIndex(c => c == v[vertI]);

  const leftPad = horzI;
  const rightPad = h.length - 1 - leftPad;

  return v.map((c, i) =>
    i == vertI
      ? h.join('')
      : ' '.repeat(leftPad) + c + ' '.repeat(rightPad)
  ).join('\n') + '\n';
}

