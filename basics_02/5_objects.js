// de structure of objects

const course = {
    name : "JavaScript in hindi",
    price : 999,
    instructor : "Satyam"
}

// console.log(course.instructor)  // printing once is okay, what if we have to print multiple of times 

const {instructor} = course     // deconstruction - 
console.log(instructor)         // now, we can access directly 

const {instructor : ins} = course   // also we can shorten the key for accessing value
console.log(ins)