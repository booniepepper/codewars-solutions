// https://www.codewars.com/kata/587731fda577b3d1b0001196

const properCase = s => s.length? s[0].toUpperCase() + s.slice(1).toLowerCase() : s;

String.prototype.camelCase = function() {
  return this.split(' ').map(properCase).join('');
}

