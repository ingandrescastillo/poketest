let ataquejugador
let ataquerival
let vidasjugador = 6
let vidasrival = 6

function iniciarjuego(){
    let sectionseleccionarataque = document.getElementById('seleccionar-ataque')
    sectionseleccionarataque.style.display = 'none'
    let sectionreset = document.getElementById('reiniciar')
    sectionreset.style.display = 'none'

    let botonMascota = document.getElementById('boton-pokemon')
        botonMascota.addEventListener('click', seleccionarmascota)
    let botonagua = document.getElementById('boton-agua')
        botonagua.addEventListener('click',ataqueagua)
    let botonfuego = document.getElementById('boton-fuego')
        botonfuego.addEventListener('click',ataquefuego)
    let botonplanta = document.getElementById('boton-planta')
        botonplanta.addEventListener('click',ataqueplanta)
    let botontierra = document.getElementById('boton-tierra')
        botontierra.addEventListener('click',ataquetierra)

    let botonreiniciar = document.getElementById('boton-reiniciar')
        botonreiniciar.addEventListener('click', resetjuego)
}

function seleccionarmascota(){
    let sectionseleccionarpokemon = document.getElementById('seleccionar-pokemon')
    sectionseleccionarpokemon.style.display = 'none'

    let sectionseleccionarataque = document.getElementById('seleccionar-ataque')
    sectionseleccionarataque.style.display = 'flex'


    let pokemon1 = document.getElementById('Alain')
    let pokemon2 = document.getElementById('Roy')
    let pokemon3 = document.getElementById('Cynthia')
    let pokemon4 = document.getElementById('Lionel')
    let pokemon5 = document.getElementById('Dianta')
    let pokemon6 = document.getElementById('Steven')
    let spanpokemon= document.getElementById('mascota-jugador')
    


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
    let spanpokemonrival = document.getElementById('mascota-rival')

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
    let spanvidajugador = document.getElementById('vidas-jugador')
    let spanvidasrival = document.getElementById('vidas-rival')

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
    let sectionmensajes = document.getElementById('resultado')
    let ataquesdeljugador = document.getElementById('ataques-jugador')
    let ataquesdelrival = document.getElementById('ataques-rival')
    
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
    let sectionmensajes = document.getElementById('resultado')

    sectionmensajes.innerHTML = resultadofinal

    let sectionreset = document.getElementById('reiniciar')
    sectionreset.style.display = 'block'

    let botonMascota = document.getElementById('boton-pokemon')
        botonMascota.disabled = true
    let botonagua = document.getElementById('boton-agua')
        botonagua.disabled = true
    let botonfuego = document.getElementById('boton-fuego')
        botonfuego.disabled = true
    let botonplanta = document.getElementById('boton-planta')
        botonplanta.disabled = true
    let botontierra = document.getElementById('boton-tierra')
        botontierra.disabled = true
}

function resetjuego(){
    location.reload()
}
function aleatorio(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}

window.addEventListener('load', iniciarjuego)