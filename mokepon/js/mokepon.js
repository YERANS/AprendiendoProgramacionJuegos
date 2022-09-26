function iniciarjuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador(){

    if(hipodoge.checked){

        alert("SELECCIONASTE A HIPODOGE BUENA SUERTE")
    
    }else if(capipepo.checked){
    
        alert("SELECCIONASTE A CAPIPEPO BUENA SUERTE")
    
    }else if(ratigueya.checked){
    
        alert("SELECCIONASTE A RATIGUEYA BUENA SUERTE")
    }else{
    
        alert("SELECCIONA UN CAMPEON")
    }
}
 window.addEventListener("load", iniciarjuego)


