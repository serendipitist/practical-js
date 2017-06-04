//Lambda functions
var sum = function sum() {
  var result = 0 ;

  [5,5,5].forEach(function addTo(number) { 
          result += number; });
          console.log(result);
};

sum();

// Named parmeter
 var userProto = {
  name: 'shireesha',
  email: 'ps.shireesha',
  showInsearch: true,
 };

 function createUser(name, email, showInsearch) {
  return {
    name: name || userProto.name,
    email: email || userProto.email,
    showInsearch: showInsearch

  };

 }

 console.log(createUser('param', '', ''));
// test('lambdas' , function() {
//    equal(sum(), 15 ,'result should be 15');
// });