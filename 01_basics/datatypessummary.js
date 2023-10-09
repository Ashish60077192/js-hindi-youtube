// Primitive are copied by their value

// 7 types : String, Number , Boolean, null, undefined, Symbol,BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 6548n
console.log(typeof(bigNumber))



// Reference (Non primitive) objects are copied by their reference

// Array, Objects, Functions

const heroes = ["shaktiman", "nagraj","doga"] 
let myObj ={
    name:"hitesh",
    age: 16,
}
const myFunction =function(){
    console.log("hello world");
}

typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"

// The data type of NaN is number
// The data type of an array is object
// The data type of a date is object
// The data type of null is object
// The data type of an undefined variable is undefined *
// The data type of a variable that has not been assigned a value is also undefined *