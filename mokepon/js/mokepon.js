let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3


function iniciarjuego(){
    let sectionReiniciarJuego = document.getElementById('reiniciar')
    sectionReiniciarJuego.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)

}

function seleccionarMascotaJugador(){
    
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'

    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if(hipodoge.checked){

        spanMascotaJugador.innerHTML = "Hipodoge"
    
    }else if(capipepo.checked){
    
        spanMascotaJugador.innerHTML = "Capipepo"
    
    }else if(ratigueya.checked){
    
        spanMascotaJugador.innerHTML = "Ratigueya"
    }else{
    
        alert("SELECCIONA UNA MASCOTA")
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatoria==1){
        spanMascotaEnemigo.innerHTML = "Hipodoge"

    }else if (mascotaAleatoria==2) {
        spanMascotaEnemigo.innerHTML = "Capipepo"
    } else {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }

}

function ataqueFuego(){
    ataqueJugador = "FUEGO"

    AtaqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = "AGUA"

    AtaqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = "TIERRA"

    AtaqueAleatorioEnemigo()
}

function AtaqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio==1){
        ataqueEnemigo = "FUEGO"

    }else if (ataqueAleatorio==2) {
        ataqueEnemigo = "AGUA"
    } else {
        ataqueEnemigo = "TIERRA"

    }

    conbate()
    
}



function conbate(){

    

    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    
    
    //COMBATE

        if (ataqueJugador == ataqueEnemigo){ 
            crearMensaje ("EMPATE 😒")
        } else if ( ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA' ) {
            crearMensaje ( " GANASTE 🎉😎 " )
            vidasEnemigo--
            spanVidasEnemigo.innerHTML=vidasEnemigo
        } else if ( ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO' ) {
            crearMensaje ( " GANASTE 🎉😎" )
            vidasEnemigo--
            spanVidasEnemigo.innerHTML=vidasEnemigo
        } else if ( ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA' ) {
            crearMensaje ( " GANASTE 🎉😎" )
            vidasEnemigo--
            spanVidasEnemigo.innerHTML=vidasEnemigo
        } else {
            crearMensaje ( " PERDISTE 😢" )
            vidasJugador--
            spanVidasJugador.innerHTML=vidasJugador
            
        }

        ganadorOperdedor()
    }

    function ganadorOperdedor(){

        if (vidasEnemigo==0) {
            crearMensajeFinal("Felicidades has GANADO la batalla 🎉😎")            
        } else if(vidasJugador==0){
            crearMensajeFinal("Mejor suerte para la proxima has PERDIDO la batalla 😭😢")
        }

    }


    function crearMensaje(resultado){
        let sectionMensajes = document.getElementById('mensaje')
        
        let parrafo = document.createElement('p')
        parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ', la mascota del enemigo ataco con ' + ataqueEnemigo + ' entonces ' + resultado
        
        sectionMensajes.appendChild(parrafo)
    
        
    }

    function crearMensajeFinal(resultadoFinal){

        let sectionMensajes = document.getElementById('mensaje')
        
        let parrafo = document.createElement('p')
        parrafo.innerHTML = resultadoFinal
        
        sectionMensajes.appendChild(parrafo)
        
        let botonFuego = document.getElementById('boton-fuego')
        botonFuego.disabled = true
        let botonAgua = document.getElementById('boton-agua')
        botonAgua.disabled = true
        let botonTierra = document.getElementById('boton-tierra')
        botonTierra.disabled = true

        let sectionReiniciarJuego = document.getElementById('reiniciar')
        sectionReiniciarJuego.style.display = 'block'
        
    }

function reiniciarJuego(){
    location.reload()

}

function aleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1 ) + min)
}
 window.addEventListener("load", iniciarjuego)


 