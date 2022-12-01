let number1 = Number(prompt("Introduce number 1"));
let number2 = Number(prompt("Introduce number 2"));
let operation = prompt("'add' para sumar, 'subtract' para restar, 'multiply' para multiplicar y 'divide' para dividir");

switch (operation) {
    case 'add':
        console.log(`La suma de ${number1} y ${number2} es ${number1 + number2}`)
        break;
    case 'subtract':
        console.log(`La resta de ${number1} y ${number2} es ${number1 - number2}`)
        break;
    case 'multiply':
        console.log(`La multiplicación de ${number1} y ${number2} es ${number1 * number2}`)
        break;
    case 'divide':
        console.log(`La division de ${number1} y ${number2} es ${number1 / number2}`)
        break;
    default:
        console.log('No es una palabra valida')

}