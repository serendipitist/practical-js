

var safeRotate = function safeRotate(arr) {
  var arr = [12,34,45];
  newArray = arr.slice(0);
  newArray.push(newArray.shift());
  return newArray;
}

//stateless function are great  for high concurreny application
//
// can be used for library methods

console.log(safeRotate());

//partial Application and currying
//partial application wraps a function that takes multiple arguments and returns a function
//add function => add(1,2,3) => add(1)(2)(3) //currying a function borrowed from lisp family language