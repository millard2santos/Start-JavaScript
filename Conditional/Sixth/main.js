let min = Number(prompt('Introduce un min'));
let max = Number(prompt('Introduce un max'));
let number3 = Number(prompt('Introduce un number 3'));

if (number3 > min && number3 < max){
    console.log(`El número ${number3} esta dentro del rango [${min} ~ ${max}]`)
}
else{
    console.log(`El número ${number3} esta fuera del rango [${min} ~ ${max}]`)
}