// Stack and Heap are the memory concepts used by JavaScript to manage data

// Stack :- 
//   stack memory stores primitive values 
//   on access we get copy of the value

// Heap :- 
//    heap memory stores non-primitive values (objects, arrays)
//    on access we get reference of that value 


// ***********  Stack  *******************

let myName = "satyam"
let anotherName = myName

anotherName = "SATYAM KUMAR"    // changes value only for anotherName not for myName

console.log(myName)
console.log(anotherName)




// **************  Heap *******************

let userOne = {
    email : "user@google.com",
    upi: "7834@ybl"
}

let userTwo = userOne

userTwo.email = "satyam@gmail.com"    //changes the reference of userOne values

console.log(userOne.email)
console.log(userTwo.email)
