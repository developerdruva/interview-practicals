const greet = (x, y) => x * y;

const processUser = (callback, z) => {
  //   let z = 15;
  return callback + z;
};

console.log(processUser(greet(100, 2), 15));
