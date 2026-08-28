function sayName(){
    console.log('S')
    console.log('A')
    console.log('T')
    console.log('Y')
    console.log('A')
    console.log('M')
}

// sayName()


// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2) 
// }

// addTwoNumbers(3, "4")



// function addTwoNumber(num1, num2){
//     return num1 + num2;
// }

// const result = addTwoNumber(3, 5)
// console.log(result);


// *************************************************************************************************************************** //


// function loginuserMesg(username){
//     return `${username}, just Logged inn`

// }

// // const result = loginuserMesg("Satyam Kumar")
// // console.log(result)

// console.log(loginuserMesg("Satyam"))


// ************************************************************************************************************************ //


function loginUserMesg(userName = "sam"){
    if (!userName){
        console.log("Please enter username");
        return
    }
    return `${userName}, just logged inn`;
}

console.log(loginUserMesg("Satyam"))


