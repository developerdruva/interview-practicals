const obj = {
  name: "rajesh",
  age: 30,
  location: "India",
  fn: () => {
    console.log(this.name, "function called");
  },
  fnchi: () => {
    console.log(this.age, "regular function called");
  },
  callBind: function () {
    console.log(this.location, "bind function called");
  },
};

obj.fn();

obj.fnchi.bind(obj)();
const x = obj.callBind;
x.bind(obj)();
