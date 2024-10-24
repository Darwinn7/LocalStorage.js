///necesito capturar los datos a modiifcar datos 
const miTexto =  document.getElementById('texto');
const miBoton = document.getElementById(`miboton`);


//crear 3 funciones para unclick doble click  y click derecho
function unclick(){
    miTexto.textContent="haz hecho click 👍"
    miTexto.style.backgroundColor="green"

}

function dobleClick(){
    miTexto.textContent="haz hecho doble click ✌"
    miTexto.style.backgroundColor="blue"

}



function clickDerecho(){
    miTexto.textContent="haz hecho  click derecho 👌"
    miTexto.style.backgroundColor="pink"
}

//capturar los eventos 

document.getElementById(`miboton`).addEventListener(`click`,function(){
    unclick()
})

document.getElementById(`miboton`).addEventListener(`dblclick`,function(){
    dobleClick()
})

miBoton.addEventListener(`contextmenu`,function(event){
    (event).preventDefault()
    clickDerecho()

})
