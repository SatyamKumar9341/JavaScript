const coding = ["js", "java", "ruby", "python", "cpp"]

const value = coding.forEach( (item) => {
    // console.log(item)
    return item 
} )
// console.log(value)



// to return values in a variable, we need to use .filter()

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => {
    return num > 4;
} )
// console.log(newNums)

// using forEach() it becomes a bit complex :
let newNum = []
myNums.forEach( (nums) => {
    if(nums > 4){
        newNum.push(nums);
    }
} )
// console.log(newNums)



