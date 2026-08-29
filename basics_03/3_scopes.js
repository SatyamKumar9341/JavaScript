// Global and local scopes in JavaScript
// global is also accessable within the curly braces{}
// local is accessable only within the curly braces{}
// like: in functions, if-else, loops


var c = 300

if (true){
    let a = 10
    const b = 20
    var c = 30   // global c=300 is overwritten by local var c=30
}

// console.log(a)    - error: a is not defined
// console.log(b)    - error:  b is not defined
console.log(c)     // runs and gives output by accessing local variable of if => 30



function one(){
    const username = "satyam"

    function two(){
        const website = "YouTube"
        console.log(username)
    }

    // console.log(website)     - cant access local variable of fun two() 
    two()

}

one()



if(true){
    const userName = "satyam"
    if(userName === "satyam"){
        const srName = " kumar"
        console.log(userName + srName)
    }
    // console.log(srName)   - gives error(scope issue)
}
// console.log(userName)    - gives error (scope issue)


// ******************** Interesting *********************** //


// Calling of functions depends on its declaration type :-

//  Case 1 : function is called before declaration 
console.log(addOne(5))
function addOne(num){   // function is just declared
    return num + 1
}

// Case 2 : function is stored in variable addTwo   -addTwo sometimes called expression
// this function cannot be called before declaration as done in case 1
//addTwo()      - gives error : Cannot access 'addTwo' before initialization
const addTwo = function(num){    // function is declared and hold in a variable
    return num + 2
} 
console.log(addTwo(5))
