// Loosely typed dynamic language
// let x = "Hello World";

// console.log(typeof x);

// x = 101;

// console.log(typeof x);

// x = true;

// console.log(typeof x);

// let arr = [101, 102, 103, 104, 105];

// console.log(3 > 2 > 1);

// Back tick

// const username = "John Doe";
// const age = 32;

// let someString = `Guden Morgen from ${username}

// I'm ${age} years old!

// `;

// console.log(someString);

// TYpe conversion and coercion

// let x = "20";
// let y = 10;

// // implicit type casting
// console.log(x + y); // 2010
// console.log(x - y); // 10

// // Explicit type casting
// const convertedX = Number(x);
// console.log(typeof convertedX);

// let flag = "true";
// let convertedFlag = Boolean(flag);
// console.log(typeof convertedFlag);

// Loops

// let marks = [98, 98, 99, 97, 95, 99];

// for (let i = 0; i < marks.length; i++) {
//   console.log(marks[i]);
// }

// for (let x of marks) {
//   console.log(x);
// }

// OBJECTS
// let user = {
//   name: "Monica",
//   age: 23,
//   isAdmin: true,
//   joiningDate: new Date("Dec 21, 2023"),
//   address: {
//     city: "Chennai",
//     street: "201 Main road, OMR",
//   },
//   friends: ["John", "Jack", "Jill", "Jenny"],
//   addFriend: function (name) {
//     this.friends.push(name);
//   },
// };

// user.addFriend("James");

// console.log(user.friends);

// ARRAY

let marks = [99, 98, 97, 95, 98];

console.log(marks);

// marks.splice(2, 1);
// marks.unshift(91);
// marks.push(89);

// console.log(marks);

// let newArray = marks.map(function (value) {
//   return value * 2;
// });

// let newArray = marks.filter(function (value) {
//   return value >= 97;
// });

// console.log(newArray);

// const position = marks.findIndex(function (value) {
//   return value === 90;
// });

// console.log(position);

// let joinedArray = marks.join(",");

// console.log(joinedArray);

// FUNCTIONS
// Function Declaration
// function add(n1, n2) {
//   return n1 + n2;
// }

// console.log("Sum : ", add(2, 4));

// Function Expression
// let sum = function (n1, n2) {
//   return n1 + n2;
// };

// console.log("Sum : ", sum(3, 5));

// Arrow Function
// let add = (n1, n2) => n1 + n2;

// console.log("Add : ", add(4, 5));

// Callback - supplied as argument to demoFn
// function greet() {
//   console.log("Hola");
// }

// function demoFn(cb) {
//   cb();
// }

// demoFn(greet);

// HOF - Returning function from HoF function
function mystry() {
  return function () {
    return 12;
  };
}

let mysterious = mystry();
console.log(mysterious()); // ?
