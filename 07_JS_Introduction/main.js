// // let fruits = ["apple", "banana", "orange"];

// // console.log(fruits[0]); // 'apple'
// // console.log(fruits[1]); // 'banana'
// // console.log(fruits[2]); // 'orange'

// console.log(new Date("2024-6-29").getDay()); // 6, Sat
// console.log(new Date("2024-6-30").getDay()); // 0, Sun
// console.log(new Date("2024-7-01").getDay()); // 1, Mon

// // This is regular comment
// /* This is another comment */

// /**
//  * Comment
//  * This is a comment
//  * in multiple line
//  */

// // String

// let myName = "Mike";
// let email = "mike@example.com";
// let hello2 = `Hello, ${myName}!!`;

// console.log(myName); // Mike
// console.log(email); // mike@example.com
// console.log(hello2); // Hello Mike!!

// // Number

// let number = 123;
// let opacity = 1.73;

// console.log(number); // 123
// console.log(opacity); // 1.73

// // Boolean

// let checked = true;
// let isShow = false;

// console.log(checked); // true
// console.log(isShow); // false

// // Undefined

// let undef;
// let obj = { abc: 123 };

// console.log(undef); // undefined
// console.log(obj.abc); // 123
// console.log(obj.xyz); // undefined

// // Null

// let empty = null;

// console.log(empty); // null

// // Object

// let user = {
//   // Key: value pair

//   name: "Mike",
//   age: 45,
//   isValid: true,
// };

// console.log(user); //
// console.log(user.name); // Mike
// console.log(user.age); // 45
// console.log(user.isValid); // true

// // Array

// let fruits = ["apple", "banana", "orange"];

// console.log(fruits[0]); // 'apple'
// console.log(fruits[1]); // 'banana'
// console.log(fruits[2]); // 'orange'

// // Variables

// let a = 2;
// let b = 10;

// console.log(a + b); // 12
// console.log(a - b); // -8
// console.log(a * b); // 20
// console.log(a / b); // 0.2

// // Updating variables

// let c = 10;

// console.log(c); // 10

// c = 100;

// console.log(c); // 100

// // Constants in JavaScript

// const d = 10;
// console.log(c); // 10

// // d = 1000;
// // console.log(d); // Uncaught TypeError: Assignment to constant variable.

// // Reserved words

// // let this = "hello!"; // SyntaxError
// // let if = 123; // SyntaxError
// // let break = true; // SyntaxError

// // Function declaration

// // function name(parameter) {}
// function myFunc() {
//   // statements
//   console.log(1234);
// }

// // calling function (execute function)
// myFunc(); // 1234

// // Assign function in a variable

// function returnFunc() {
//   return 123;
// }

// let x = returnFunc();
// console.log(x); // 123

// // Arguments and Parameters

// // function name(param0) {
// //   statements;
// // };

// function sum(a, b) {
//   return a + b;
// }

// let r1 = sum(1, 2); // 3
// let r2 = sum(7, 14); // 21
// let r3 = sum(2, 4); // 6

// console.log(r1, r2, r3); // 3, 21, 6

// // Defining functions in different ways

// // function declaration
// function hello(name) {
//   console.log(`hello, ${name}`);
// }

// // function expression
// let world = function () {
//   console.log("world!");
// };

// hello("JavaScript"); // hello JavaScript
// world(); // world

// // Method definitions

// // object
// const profile = {
//   name: "David",
//   age: 75,
//   // method
//   getName: function () {
//     return this.name;
//   },
// };

// const hisName = profile.getName();
// console.log(hisName);
// // Same code in one line
// console.log(profile.getName());

// // Conditional statements

// let isValid = true;
// let isChecked = false;

// if (isValid) {
//   console.log("Valid!"); // Valid!
// }

// if (isChecked) {
//   console.log("Checked!");
// }

// isValid = false;

// if (isValid) {
//   console.log("Valid!");
// } else {
//   console.log("Hide?"); // Hide?
// }

// let boxEl = document.querySelector(".box");

// console.log(boxEl);

// boxEl.addEventListener("click", function () {
//   console.log("clicked!!");

//   boxEl.classList.add("active");
//   console.log(boxEl.classList.contains("active"));

//   boxEl.classList.remove("active");
//   console.log(boxEl.classList.contains("active"));
// });

// let boxEls = document.querySelectorAll(".box");

// console.log(boxEls);

// boxEls.forEach(function (boxEl, index) {
//   boxEl.classList.add(`order-${index + 1}`);
//   console.log(index, boxEl);
// });

// let boxEl = document.querySelector(".box");

// // getter
// console.log(boxEl.textContent); // Box1

// // setter
// boxEl.textContent = "happy coding!";
// console.log(boxEl.textContent); // happy coding!

const a = "Hello!";
const b = a.split("").reverse().join("");

console.log(a); // Hello!
console.log(b); // !olleH
