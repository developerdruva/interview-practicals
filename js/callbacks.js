// var thisEx = {
//   number: 123,
//   logFun: function () {
//     console.log("hi in normal fun ", this);
//   },
//   arrowFun: () => console.log("this in arrow", this),
// };

// thisEx.logFun();
// thisEx.arrowFun();

// Define an array of numbers
var numbers = [1, 2, 3, 4, 5];

// Define the main function
function mainFunction(callback) {
  console.log("Performing operation...");
  // Use Array.forEach to loop through the array of numbers
  numbers.forEach(callback);
}

// Define the callback function
function callbackFunction(number) {
  console.log("Result: " + number);
}

// Call the main function with the callback function
mainFunction(callbackFunction);

// class MyClass {
//   constructor() {
//     this.name = "MyClass Instance";
//   }

//   myMethod() {
//     this.name = "Updated Name";
//     console.log("Inside myMethod, this:", this, "\n");
//   }
//   myArrowMethod = () => {
//     console.log("Inside myArrowMethod, this:", this);
//   };
// }

// const myInstance = new MyClass("hi");
// myInstance.myMethod();
// myInstance.myArrowMethod();
