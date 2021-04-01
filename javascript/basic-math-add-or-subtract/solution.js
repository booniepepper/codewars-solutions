// https://www.codewars.com/kata/5809b62808ad92e31b000031

const calculate = s =>
    eval(
        s.replace(/plus/g, '+').replace(/minus/g, '-')
    ).toString();

