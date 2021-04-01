// https://www.codewars.com/kata/54da539698b8a2ad76000228

let isValidWalk = walk => !!walk 
                       && walk.length == 10
                       && returnsToStart(walk);

let dirs = {n:[0,1],s:[0,-1],e:[1,0],w:[-1,0]};
let sumTuple = (a, b) => [a[0]+b[0], a[1]+b[1]];
let returnsToStart = walk => walk.map(d => dirs[d])
                                 .reduce(sumTuple, [0,0])
                                 .map(p => [true, false][p])
                                 .reduce((a, b) => a && b, true);

