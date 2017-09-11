//Context === this
//window is default context
//
//
//
var obj = {
  foo: function(){
    console.log(this === window);
  }
}

obj.foo();

//three javascript method changing context
//call, apply, bind
obj.foo();
console.log(this);