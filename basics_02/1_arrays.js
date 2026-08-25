// Arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myheros = ["ironman, captain, spiderman"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[0])

// Array Methods :

myArr.push(6)   // adds new element at the end of an array
myArr.push(7)
console.log(myArr)

myArr.pop()  // delets last element from array
myArr.pop()
console.log(myArr)



myArr.unshift(9)  // adds element in array to the first index
console.log(myArr)
myArr.shift()    // removes element in array from first index
console.log(myArr)


console.log(myArr.includes(9))   // returns boolean value 
console.log(myArr.includes(3))   

console.log(myArr.indexOf(5))  // returns the index of element



const newArr = myArr.join()
console.log(myArr)
console.log(typeof myArr)
console.log(newArr)
console.log(typeof newArr)


// slice and splice :

console.log("A", myArr )

const myn1 = myArr.slice(1, 3)
console.log(" ", myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1, 3)
console.log(" ", myn2)
console.log("C", myArr)