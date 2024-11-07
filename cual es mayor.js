var num1=prompt("Primer numero")
var num2=prompt("Segundo numero")
var num3=prompt("Tercer numero")


    
    let mayor = num1;
    
    if (num2 > mayor) {
      mayor = num2;
    }
    if (num3 > mayor) {
      mayor = num3;
    }
  
      if (num1 === num2 && num2 === num3) {
      alert("Los tres números son iguales.");
    } else if (num1 === num2 || num1 === num3 || num2 === num3) {
      alert("Hay dos o más números iguales.");
    } else {
      alert("El número mayor es:", mayor);
    }
    
    alert("El número mayor es "+mayor)
  