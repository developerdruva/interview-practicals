const x = {
  name: "rajesh",
  loc: "hyd",
  tech: {
    front: "js",
    back: "nodejs",
  },
};

let obj = { ...x };
console.log(x);
obj.name = "kumar"; // shallow copy x will not change, nested object will change
obj.tech.front = "reactjs";
console.log(x);
let y = JSON.parse(JSON.stringify(x));
y.tech.front = "raj";
console.log(x);
