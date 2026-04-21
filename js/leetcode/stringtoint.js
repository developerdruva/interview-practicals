let s = "-91283472332";

var myAtoi = function (s) {
  if (s === undefined || s === null) return 0;
  const num = parseInt(s);

  if (num > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
  if (num < -Math.pow(2, 31)) return -Math.pow(2, 31);
  if (isNaN(num)) return 0;
  else return num;
};
console.log(myAtoi(s));
