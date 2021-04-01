// https://www.codewars.com/kata/56dfce76b832927775000027

Array.prototype.Join = function(b) {
  let first = this[0];
  let remaining = this.slice(1);
  b = b instanceof Array ? b : [b];
  if (remaining.length) {
    return [first,
      ...b,
      ...remaining.Join(b)];
  }
  return first === undefined? [] : [first];
}

