let x = 1534236469;
// 321

var reverseInt = function (x) {
  let isNegative = x < 0;
  let s = 0;
  let lastDigit = 0;
  if (isNegative) x = -x;
  while (x > 0) {
    lastDigit = Math.floor(x % 10);
    x = Math.floor(x / 10);
    s = s * 10 + lastDigit;
  }
  s = isNegative ? -s * 1 : s * 1;

  if (s > Math.pow(2, 31) - 1 || s < -Math.pow(2, 31)) return 0;
  return s;
};
console.log(reverseInt(x));
console.log(Math.pow(2, 31) - 1 > 1534236469);
console.log(2147483647 > reverseInt(x));
