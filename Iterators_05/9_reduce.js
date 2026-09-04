// reduce()  method
// usecase - Adding of multiple items in Cart

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (Acc, Cur_val) {            using normal function 
//     console.log(`Accumulator : ${Acc} Current Value ${Cur_val}`)
//     return Acc + Cur_val
// }, 0 )

const myTotal = myNums.reduce( (Acc, Cur_val) => {                 // using arrow function
    // console.log(`Accumulator : ${Acc} Current Value ${Cur_val}`)
    return Acc + Cur_val
}, 0 )

// console.log(myTotal)




// Example :

const shoppingCart = [
    {
        itemName: "JS course",
        price : 2999
    },
    {
        itemName: "Python course",
        price : 999
    },
    {
        itemName: "Java course",
        price : 2999
    },
    {
        itemName: "Data Science course",
        price : 12999
    }
]

const TotalPay = shoppingCart.reduce( (Acc, item) =>  Acc + item.price, 0 )
console.log(`Total Price to Pay : ${TotalPay}`)