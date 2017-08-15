var PI = Math.PI;
//Variable declarations, wherever they occur,
//are processed before any code is executed.
//The scope of a variable declared with var is its current execution context,
//which is either the enclosing function or, for variables declared outside any function, global.
//If you re-declare a JavaScript variable, it will not lose its value.

exports.area = function(r) {
  return PI * r * r ;
}

exports.circumference = function(r) {
  return 2 * PI * r ;
}

