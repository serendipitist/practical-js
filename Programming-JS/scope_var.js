//scope === variable access
// context === this
//
"use strict";

var a =1;
// parent
function foo() {
 //child
  var b = 2;
  c = 3;
  console.log(a);
}

foo();

console.log(c);
