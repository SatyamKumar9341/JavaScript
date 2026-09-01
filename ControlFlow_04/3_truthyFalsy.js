const userEmail = "satyam@ai.com"

if (userEmail){                   // userEmail giving true 
    console.log("Email Exists")
} else {
    console.log("Email Does'nt Exists")
}

// falsy values : 0, -0, 0n (BigInt), "", null, undefined, NaN.
// truly values : 1, "0", 'false', " ", [], {}, function(){}


// detect if an array is empty
const useremail = []
if(useremail.length === 0){
    console.log("Array is empty")
}

// detect if the object is empty or not
const emptyObj = {}
if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}



console.log( false == 0)
console.log(false == '')
console.log(0 == '')