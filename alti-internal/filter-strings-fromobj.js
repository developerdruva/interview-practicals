const obj = {
  a: {
    b: {
      c: "c-val",
    },
    d: "d-val",
  },
  e: {
    f: "f-val",
  },
  g: "g-val",
};
let temp = [];
const returnStrings = (obj) => {
  if (typeof obj === "string") {
    temp.push(obj);
  } else {
    Object.keys(obj).forEach((key) => returnStrings(obj[key]));
  }
};
returnStrings(obj);
console.log(temp);
