// https://www.codewars.com/kata/5bc052f93f43de7054000188

let solve = (a,b) => [a]
    .map(s => s.replace(/\*/g, '.*'))
    .map(s => new RegExp(`^${s}$`))
    .map(r => r.test(b))[0];

