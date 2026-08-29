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

// console.log(a)  // error: a is not defined
// console.log(b)  // error:  b is not defined
console.log(c)     // runs and gives output by accessing local variable of if => 30

