// singleton     
// object.create   // constructor method

// object literals :

const mySym = symbol("key1")

const JsUser = {
    name : "satyam",
    "full name" : "Satyam Kumar",
    [mySym] : "mykey1",
    age : 21,
    loaction : 'Dehradun',
    email : "satyam@google.com",
    isLoggedIn : false,
    lastloggin : ["monday", "saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(typeof JsUser[mySym])