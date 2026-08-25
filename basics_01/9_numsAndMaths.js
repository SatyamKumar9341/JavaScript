const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const num1 = 24.8955
console.log(num1.toPrecision(2))
console.log(num1.toPrecision(3))
console.log(num1.toPrecision(4))

const num2 = 1000000
console.log(num2.toLocaleString())     // US values
console.log(num2.toLocaleString('en-IN'))   // indian values

// **************** Maths ****************************** //

// console.log(Math)

console.log(Math.abs(-4))   // abs => converts -ve value to +ve value

console.log(Math.round(4.7))  // round() => rounds off the value
console.log(Math.ceil(5.1))  // ceil()  => rounds off in top value, eg.  5.1=>6
console.log(Math.floor(2.6)) // floor() => rounds off in lowest value, eg.  2.6=>2

console.log(Math.sqrt(81))  // sqrt() => returns square root of the given value

console.log(Math.min(9, 45, 3, 8)) // min() => return minimum value from array of numbers
console.log(Math.max(9, 45, 3, 8)) // max() => returns maximum value from array of numbers

console.log(Math.random());  // Math.random() => returns random values ranging btw 0-1 
console.log(Math.random()*10); // Shifts digit to left side
console.log((Math.random()*10) + 1) // random number can be 0.03..., so adding 1 never gives 0
console.log(Math.floor((Math.random() * 10) + 1))  // to get minimus round off value


// To get The between some range like below - 10 to 20
const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max - min + 1) + min)))