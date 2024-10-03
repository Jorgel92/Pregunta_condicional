var numero = prompt("De un numero para saber si es divisible entre 2")
var resultado= (numero/2)

if (Number.isInteger(resultado) && resultado>0){
    alert(numero+" es divisible entre 2")
} 

else {alert (numero+" no es divisible entre 2")}
