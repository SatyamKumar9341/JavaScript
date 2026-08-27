// singleton     
// object.create   // constructor method

// object literals :

const sym = Symbol("key");

const JsUser = {
    name : "Satyam",
    "full name" : "Satyam Kumar",
    [sym]: "This is a symbol value",
    age : 21,
    loaction : 'Dehradun',
    email : "satyam@google.com",
    isLoggedIn : false,
    lastloggin : ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])  // some times it get's mandatory to access values by square brackets[] 
console.log(JsUser[sym]);          // symbols can only be accessed by using sqare barckets 
console.log(typeof sym)

JsUser.email = "Satyam@microsoft.in"   // changes to object key values
console.log(JsUser.email)
// Object.freeze(JsUser)                  // freezes the object jsUser => changes doesn't propagate
JsUser.email = "satyam@outlook.com" 
console.log(JsUser.email)              // doesn't change value for the key email
console.log(JsUser)



// functions 

JsUser.greeting  = function(){
    console.log("Hello Js User")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this["full name"]}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())