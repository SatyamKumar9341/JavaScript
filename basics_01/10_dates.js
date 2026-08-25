// Dates in JavaScript

let myDate = new Date()   // Date object, with instance myDate
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

console.log(typeof myDate)   // generally asked in interviews

// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())

let myCreatedDate = new Date(2025, 0, 15)  // months starts from 0
console.log(myCreatedDate.toDateString())

let MyCreatedDate = new Date(2026, 0, 25, 1, 53)
console.log(MyCreatedDate.toLocaleString())


let date1 = new Date("2026-01-24") // YY.MM.DD
let date2 = new Date("09-21-2026") // MM.DD.YY

console.log(date1.toLocaleDateString())
console.log(date2.toLocaleString())






let myTimeStamp = Date.now()
// console.log(myTimeStamp)

console.log(Math.floor(Date.now()/1000))




let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())