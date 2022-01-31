const painting = document.querySelector('.painting')
let selectedColor = 'blue'


const bluePicked = document.querySelector('#blue')
const redPicked = document.querySelector('#red')
const yellowPicked = document.querySelector('#yellow')
const greenPicked = document.querySelector('#green')

bluePicked.addEventListener('click',function(e) {
    selectedColor = 'blue'
})
redPicked.addEventListener('click',function(e) {
    selectedColor = 'red'
})
yellowPicked.addEventListener('click',function(e) {
    selectedColor = 'yellow'
})
greenPicked.addEventListener('click',function(e) {
    selectedColor = 'green'
})


painting.addEventListener('click',function(e){
    e.target.style.backgroundColor = selectedColor
})