
   

function trocaCor(){
let r = Math.floor(Math.random()*255)
let g = Math.floor(Math.random()*255)
let b = Math.floor(Math.random()*255)
let change = document.getElementById("color1");
change.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
}