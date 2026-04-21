var isPalindrome = function (x) {
  let original = x;
  let rem = 0;
  let rev = 0;
  if (x === undefined || x === null) return false;
  if (x < -Math.pow(2, 31) || x > Math.pow(2, 31) - 1) return false;
  while (x) {
    rem = Math.floor(x % 10);
    x = Math.floor(x / 10);
    rev = rev * 10 + rem;
  }
  if (rev === original) return true;
  else return false;
};

let x = 121;
console.log(isPalindrome(x));
