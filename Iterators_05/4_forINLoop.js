// for in Loop 

const myObject = {
    js : "JavaScript",
    cpp : "C++",
    rb : "Ruby",
    swift : "Swift by apple"
}

for(const key in myObject){     
    // console.log(`${key}, is shortcut of ${myObject[key]}`)
}



const prog = ['JS', 'Ruby', 'Python', 'java']
for(const key in prog){
    console.log(prog[key])
}


// for in Loop is not iterable to maps 