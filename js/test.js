// console.log([] == ![]);
console.log("hi" - "hello");
console.log("hi" - 2);
console.log(2 - "hello");
console.log("h" - "h");

const s1 = "rajesh";
const s2 = 1999;

const alternative = (s1, s2) => {
  if (typeof s1 != "string" || typeof s2 != "string") {
    s1 = s1 + "";
    s2 = s2 + "";
  }
  let s3 = "";
  let length = Math.min(s1.length, s2.length);
  for (let i = 0; i < length; i++) {
    s3 = s3 + s1[i] + s2[i];
  }
  let bigString = s1.length > length ? s1 : s2;
  return s3.concat(s1.slice(length, bigString.length));
};

console.log(alternative(s1, s2));

// console.log('suman'+)
