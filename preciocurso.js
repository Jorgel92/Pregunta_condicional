let curso = prompt("¿Qué curso es de su interes: Course, Master, Carrera?")

curso=curso.toLocaleLowerCase();


switch (curso){
    case "course":
        let descuento1 = prompt("¿Cuenta con un descuento valido: Facebook, Google, Jesua?")
        descuento1=descuento1.toLocaleLowerCase();
        let duracion1=2;
           if (descuento1 == "facebook"){ //descuento facebook
                porcentaje = 4999*.80;
                let redondeado = porcentaje.toFixed(2);
                    alert("Su pago mensual seria de "+redondeado);
                let total = redondeado*duracion1;
                    alert("La duración del curso es de 2 meses, el total del curso: "+total);
            }
            else if (descuento1 == "google"){ //descuento google
                porcentaje = 4999*.75;
                let redondeado = porcentaje.toFixed(2);
                    alert("Su pago mensual seria de "+redondeado);
                let total = redondeado*duracion1;
                    alert("La duración del curso es de 2 meses, el total del curso: "+total);
            }
            else if (descuento1 == "jesua"){ //descuento jesua
                porcentaje = 4999*.50;
                let redondeado = porcentaje.toFixed(2);
                    alert("Su pago mensual seria de "+redondeado);
                let total = redondeado*duracion1;
                    alert("La duración del curso es de 2 meses, el total del curso: "+total); //total por el curso
            }
            else {
                alert("Su pago mensual es de $4999 MXN");
                total=4999*duracion1;
                alert("La duración del curso es de 2 meses, el total del curso: "+total);
            }
                    
            break;
    case "carrera":
        let descuento2= prompt("¿Cuenta con un descuento valido: Facebook, Google, Jesua?");
            descuento2=descuento2.toLocaleLowerCase();
        let duracion2=6;

        if (descuento2 == "facebook"){
            porcentaje = 3999*.80;
            let redondeado=porcentaje.toFixed(2);
                alert("Su pago mensual seria de "+redondeado);
            let total = redondeado*duracion2;
                total=total.toFixed(2);
                alert("La duración del curso es de 6 meses, el total del curso: ")+total;
        }
        else if (descuento2 == "google"){
            porcentaje = 3999*.75;
            let redondeado=porcentaje.toFixed(2);
                alert("Su pago mensual seria de "+redondeado);
            let total = redondeado*duracion2;
                total=total.toFixed(2);
                alert("La duración del curso es de 6 meses, el total del curso: "+total);
        }
        else if (descuento2 == "jesua"){
            porcentaje = 3999*.50;
            let redondeado=porcentaje.toFixed(2);
                alert("Su pago mensual seria de "+redondeado);
            let total = redondeado*duracion2;
                total=total.toFixed(2);
                alert("La duración del curso es de 6 meses, el total del curso: "+total);
        }
        else {
            alert("Su pago mensual es de $3999 MXN");
            total=3999*duracion2;
            alert("La duración del curso es de 6 meses, el total del curso: "+total);
        }

    break;
    case "master":
        let descuento3 = prompt("¿Cuenta con un descuento valido: Facebook, Google, Jesua?");
            descuento3=descuento3.toLocaleLowerCase();
        let duracion3=12;

        if (descuento3 == "facebook"){
            porcentaje = 2999*.80;
            let redondeado=porcentaje.toFixed(2);
                alert("Su pago mensual seria de "+redondeado);
            let total = redondeado*duracion3;
                total=total.toFixed(2);
                alert("La duración del curso es de 6 meses, el total del curso: "+total);
        }
        else if (descuento3 == "google"){
            porcentaje = 2999*.75;
            let redondeado=porcentaje.toFixed(2);
                alert("Su pago mensual seria de "+redondeado);
            let total = redondeado*duracion3;
                total=total.toFixed(2);
                alert("La duración del curso es de 6 meses, el total del curso: "+total);
        }
        else if (descuento3 == "jesua"){
            porcentaje = 2999*.50;
            let redondeado=porcentaje.toFixed(2);
                alert("Su pago mensual seria de "+redondeado);
            let total = redondeado*duracion3;
                total=total.toFixed(2);
                alert("La duración del curso es de 12 meses, el total del curso: "+total);
        }
        else {
            alert("Su pago mensual es de $2999 MXN");
            total=2999*duracion3;
            alert("La duración del curso es de 12 meses, el total del curso: "+total);
        }

    break;

    default:
        alert("No es un curso valido");
    }
