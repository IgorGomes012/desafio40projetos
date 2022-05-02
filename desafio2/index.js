let adiciona = 0
let diminui = 0
let zera = 0

function incrementa(){
   adiciona++
   document.getElementById("h2").textContent = adiciona
   final = adiciona
   trocaCor()
}

function decrementa(){
   diminui = adiciona--
   document.getElementById("h2").textContent = diminui
   final = diminui
   trocaCor()
}

function reset(){
   zera = 0
   diminui = 0
   adiciona = 0
   final = 0
   document.getElementById("h2").textContent = zera
   trocaCor()
}

 function trocaCor(){
    if(final < 0){
       document.getElementById("h2").style.color = "red"
    }
    if(final > 0){
      document.getElementById("h2").style.color = "green"
   }
   if(final === 0){
      document.getElementById("h2").style.color = "pink"
   }
 }