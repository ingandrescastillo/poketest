//Variables de iniciar juego
const sectionseleccionarataque = document.getElementById('seleccionar-ataque')
const sectionreset = document.getElementById('reiniciar')
const botonMascota = document.getElementById('boton-pokemon')
const botonagua = document.getElementById('boton-agua')
const botonfuego = document.getElementById('boton-fuego')
const botonplanta = document.getElementById('boton-planta')
const botontierra = document.getElementById('boton-tierra')
const botonreiniciar = document.getElementById('boton-reiniciar')

//Variables Seleccionar Mascota

const sectionseleccionarpokemon = document.getElementById('seleccionar-pokemon')
const pokemon1 = document.getElementById('Alain')
const pokemon2 = document.getElementById('Roy')
const pokemon3 = document.getElementById('Cynthia')
const pokemon4 = document.getElementById('Lionel')
const pokemon5 = document.getElementById('Dianta')
const pokemon6 = document.getElementById('Steven')
const spanpokemon= document.getElementById('mascota-jugador')

// Variables Seleccionar Mascota Rival
const spanpokemonrival = document.getElementById('mascota-rival')

//Variables de Combate
const spanvidajugador = document.getElementById('vidas-jugador')
const spanvidasrival = document.getElementById('vidas-rival')

//Variables Crear Mensaje
const sectionmensajes = document.getElementById('resultado')
const ataquesdeljugador = document.getElementById('ataques-jugador')
const ataquesdelrival = document.getElementById('ataques-rival')

//Variables Crear Mensaje Final

/* Estas variables se eliminan porque ya existen en la parte superior
const sectionmensajes = document.getElementById('resultado')
const sectionreset = document.getElementById('reiniciar')
const botonMascota = document.getElementById('boton-pokemon')
const botonagua = document.getElementById('boton-agua')
const botonfuego = document.getElementById('boton-fuego')
const botonplanta = document.getElementById('boton-planta')
const botontierra = document.getElementById('boton-tierra')*/

let ataquejugador
let ataquerival
let vidasjugador = 6
let vidasrival = 6

function iniciarjuego(){
    
    sectionseleccionarataque.style.display = 'none'
    sectionreset.style.display = 'none'

    botonMascota.addEventListener('click', seleccionarmascota)
    botonagua.addEventListener('click',ataqueagua)
    botonfuego.addEventListener('click',ataquefuego)
    botonplanta.addEventListener('click',ataqueplanta)
    botontierra.addEventListener('click',ataquetierra)

    botonreiniciar.addEventListener('click', resetjuego)
}

function seleccionarmascota(){
    
    sectionseleccionarpokemon.style.display = 'none'
    sectionseleccionarataque.style.display = 'flex'

    if(pokemon1.checked) {
        spanpokemon.innerHTML = 'Alain'
    } else if (pokemon2.checked){
        spanpokemon.innerHTML = 'Roy'
    } else if (pokemon3.checked){
        spanpokemon.innerHTML = 'Cynthia'
    } else if (pokemon4.checked){
        spanpokemon.innerHTML = 'Lionel'
    } else if (pokemon5.checked){
        spanpokemon.innerHTML = 'Dianta'
    } else if (pokemon6.checked){
        spanpokemon.innerHTML = 'Steven'
    } else {
        alert('Selecciona un Pokémon valido')
    }

    seleccionarmascotarival()
}

function seleccionarmascotarival(){
    let pokemonaleatorio = aleatorio(1,6)
    

    if (pokemonaleatorio == 1){
        spanpokemonrival.innerHTML = 'Alain'
    } else if(pokemonaleatorio == 2){
        spanpokemonrival.innerHTML = 'Roy'
    } else if(pokemonaleatorio == 3){
        spanpokemonrival.innerHTML = 'Cynthia'
    } else if(pokemonaleatorio == 4){
        spanpokemonrival.innerHTML = 'Lionel'
    } else if(pokemonaleatorio == 5){
        spanpokemonrival.innerHTML = 'Dianta'
    } else if(pokemonaleatorio == 6){
        spanpokemonrival.innerHTML = 'Steven'
    }
    }

function ataqueagua(){
        ataquejugador = 'Agua'
        ataquealeatoriorival()
    }

function ataquefuego(){
    ataquejugador = 'Fuego'
    ataquealeatoriorival()
}

function ataqueplanta(){
    ataquejugador = 'Planta'
    ataquealeatoriorival()
}

function ataquetierra(){
    ataquejugador = 'Tierra'
    ataquealeatoriorival()
}

function ataquealeatoriorival(){
    let ataquealeatorio = aleatorio(1,4)
    
    if (ataquealeatorio == 1){
        ataquerival = 'Agua'   
    } else if(ataquealeatorio == 2){
        ataquerival = 'Fuego'
    } else if(ataquealeatorio == 3){
        ataquerival = 'Planta'
    } else if(ataquealeatorio == 4){
        ataquerival = 'Tierra'
    }

    combate()

}

function combate(){
    

    if(ataquerival == ataquejugador){
        crearmensaje('Empate')
    } else if( ataquejugador == 'Agua' && (ataquerival == 'Fuego' || ataquerival == 'Tierra') 
            || ataquejugador == 'Fuego'&& ataquerival == 'Planta'
            || ataquejugador == 'Planta' && (ataquerival == 'Agua' || ataquerival == 'Tierra')
            || ataquejugador == 'Tierra' && ataquerival == 'Fuego')
    {
        crearmensaje('Ganaste')
        vidasrival--
        spanvidasrival.innerHTML = vidasrival
    }  else {
        crearmensaje('Perdiste')
        vidasjugador--
        spanvidajugador.innerHTML = vidasjugador
    }

    revisarvidas()
}

function revisarvidas(){
    if(vidasjugador == 0){
        crearmensajefinal('NO TE QUEDAN MÁS POKÉMON, HAS PERDIDO 😭')
    } else if(vidasrival == 0){
        crearmensajefinal('NO LE QUEDAN MÁS POKÉMON A TU RIVAL. FELICITACIONES! GANASTE 🥳')
    }
}

function crearmensaje(resultado){
    
    let nuevoataquejugador = document.createElement('p')
    let nuevoataquerival = document.createElement('p')

    sectionmensajes.innerHTML = resultado
    nuevoataquejugador.innerHTML = ataquejugador
    nuevoataquerival.innerHTML = ataquerival

    //anterior: let parrafo = document.createElement('p')
    //anterior: parrafo.innerHTML = 'Haz enviado un Pokémon tipo ' + ataquejugador + ', Tu rival envió un Pokémon tipo ' + ataquerival + ' - ' + resultado

    ataquesdeljugador.appendChild(nuevoataquejugador)
    ataquesdelrival.appendChild(nuevoataquerival)
}

function crearmensajefinal(resultadofinal){

    sectionmensajes.innerHTML = resultadofinal
    sectionreset.style.display = 'block'
    botonMascota.disabled = true
    botonagua.disabled = true
    botonfuego.disabled = true
    botonplanta.disabled = true
    botontierra.disabled = true
}

function resetjuego(){
    location.reload()
}
function aleatorio(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}

window.addEventListener('load', iniciarjuego)