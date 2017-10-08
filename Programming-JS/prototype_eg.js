
var switchProto = {
  isOn: function isOn() {
    console.log(this.state);
  },

  toggle: function toggle() {
    this.state =!this.state;
    return this;
  },
  state: false
},
switch1 = Object.create(switchProto),
switch2 = Object.create(switchProto);

console.log(switch1.toggle());