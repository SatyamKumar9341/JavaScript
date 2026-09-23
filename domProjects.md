#  Projects related to DOM

## project 1
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