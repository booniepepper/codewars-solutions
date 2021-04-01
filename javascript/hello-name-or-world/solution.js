// https://www.codewars.com/kata/57e3f79c9cb119374600046b

let nice = n => n.split('').map((c, i) => i == 0? c.toUpperCase() : c.toLowerCase()).join('');
let nameOrWorld = n => n && n.length ? nice(n) : "World";
let hello = n => "Hello, " + nameOrWorld(n) + "!";

