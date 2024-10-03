var numero=prompt("Escoge un numero entre el 1 y el 1000, podrias ser el siguiente ganador!")
var ganador=(1000)

if (ganador == numero ){
    alert("Ganaste un premio!")
}
else if (numero!=1000 && numero>0 && numero<1000){
    alert(numero+ " Lo sentimos, sigue participando")
    
}
else if (numero<1 | numero>1000 ) {alert("Favor de escoger numero entre 1 y 1000")}

