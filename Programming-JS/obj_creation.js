function Car(color, direction, mph) {
  this.color = color || 'pink' ;
  this.direction = direction || 0;
  this.mph = mph || 0;

  this.gas =function gas(amount) {
    amount = amount || 10;
    this.mph += amount;
    return this;
  };

  this.brake = function brake(amount) {
    amount = amount || 10;
    this.mph = ((this.mph - amount) < 0)? 0 : this.mph - amount;
    return mph;
  };
}

var myCar = new Car();

(function() {
  var x = 3;
  console.log(x);
})();

console.log(myCar);

//Factory  : A factory method used to create other objects. Its purposes is to abstract the details of object creation from object use.
//In object oriented design, factories are commonly used where a simple class is not enough.
//Gang of Four
//
//
const car = () => {
const sound = 'jazz';

return {
  engine: () => console.log(sound)
  }
}

const  honda = car()
honda.engine();