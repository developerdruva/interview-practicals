const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (question) => {
  return new Promise((resolve) => {
    rl.close();
    resolve([3, 2, 4, 1]);
    // rl.question(question, (answer) => {
    //   const arr = answer.split(" ").map(Number);
    //   resolve(arr);
    //   rl.close();
    // });
  });
};

askQuestion("Enter numbers separated by spaces: ").then((res) => {
  let res1 = res.filter((num) => num % 2 == 0);
  let res2 = res.filter((num) => num % 2 != 0);
  console.log("Sorted Array:", [...res1, ...res2]);
});
