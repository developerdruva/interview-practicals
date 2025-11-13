const x = {
  name: "rajesh",
  logf: function () {
    console.log(" my name  ", this.name); // rajesh
  },
};

x.logf();
const a = x.logf.bind(x);

console.log("outer this", this); // {}
a();
