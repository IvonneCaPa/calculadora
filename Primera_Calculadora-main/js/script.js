/* es es un
comentario multilínea */

// Comentario de una línea

// alert("Hola !!")

console.log("Hola !!");

let variable_1 = "Hola !!"; // esta es la recomendada
console.log(variable_1);
var variable_2 = 25;

variable_1 = "soy un string"; // esto es un texto = STRING
console.log(typeof variable_1);
variable_1 = "soy otro string";

// template string
variable_1 = `otro string más`;

let nombre = "Ferran";
let frase = `Te llamas ${nombre}, bienvenido`;
console.log(frase);

variable_1 = 1678.0;
console.log(typeof variable_1);

variable_1 = true;
console.log(typeof variable_1);

let llueve = false;
// llueve = true;

// si ...
if (llueve) {
  console.log("Ei, toma un paraguas!");
} else {
  // else = sino
  console.log("Puedes ir a pasear");
}

let dinero = 1.5

if (dinero >= 5) {
    console.log("Comeré pizza")
} else if (dinero >= 3) {
    console.log("Comeré un bocata")
} else if (dinero >= 1.5) {
    console.log("Tomaré un café") 
} else {
    console.log("Hoy toca ayuno")
}


dinero = 10
if (dinero >= 5) {
    let eleccion = "fémur"
    if (eleccion == 'pizza') {
        console.log("Pues a la pizzeria")
    } else {
        console.log("Bocata + café")
    }
}

// sintaxis básica de una función
function sumar_v1() {
    let suma = 1 + 2
    console.log(suma)
}

function sumar_v2() {
    let suma = 1 + 5
    return suma
}

function sumar_v3() {
    return 1 + 8
}

function sumar_v4(num1, num2) {
    return num1 + num2
}

console.log(sumar_v3())
console.log(sumar_v4(2, 6))
console.log(sumar_v4(60, 3456))

function dividir (num1, num2) {
    return num1 / num2
}

console.log(dividir(10, 0))

 // 5€
 // 3
// 1.5
 // 0
