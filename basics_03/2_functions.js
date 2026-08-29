// The rest operator (...) :-  used to collect multiple values into a single array.

function calculateCartPrice(...num1){
    return num1;

}
console.log(calculateCartPrice(200, 300, 500))



// passing object in function :
const user ={
    username: "satyam",
    age: 21
}

function handleObject(anyObject){
    console.log(`UserName is ${anyObject.username} and age is ${anyObject.age}`)
}

handleObject(user)


// Also, object can be passed in functions Argument :-
function HandleObj(Obj){
    console.log(`Course is ${Obj.course} Price is ${Obj.price}`)
}
HandleObj({
    course: "JavaScript",
    price: 999
})


// passing an array in function :-
const arr = [20, 80, 40, 60]

function returnSecondValue(anyArray){
    return anyArray[1];
}

// console.log(returnSecondValue(arr))
console.log(returnSecondValue([20, 80, 40, 60]))