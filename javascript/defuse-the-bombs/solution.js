// https://www.codewars.com/kata/54d558c72a5e542c0600060f

// Defuse all of the Bombs!

// #1
Bomb.diffuse(42);

// #2
Bomb.diffuse();
Bomb.diffuse();
Bomb.diffuse();
Bomb.diffuse();
Bomb.diffuse();

// #3
Bomb.diffuse(global.BombKey);

// #4
const diffuseTheBomb = () => true;
Bomb.diffuse();

// #5
// echo VGhlIGtleSBpcyAiMy4xNDE1OSI= | gbase64 -d
// The key is "3.14159"
Bomb.diffuse('3.14159');

// #6
Bomb.diffuse(new Date().setYear(2015));

// #7
Bomb.diffuse(Object.freeze({ key: 43 }));

// #8
let tick = 7;
Bomb.diffuse({ valueOf: () => (tick += 2, tick) });

// #9
tick = 2;
Math.random = () => (--tick, tick == 0 ? 0.5 : 1);
Bomb.diffuse(42);

// #10
Array.prototype.valueOf = function() { console.log('I\'m in!!!'); return this.reduce((a, b) => a + b); }
Bomb.diffuse('eWVz');

console.log( 'Bomb', Bomb );
console.log( 'Bomb.diffuse', Bomb.diffuse.toString() );
// console.log( Object.keys(global) );
// console.log( global.BombKey );

