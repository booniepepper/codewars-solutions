// https://www.codewars.com/kata/54ba84be607a92aa900000f1

const isTriangle = (a, b, c) =>
    [a, b, c].every(n => n > 0)
    && [[a, b+c], [b, a+c], [c, a+b]].every(([n, sum]) => sum > n);

