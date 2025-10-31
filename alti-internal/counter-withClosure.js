function counter() {
  let count = 0;
  return () => {
    count++;
    console.log("Count is: ", count);
  };
}

const countFunc = counter();
countFunc(); // Count is: 1
countFunc();
