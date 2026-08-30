// Immediately invoked function expression (IIFE) :

(function chai(name){      // named IFFE
    console.log(`Chai pee loo, ${name}`)

})("Satyam");



// IIFE in arrow function

((name) => {
    console.log(`Chai pee loo, ${name}`)
})("Satyam Kumar");




// IIFE stands for: Immediately Invoked Function Expression
// It is a function that is defined and executed immediately.

// Syntax :-
// (function () {
//     console.log("Hello");
// })();

// ****** Why use IIFE? ******
// 1. Avoid global scope pollution : Variables inside an IIFE stay private.


// The semicolon in the END is important, JavaScript may otherwise treat the second IIFE as a continuation of the previous expression.