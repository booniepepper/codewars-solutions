// https://www.codewars.com/kata/5630c81e8e90d20992000051

let overrides = {'buy food': 'learn Node.js', 'sleep': 'make a weather app'};
let myTasks = ts => ts.map(t => overrides[t]? overrides[t] : t);

