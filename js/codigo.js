//OBTENER UN NUMERO ALEATORIO PARA PC
function aleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1 ) + min)
}

//ASIGNAR A JUGADA UN NUMERO
function eleccion (jugada) {
        let resultado = ""
        if (jugada == 1){ 
        resultado = "piedra ๐ฅ"
    }
    else if (jugada == 2){ 
        resultado = "papel ๐งป"
    }
    else if (jugada == 3){ 
        resultado = "tijera โ"
    }
    else { 
        resultado = (" MAL ELEGIDO ๐ข")
    }
    return resultado
}
// 1 es para piedra, 2 para papel, 3 para tijera
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

while (triunfos < 3 && perdidas < 3){
    pc = aleatorio(1,3)
    jugador = prompt("Elige 1 para piedra, 2 para papel, 3 para tijera")

    alert("PC elige:  " + eleccion(pc))
    alert("Tu eliges: " + eleccion(jugador))

//COMBATE
    if (jugador == pc){ 
        alert("EMPATE ๐")
    } else if ( jugador == 1 && pc == 3 ) {
        alert ( " GANASTE ๐ " )
        triunfos++
    } else if ( jugador == 2 && pc == 1 ) {
        alert ( " GANASTE ๐" )
        triunfos++
    } else if ( jugador == 3 && pc == 2 ) {
        alert ( " GANASTE ๐" )
        triunfos++
    } else {
        alert ( " PERDISTE ๐ข" )
        perdidas++
    }
}

alert("Ganaste " + triunfos + " veces. " + " Perdiste " + perdidas + " veces.")        
