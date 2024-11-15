var calif = parseInt(prompt("¿Qué calificación obtuviste (1 al 10)?"))

    if (calif >=1 && calif <=10){
        
        switch(calif){
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                alert("Calificación reprobatoria");
            break;
            case 6:
            case 7:
            case 8:
               alert("Regular");
            break;
            case 9:
                alert("Bien");
            break;
            case 10:
                alert("Excelente");
            break;
                    }
}
else {alert("Calificación no valida")}
