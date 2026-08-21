// JavaScript is dynamically typed language => you dont have to specify the variable type, 
// and same variable can store different types of value:
// like : let x = 100   - number 
//        let x = "satyam"   - string
//        let x = true     - boolean


// dataTypes - Primitive and non-Primitive 
// categarisation is based on storage and access of data :-
//   1. primitive (call by value)
//   2. non-primitive (call by reference)

// primitive (7 Types) => String, Numbers, Boolean, null, undefined, symbols, bigInt
const score = 100
const scoreVal = 100.3

const isLoggedIn = true

const outSideTemp = null

let userEmail;   // primarily undefined 

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 344563367737783n 
console.log(typeof bigNumber);




// Non-primitive(reference) => Arrays, Objects, Functions

const heroes = ["hulk", "spiderman", "ironman", "captainMarvel"];  //Array


let myObj = {            // Object
    name : "satyam",
    age : 21,
}


const myFun = function(){              // Function
    console.log("Avengers Assemble")

}

console.log(typeof myFun)


