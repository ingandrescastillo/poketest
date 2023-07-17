    //Variables de iniciar juego
    const sectionseleccionarataque = document.getElementById('seleccionar-ataque')
    const sectionreset = document.getElementById('reiniciar')
    const botonMascota = document.getElementById('boton-pokemon')

    const botonreiniciar = document.getElementById('boton-reiniciar')

    //Variables Seleccionar Mascota

    const sectionseleccionarpokemon = document.getElementById('seleccionar-pokemon')
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
    const contenedortarjetas = document.getElementById('contenedortarjetas')
    const contenedorAtaques = document.getElementById('contenedorAtaques')

    //Variables Crear Mensaje Final

    /* Estas variables se eliminan porque ya existen en la parte superior
    const sectionmensajes = document.getElementById('resultado')
    const sectionreset = document.getElementById('reiniciar')
    const botonMascota = document.getElementById('boton-pokemon')
    const botonagua = document.getElementById('boton-agua')
    const botonfuego = document.getElementById('boton-fuego')
    const botonplanta = document.getElementById('boton-planta')
    const botontierra = document.getElementById('boton-tierra')*/

    let personajes = [] //adentro de corchete cuadrado entra los objetos que ya contruimos de la clase personajes
    let ataquejugador = []
    let ataquerival = []
    let opciondepersonaje
    let inputalain
    let inputroy
    let inputcynthia
    let inputlionel
    let inputdianta
    let inputsteven
    let pokemonjugador
    let ataquesPokemon
    let ataquesPokemonEnemigo
    let botonagua
    let botonfuego
    let botonplanta
    let botontierra
    let botones = []
    let indexataquejugador
    let indexataquerival
    let victoriasjugador = 0
    let victoriasrival = 0
    let vidasjugador = 6
    let vidasrival = 6

    class Personajes{
        constructor(nombre, foto, vida){
            this.nombre = nombre
            this.foto = foto
            this.vida = vida
            this.ataques =  []
        }
    }

    let Alain = new Personajes('Alain','./Personajes/Alain.png',5)
    let Roy = new Personajes('Roy','./Personajes/Roy.png',5)
    let Cynthia = new Personajes('Cynthia','./Personajes/Cynthia.png',5)
    let Lionel = new Personajes('Lionel','./Personajes/Lionel.png',5)
    let Dianta = new Personajes('Dianta','./Personajes/Dianta.png',5)
    let Steven = new Personajes('Steven','./Personajes/Steven.png',5)

    Alain.ataques.push(
        {nombre: '💧', id: 'boton-agua'},
        {nombre: '🔥', id: 'boton-fuego'},
        {nombre: '💧', id: 'boton-agua'},
        {nombre: '🌎', id: 'boton-tierra'},
    )

    Roy.ataques.push(
        {nombre: '🌿', id: 'boton-planta'},
        {nombre: '🌿', id: 'boton-planta'},
        {nombre: '💧', id: 'boton-agua'},
        {nombre: '🌎', id: 'boton-tierra'},
    )

    Cynthia.ataques.push(
        {nombre: '💧', id: 'boton-agua'},
        {nombre: '🌎', id: 'boton-tierra'},
        {nombre: '💧', id: 'boton-agua'},
        {nombre: '🌎', id: 'boton-tierra'},
    )

    Lionel.ataques.push(
        {nombre: '💧', id: 'boton-agua'},
        {nombre: '🌿', id: 'boton-planta'},
        {nombre: '🔥', id: 'boton-fuego'},
        {nombre: '🌎', id: 'boton-tierra'},
    )

    Dianta.ataques.push(
        {nombre: '💧', id: 'boton-agua'},
        {nombre: '🔥', id: 'boton-fuego'},
        {nombre: '🔥', id: 'boton-fuego'},
        {nombre: '🌎', id: 'boton-tierra'},
    )

    Steven.ataques.push(
        {nombre: '💧', id: 'boton-agua'},
        {nombre: '🌿', id: 'boton-planta'},
        {nombre: '💧', id: 'boton-agua'},
        {nombre: '🌎', id: 'boton-tierra'},
    )

    personajes.push(Alain,Roy,Cynthia,Lionel,Dianta,Steven)

    // console.log se usa para mapear errores, entre paréntesis se pone lo que queremos ver
    console.log(personajes)

    function iniciarjuego(){
        
        sectionseleccionarataque.style.display = 'none'
        sectionreset.style.display = 'none'

        personajes.forEach((personaje) =>{
            opciondepersonaje = `<input type="radio" name = "mascota" id=${personaje.nombre}>
            <label class = 'tarjeta-personaje' for = ${personaje.nombre}>
                <p>${personaje.nombre}</p>
                <img src=${personaje.foto} alt=${personaje.nombre}>
            </label>`
        //el + permite agregar todos los personajes que yo tenga
        contenedortarjetas.innerHTML += opciondepersonaje

            inputalain = document.getElementById('Alain')
            inputroy = document.getElementById('Roy')
            inputcynthia = document.getElementById('Cynthia')
            inputlionel = document.getElementById('Lionel')
            inputdianta = document.getElementById('Dianta')
            inputsteven = document.getElementById('Steven')
        })

        botonMascota.addEventListener('click', seleccionarmascota)
        

        botonreiniciar.addEventListener('click', resetjuego)
    }

    function seleccionarmascota(){
        
        sectionseleccionarpokemon.style.display = 'none'
        sectionseleccionarataque.style.display = 'flex'

        if(inputalain.checked) {
            spanpokemon.innerHTML = inputalain.id
            pokemonjugador = inputalain.id
        } else if (inputroy.checked){
            spanpokemon.innerHTML = inputroy.id
            pokemonjugador = inputroy.id
        } else if (inputcynthia.checked){
            spanpokemon.innerHTML = inputcynthia.id
            pokemonjugador = inputcynthia.id
        } else if (inputlionel.checked){
            spanpokemon.innerHTML = inputlionel.id
            pokemonjugador = inputlionel.id
        } else if (inputdianta.checked){
            spanpokemon.innerHTML = inputdianta.id
            pokemonjugador = inputdianta.id
        } else if (inputsteven.checked){
            spanpokemon.innerHTML = inputsteven.id
            pokemonjugador = inputsteven.id
        } else {
            alert('Selecciona un Pokémon valido')
        }

        extraerAtaques(pokemonjugador)
        seleccionarmascotarival()
    }

    function extraerAtaques(pokemonjugador){
        let ataques
        for (let i = 0; i < personajes.length; i++){
            if(pokemonjugador === personajes[i].nombre){
                ataques = personajes[i].ataques
            }
        }    
        
        mostrarAtaques(ataques)
    }

    function mostrarAtaques(ataques) {
        ataques.forEach((ataque) => {
            ataquesPokemon = `
            <button id=${ataque.id} class="boton-ataque BAtaque">${ataque.nombre}</button>`

            contenedorAtaques.innerHTML += ataquesPokemon
        })

        botonagua = document.getElementById('boton-agua')
        botonfuego = document.getElementById('boton-fuego')
        botonplanta = document.getElementById('boton-planta')
        botontierra = document.getElementById('boton-tierra')
        botones = document.querySelectorAll('.BAtaque')


    }

    function secuenciaAtaque(){
        botones.forEach((boton) => {
            boton.addEventListener('click',(e) => {
                if(e.target.textContent === '🔥'){
                    ataquejugador.push('Fuego')
                    console.log(ataquejugador)
                    boton.disabled = true
                } else if (e.target.textContent === '💧') {
                    ataquejugador.push('Agua')
                    console.log(ataquejugador)
                    boton.disabled = true
                } else if (e.target.textContent === '🌿') {
                    ataquejugador.push('Planta')
                    console.log(ataquejugador)
                    boton.disabled = true
                } else {
                    ataquejugador.push('Tierra')
                    console.log(ataquejugador)
                    boton.disabled = true
                }
                ataquealeatoriorival()
            }) 
        })
    }

    function seleccionarmascotarival(){
        let pokemonaleatorio = aleatorio(0,personajes.length -1)
        
        spanpokemonrival.innerHTML = personajes[pokemonaleatorio].nombre
        ataquesPokemonEnemigo = personajes[pokemonaleatorio].ataques
        secuenciaAtaque()

    }


    function ataquealeatoriorival(){
        let ataquealeatorio = aleatorio(0,ataquesPokemonEnemigo.length -1)
        

        //PILAS ARREGLAR ESTE CASO PORQUE NO ES TAN ALEATORIO COMO SE ESPERA
        if (ataquealeatorio == 0){
            ataquerival.push('Agua')   
        } else if(ataquealeatorio == 1){
            ataquerival.push('Fuego')
        } else if(ataquealeatorio == 2){
            ataquerival.push('Planta')
        } else if(ataquealeatorio == 3){
            ataquerival.push('Tierra')
        }
        console.log(ataquerival)
        iniciarcombate()
        //combate()

    }
