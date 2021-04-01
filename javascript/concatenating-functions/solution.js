// https://www.codewars.com/kata/527176c487961e5900000106

Function.prototype.pipe = function (f) {
  return (e) => f(this(e));
}

