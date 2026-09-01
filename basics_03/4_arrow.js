const user = {
    course: "satyam",
    price: 999,

    welcomeMesg: function(){
        console.log(`${this.course}, welcome to website`)
        console.log(this)
    }
}

// user.welcomeMesg()
// user.username = "sam"
// user.welcomeMesg()

// console.log(this)


function chai(){
    let username = "satyam"
    console.log(this.username)
}
// chai()


// arrow function
// () => {}

const addTwo = (num1, num2) => {
    return num1 + num2      // explicit return
}    
console.log(addTwo(3, 4))


// const add = (num1, num2) => num1 +num2   
const add = (num1, num2) => ( num1 + num2 )    // implicit return
console.log(add(3, 4))




// ************************* Explicit and Implicit return ****************************************** //


// 1. Explicit Return :
// You write the return keyword yourself
// Eg:-
// const Add = (a, b) => {
//     return a + b
// }
// console.log(add(10, 20))

// 2. Implicit Return :
// With an arrow function, if you remove {}, the expression is automatically returned.
// Eg :-
// const Add = (a, b) => a + b
// console.log(add(10, 20))