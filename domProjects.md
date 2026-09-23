#  Projects related to DOM

## project 1 - Background Color Chnager
```javascript
// selecting buttons 
const button = document.querySelectorAll('.button')
// selecting body
const body = document.querySelector('body')

button.forEach( function(btn){
    console.log(btn)
    btn.addEventListener('click', function(event){
        // console.log(event)
        // console.log(event.target)
        
        if(event.target.id === 'grey' || 'white' || 'green' || 'yellow'){
            body.style.backgroundColor = event.target.id
        }
        // if(event.target.id === 'white'){
        //     body.style.backgroundColor = event.target.id
        // }
        // if(event.target.id === 'green'){
        //     body.style.backgroundColor = event.target.id
        // }
        // if(event.target.id === 'yellow'){
        //     body.style.backgroundColor = event.target.id
        // }
    })
});

```

## Project 2 - BMI Calculator

```javascript
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height<0 || isNaN(height)){
        results.innerHTML = `Please Give a valid height ${height}`

    }else if(weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML = `please Give a valid weight ${weight}`
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // show result 
        results.innerHTML = `<span>${bmi}</span>`
    }

})

```