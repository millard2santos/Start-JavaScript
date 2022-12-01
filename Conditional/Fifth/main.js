let lado1 = Number(prompt('Introduce el lado 1'));
let lado2 = Number(prompt('Introduce el lado 2'));
let lado3 = Number(prompt('Introduce el lado 3'));


if (lado1 === lado2 && lado2 === lado3){
    console.log("El triángulo es es equilátero")
}
else if ( lado1 === lado2 || lado1 === lado3 || lado2 == lado3){
    console.log("El triángulo es isósceles" )
}
else{
    console.log("El triángulo es escaleno")
}
