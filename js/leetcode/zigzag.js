let x = "PAYPALISHIRING";
let numRows = 4;
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

let s = x
  .split("")
  .sort((a, b) => 0 - Math.random())
  .join("");

console.log(s);

console.log(Math.ceil(Math.random() * numRows));

console.log(Math.ceil(s.length % numRows));
