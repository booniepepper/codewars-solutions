// https://www.codewars.com/kata/5ae62fcf252e66d44d00008e

const expressionMatter = (a, b, c) => Math.max(
    a *  b  * c,
    a +  b  + c,
    a +  b  * c,
    a * (b  + c),
   (a +  b) * c,
    a *  b  + c
);

