// https://www.codewars.com/kata/5390bac347d09b7da40006f6

String.prototype.toJadenCase = function () {
  var words = this.split(' ');
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].slice(0,1).toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
};

