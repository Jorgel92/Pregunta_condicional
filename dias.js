var dia=prompt("Ingresa día de la semana")

dia= dia.toLocaleLowerCase();

switch(dia){
    case "lunes":
        alert("Buen inicio de semana");
        break;
    case "viernes":
        alert("Buen fin de semana");
        break;
    case "sabado":
        alert("Disfruta tu día");
        break;
    case "domingo":
        alert("Preparate para la semana");
        break;
    default:
        alert("Día invalido");
}