//ESTA FUNCION REVISAR, el 4 es la cantidad de ataques

    function iniciarcombate(){
        if(ataquejugador.length === 4){
                combate()

        }
    }

    function indexambosoponentes(jugador,rival){
            indexataquejugador = ataquejugador[jugador]
            indexataquerival = ataquerival[rival]
    }

    function combate(){

        for (let index = 0; index < ataquejugador.length; index++) {
            if(ataquejugador[index] === ataquerival[index]){
                indexambosoponentes(index,index)
                crearmensaje('Empate')

            } else if( ataquejugador[index] === 'Agua' && (ataquerival[index]=== 'Fuego' || ataquerival[index] === 'Tierra') 
                    || ataquejugador[index] === 'Fuego'&& ataquerival[index] === 'Planta'
                    || ataquejugador[index] === 'Planta' && (ataquerival[index] === 'Agua' || ataquerival[index] === 'Tierra')
                    || ataquejugador[index] === 'Tierra' && ataquerival[index] === 'Fuego'){
                indexambosoponentes(index,index)
                crearmensaje('Ganaste')
                victoriasjugador++
                spanvidajugador.innerHTML = victoriasjugador    
        }  else {
            indexambosoponentes(index,index)
            crearmensaje('Perdiste')
            victoriasrival++
            spanvidasrival.innerHTML = victoriasrival
        }

        revisarvidas()
    }
}  

    function revisarvidas(){
        if(victoriasjugador == victoriasrival){
            crearmensajefinal('WOWWWW ES UN EMPATE 🌚')
        } else if(victoriasjugador > victoriasrival){
            crearmensajefinal('NO LE QUEDAN MÁS POKÉMON A TU RIVAL. FELICITACIONES! GANASTE 🥳')
        } else {
            crearmensajefinal('NO TE QUEDAN MÁS POKÉMON, HAS PERDIDO 😭')
        }
    }

    function crearmensaje(resultado){
        
        let nuevoataquejugador = document.createElement('p')
        let nuevoataquerival = document.createElement('p')

        sectionmensajes.innerHTML = resultado
        nuevoataquejugador.innerHTML = indexataquejugador
        nuevoataquerival.innerHTML = indexataquerival

        //anterior: let parrafo = document.createElement('p')
        //anterior: parrafo.innerHTML = 'Haz enviado un Pokémon tipo ' + ataquejugador + ', Tu rival envió un Pokémon tipo ' + ataquerival + ' - ' + resultado

        ataquesdeljugador.appendChild(nuevoataquejugador)
        ataquesdelrival.appendChild(nuevoataquerival)
    }

    function crearmensajefinal(resultadofinal){

        sectionmensajes.innerHTML = resultadofinal
        sectionreset.style.display = 'block'
    }

    function resetjuego(){
        location.reload()
    }
    function aleatorio(min, max){
        return Math.floor(Math.random()*(max - min + 1) + min)
    }

    window.addEventListener('load', iniciarjuego)