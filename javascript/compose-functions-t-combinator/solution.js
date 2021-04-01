// https://www.codewars.com/kata/51f9d3db4095e07f130001ee

var compose = function() {
  var val = arguments[0];
  for (var i = 1; i < arguments.length; i++) {
    val = arguments[i](val);
  }
  return val;
}

