// const tinderUser = new Object()     // constructor method
                                       // => singleton object


const tinderUser = {}

tinderUser.name = "satyam"
tinderUser.id = "123abc"
tinderUser.isLoggedIn = false

// console.log(tinderUser)



// nesting in objects....
const regularUser = {
    email : "sone@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Satyam",
            lastName : "Kumar"
        }
    }
}
// console.log(regularUser.fullName?.userFullName)      // ? => checks if fullName exixts or not



// conbining two or more  objects in one :
const obj1 = {1 : 'A', 2 : 'B'}
const obj2 = {3 : 'A', 4 : 'B'}

// const obj3 = {obj1, obj2}     => two different objects in one (obj3). hence, wrong way to combine like this

const obj3 = Object.assign(obj1,obj2)    // corrrect way for combining two or more objects
            //  or
// const obj3 = Object.assign({}, obj1, obj2)     // adding {} is a good syntax. Allthough, it's Optional    
console.log(obj3)


// Combining Object using the spread operator (...)
const ob1 = { 1:"a", 2:"b" }
const ob2 = { 3:"c", 4:"d" }
const ob3 = { 5:"e", 6:"f" }

const obj4 = {...ob1, ...ob2, ...ob3}
console.log(obj4)


// Array of Objects 
const user = [         // an array of objects
    {
        id : 1,
        email : "some@gmail.co.in"
    },
    {
        name : "SatyamK"
    },
    {
        LoginInf : "NA"
    }
];
console.log(user[1].name)


 // **************************************************************************************************** //
// **************************************************************************************************** //


const myObj = {
    name: "satyam kumar",
    age: 21,
    email: "satty@gmail.co.in"
}

console.log(Object.keys(myObj))   // accessing all keys of object - returns only keys
console.log(Object.values(myObj))  // accsessing all the values of object - returns only values
console.log(Object.entries(myObj))  // returns key value as an array     1st=>key ,  2nd=>value ['name', 'satyam']

console.log(myObj.hasOwnProperty('email'))  // returns boolean value // property exists or not