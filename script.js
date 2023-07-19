let lista = ["ARBOL", "ANGEL", "MOCOS", "CARRO","BARRO"];
//let palabra = "ARBOL"

let palabra = lista[Math.floor(Math.random()*lista.length)];
// alert (palabra); 
let intentos = 6;

const API = "https://random-word-api.herokuapp.com/word?length=5&lang=es"
fetch(API)
.then(responde => responde.json())
.then(responde => {
    console.log(responde)
    palabra=responde[0] .toUpperCase()
    console.log(palabra)
})
.catch(err => palabra = lista[Math.floor(Math.random()*lista.length)])


const BUTTON =  document.getElementById ("guess-button");
BUTTON.addEventListener('click', intentar);

function intentar(){

    const INTENTO = leerIntento();
    if (INTENTO == palabra ) {
        terminar("<h1>GANASTE!</h1>")
    }
    const GRID = document.getElementById('grid');
    const ROW = document.createElement('div');
    ROW.className = 'row'

    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
      
        if (palabra[i]===INTENTO[i]){
            SPAN.innerHTML = INTENTO [i];
            SPAN.style.backgroundColor = "green";
        } else if( palabra.includes(INTENTO[i]) ) {
            SPAN.innerHTML = INTENTO [i]; 
            SPAN.style.backgroundColor = "yellow";
        } else {
            SPAN.innerHTML = INTENTO[i]; 
            SPAN.style.backgroundColor = "gray";
        }
        ROW.appendChild(SPAN);
    }
    GRID.appendChild(ROW);

        intentos--
    if (intentos == 0){
        terminar("<h2>PERDISTE!</h2>")
    }
}


function leerIntento(){
    let intento = document.getElementById('guess-input').value;  
    intento = intento.toUpperCase()
    return intento
        
    }

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BUTTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}
    