let topping = prompt("¿Qué topping desea para su helado?")

topping= topping.toLocaleLowerCase();

switch (topping){
    case "sin topping":
        alert("El helado sin topping cuesta $50");
        break;
    case "oreo":
        alert("El topping de oreo cuesta $10");
        break;
    case "kitkat":
        alert("El topping kitkat cuesata $15");
        break;
    case "brownie":
        alert("El topping de brownie cuesta $20");
        break;

    default:
        alert("No contamos con ese topping, el costo sin topping es de $50");
}