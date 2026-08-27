// singleton     
// object.create   // constructor method

// object literals :

const sym = Symbol("key");

const JsUser = {
    name : "satyam",
    "full name" : "Satyam Kumar",
    [sym]: "This is a symbol value",
    age : 21,
    loaction : 'Dehradun',
    email : "satyam@google.com",
    isLoggedIn : false,
    lastloggin : ["monday", "saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[sym]);
console.log(typeof sym)

JsUser.email = "Satyam@microsoft.in"   // changes to object key values
console.log(JsUser.email)
// Object.freeze(JsUser)                  // freezes the object jsUser => changes doesn't propagate
JsUser.email = "satyam@outlook.com" 
console.log(JsUser.email)              // doesn't change value for the key email