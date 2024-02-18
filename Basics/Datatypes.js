"use strict"; // Treat all JS code in new version
// alert("Error") // This work in Browser, Not in Node Js.

// console.log("Code should be readable")

// console.log(2 +
//     3);  This is not good pratices

//   https://tc39.es/ecma262/ --------> use for documataion

// console.log("Aleph");

// let name = "Aleph"
// let age = 25
// let isLoggedIn = false

// primitive

// Number ==> 2 to the power of 53
// Null ==> not value is present  
// String ==> ""
// Symbol ==> unique 
// BigInt ==> Use to store very big number
// Boolean ==> True / false
// undefined ==> Value is not defined

// const value = Symbol(123)
// const newValue = Symbol(123)
// console.log(value == newValue)
// console.log(typeof value);


//  Non primitive

// Array
/*
const myArray = ["Aleph", 1, "akanksha"];
console.log(myArray);
console.log(typeof myArray);
*/

// Object

/*let myObject = {
    Id: 123441,
    Name: "Aleph",
    Age: 26

}
console.log(myObject);
console.log(typeof myObject);*/

// Function

function myFunction() {
    console.log("Hi Hello World");    
}
myFunction()
console.log(typeof myFunction); // function object.

// console.log(typeof null); // Type of null is object
// console.log(typeof undefined); 