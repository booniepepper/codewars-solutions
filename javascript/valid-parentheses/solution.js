// https://www.codewars.com/kata/52774a314c2333f0a7000688

const unit = /\(\)/g;

const validParentheses = parens =>
  parens.length % 2 == 1 ? false
  : deeplyValid(parens);

const deeplyValid = parens =>
  parens.length == 0 ? true
  : !!parens.match(unit) && deeplyValid(parens.replace(unit, ''));

