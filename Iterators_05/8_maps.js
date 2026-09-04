const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// newNums = myNums.map( (num) => { return num + 10 } )       // => remember to return if you are openning scope

// const newNums = myNums.map().map().filter()   => chainning of multiple methods 
const newNums = myNums
                .map( (nums) => nums * 10 )
                .map( (nums) => nums + 1 )
                .filter( (nums) => nums >= 60 )

console.log(newNums)