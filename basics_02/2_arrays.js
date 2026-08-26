const marvelheroes = ['IronMan', 'SpiderMan', 'hulk']
const dcHeroes = ['SuperMan', 'Flash', 'BatMan']

// marvelheroes.push(dcHeroes)  // dcHeroes, an array is inserted as an element in another array
console.log(marvelheroes)

// console.log(marvelheroes[2])
// console.log(marvelheroes[3])

// concat kethod :-
// const allHeroes = marvelheroes.concat(dcHeroes) 
// console.log(marvelheroes)     // no changes in the marvelheros is done 
// console.log(allHeroes)


// Spread method :-
// const newAllHeroes = [...marvelheroes, ...dcHeroes]
// console.log(newAllHeroes)


const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const usableArr = anotherArr.flat(Infinity) 
console.log(usableArr)


console.log(Array.isArray("satyam"))    // returns boolean that it is an array or not
console.log(Array.from("satyam"))   // converts into an array



let score1 = 101
let score2 = 102
let score3 = 103

console.log(Array.of(score1, score2, score3))   // makes an array from given parameters
