// for of

const arr = [1, 2, 3, 4, 5]

for (const nums of arr){
    // console.log(`numbers in array : ${nums}`)
}


const greetings = "Good Morning!"

for(const greet of greetings){
    //  console.log(`letters are : ${greet}`)
}


// const greetings = "Good Morning!"

// for(const greet of greetings){
//     if (greet ==  " "){
//         continue
//     }
//     console.log(`letters are : ${greet}` )
// }


// Maps : maintains the order as well as uniquenes

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States Of America")
map.set("EU", "Europe")
map.set("IN", "India")    // adding same item wont exist in maps

// console.log(map)

for (const [key, Value] of map){
    // console.log(key, ":-", Value)
}




const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman',
    'game3' : 'GTA'
}

// for(const [key, value] of myObject){
//     console.log(key, ":-", value)

// }