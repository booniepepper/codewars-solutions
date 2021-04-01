// https://www.codewars.com/kata/58c8a41bedb423240a000007

let cakeSlice = n => n === 0 ? 1
                   : cakeSlice(n-1) + n;

