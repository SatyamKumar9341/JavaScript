// for loop :-

for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(i)
}


// for(let i = 0; i <= 10; i++){
//     console.log(`Outter Loop Value ${i}`)
//     for(let j = 0; j <+ 10; j++){
//         console.log(`Inner Loop Value ${j} and inner loop ${i}`)

//     }
// }


// for (let i = 1; i <= 10; i++) {

//     console.log(`Table of ${i}`)

//     for (let j = 1; j <= 10; j++) {

//         console.log(`${i} X ${j} =  ${i * j}`)

//     }
// }



let myArray = ["Flash", "Batman", "SuperMan"]

for(let i=0; i<myArray.length; i++){
    console.log(myArray[i])
}


// break and continue 
for (let index = 1; index <= 10; index++) {

    if(index == 5){

        console.log(`5 detected`)
        break

    }

    console.log(`Value if i is ${index}`)
    
}


for (let index = 1; index <= 10; index++) {

    if(index == 5){

        console.log(`5 detected`)
        continue                      // ek galti maaf

    }

    console.log(`Value if i is ${index}`)
    
}