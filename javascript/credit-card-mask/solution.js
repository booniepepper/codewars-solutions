// https://www.codewars.com/kata/5412509bd436bd33920011bc

const maskify = s => '#'.repeat(Math.max(0, s.length - 4)) + s.slice(-4);

