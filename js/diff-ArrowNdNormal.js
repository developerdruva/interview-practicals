var name = "rajesh";

const obj = {
  name: "rks",
  role: "software",
  myfun: function () {
    console.log("this inside obj my fun -----> ", this.name);
  },
  myfunArrow: () => {
    let name = "kumar";
    console.log("this inside obj my fun arrow -----> ", this.name);
  },
};
// console.log("this obj name", obj.name);
obj.myfun();
obj.myfunArrow();
