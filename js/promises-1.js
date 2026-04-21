new Promise((resolve) => {
  console.log(1);
  resolve(2);
}).then((result) => console.log(result));

console.log(3);

// console.log("A");

// setTimeout(() => {
//   console.log("B");
//   Promise.resolve().then(() => console.log("C"));
// }, 0);

// Promise.resolve().then(() => console.log("D"));

// console.log("E");

// Synchronous → A, E

// Microtask → D

// Macrotask → B

// Microtask from inside macrotask → C

// | Type of operation     | Example                                           |
// | --------------------- | ------------------------------------------------- |
// | **Timers**            | `setTimeout`, `setInterval`                       |
// | **DOM events**        | click, scroll, keydown                            |
// | **Network callbacks** | `fetch().then(...)` (the `.then` still microtask) |
// | **setImmediate**      | (Node.js only)                                    |
// | **I/O callbacks**     | file operations                                   |
