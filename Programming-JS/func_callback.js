function foo (callback) {
  if(callback) {
    console.log("here there");
  }
}

function logDone() {
  console.log("ok");
}
foo(logDone);
foo()