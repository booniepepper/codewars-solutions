// https://www.codewars.com/kata/52e88b39ffb6ac53a400022e

const int32ToIp = n => [24, 16, 8, 0]
  .map(e => (r = (n >>> e), r % 129 == 128 ? 128 : r % 128))
  .join('.');

