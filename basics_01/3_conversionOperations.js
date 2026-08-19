let score = "33"  // only number

console.log(typeof score)
let valInNumber = Number(score)  // converting in number
console.log(typeof valInNumber)  //check for type
console.log(valInNumber)



let numstr = "33abc"   // number+string
let valinNo = Number(numstr)  // converting in number
console.log(typeof valinNo)   // check for type
console.log(valinNo)

let n = "satyam"
let num = Number(n)
console.log(num)  // gives NaN

// "33" => 33   (easily converted to number)
// "33abc" =>   (on converting (number+string) value it give NaN)
// true => 1; false => 0   (on converting true it give 1 and false as 0 respectively)
// null => 0   (on converting null into number it gives 0)
// undefined => NaN (on converting undefined it gives NaN(Not a Number))

let isLoggedin = 1
let booleanIsLoggedIn = Boolean(isLoggedin)
console.table([isLoggedin, booleanIsLoggedIn])

// 1 => true; 0 => false
// "satyam" => ture  (for string it gives ture)
// "" => false    (for empty string it gives false )

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber)
