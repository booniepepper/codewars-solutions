// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f

"use strict";

const flattenAndSort = arr => arr.reduce((as, bs) => [...as, ...bs], []).sort((a, b) => a - b);

