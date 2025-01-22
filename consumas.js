let vehiculo = prompt("¿Tipo de vehículo?").toLowerCase();
let kmRecorridos = parseFloat(prompt("¿Cuántos km se recorrieron?"));
let litros = parseFloat(prompt("¿Cuántos litros se han consumido?"));

let precioPorKm;
let extraLitros = 0;
let total = 0;

if (vehiculo === "coche") {
  precioPorKm = 0.20;
} else if (vehiculo === "moto") {
  precioPorKm = 0.10;
} else if (vehiculo === "autobus") {
  precioPorKm = 0.5;
} else {
  console.log("Vehículo no válido");
  
}

const costoBase = precioPorKm * kmRecorridos;
if (litros > 0 && litros <= 100) {
  extraLitros = 5;
} else if (litros > 100) {
  extraLitros = 10;
}

total = costoBase + extraLitros;

console.log("El total a pagar es:", total);