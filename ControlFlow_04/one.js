const temperature = 41

if (temperature >= 50){
    console.log("temperature less than 50")

}else{
    console.log("temperature grater than 50")
}



const score = 200
if(score >= 100){
    const power = "fly"
    console.log(`user power is ${power}`)
}
// console.log(`user power ${power}`)   // var scope is global


const balance = 1000
if(balance > 500) console.log("test");   // implicit scope


// multiple condition check 

const userLoggedIn = true
const debitAddedd = true
const loggedFromGoogle = false
const loggedFromEmail = true

if (userLoggedIn && debitAddedd){
    console.log("You r Logged inn, Allowed to Purchase courses")
}else{
    console.log("please loggin first")
}


if(loggedFromEmail || loggedFromGoogle){
    console.log("User Logged inn")
}




