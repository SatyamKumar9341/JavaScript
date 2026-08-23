const name = "Satyam"
const repoCount = 8

console.log("hello my name is " + name + " and my repoCount is " + repoCount)   // old syntax

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)        // modern syntax


// another way of declaring String
const gameName = new String('Satyam-ig')
console.log(gameName)

//key value pair access of string
console.log(gameName[0])
console.log(gameName.__proto__)



// Bulild inn String Methods in JavaScript :-

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('t'))

const newStr = gameName.substring(0, 1)
console.log(newStr)


// slice 
const str1 = gameName.slice(2, 9)
console.log(str1)

// trim
const str2 = "        satyam "
console.log(str2)
console.log(str2.trim())

// replace
const url = "https://satyam.com/satyam%20000%kumar"
console.log(url)
console.log(url.replace("%20000%", "-"))

// includes (returns boolean value)
console.log(url.includes("kumar"))



