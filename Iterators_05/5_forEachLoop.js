// for each 

const lang = ["JavaScript", "Java", "Python", "Cpp"]

lang.forEach( function (val){            // forEach requires a callBack function. like here. function (val){} 
    // console.log(val)
} )


lang.forEach( (item) => {               // here, callBack is an arrow function. (val) => {}
    // console.log(item)
} )


function printMe(vall){                 // function printMe for callBack
    console.log(vall)
}
lang.forEach(printMe)                   // passing printMe function in forEach(), forEach(printMe)




// forEach() has access of index as well as arrayList
lang.forEach( (item, index, arr) => {                
    console.log(item, index, arr)
})



// DataBase values are in this format (an array of Objects)
// using loop :
const myLang = [
    {
        langName : 'JavaScript',
        langFile : '.js'
    },
    {
        langName : 'Ruby',
        langFile : '.rb'
    },
    {
        langName : 'Python',
        langFile : '.py'

    }
]

myLang.forEach( (items) => {
    console.log(items.langName)
} )