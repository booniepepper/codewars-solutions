// https://www.codewars.com/kata/56747fd5cb988479af000028

function getMiddle(s) {
  var start = ~~(s.length / 2);
  var end = start + 1;
  if (s.length % 2 == 0) {
    start -= 1;
  }
  return s.slice(start, end);
}

