const user = {
    username: "satyam",
    price: 999,

    welcomeMesg: function(){
        console.log(`${this.username}, welcome to website`)
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


