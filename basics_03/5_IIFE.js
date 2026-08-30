// Immediately invoked function expression (IIFE) :

(function chai(name){      // named IFFE
    console.log(`Chai pee loo, ${name}`)

})("Satyam");



// IIFE in arrow function

((name) => {
    console.log(`Chai pee loo, ${name}`)
})("Satyam Kumar");
