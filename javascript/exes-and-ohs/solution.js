// https://www.codewars.com/kata/55908aad6620c066bc00002a

const XO = str => ([xs, os] = [/x/gi, /o/gi].map(matchesFor(str)).map(toLength), xs == os)
const matchesFor = str => re => str.match(re) || [];
const toLength = str => str.length;

