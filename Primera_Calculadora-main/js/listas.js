/* vamos aprender sobre las listas que son diferentes a las variables, las listas
se llaman "arrays"
let color1 = "rojo"
let color2 = "azul"
.
.
.
let colorn = "negro"
para evitar este listado de variables hacemos el array, que puede ic¡ncluir lo
que quiera

let array_colores = ["amarillo", "violeta", color1, color2]

En esta lista el orden del listado es:
0 : amarillo
1: violeta
2: color1
3: color2

el codigo para que se lea una array es con for de la siguiente manera:
for (let i = 0; i < array_colores.length; i++){
    console.log(array_colores[i]);
}

Como queremos comparar la cadena haber si esta el naranja que es mi color favorito
hacemos un if, cuando conseguimos lo que queremos para finalizar el bucle usamos
el break
*/

let color1 = "rojo"
let color2 = "azul"

let array_colores = ["amarillo", "violeta", "naranja", color1, color2]

//muestra los elementos del array en cadena, por eso estan en []
console.log(array_colores);

let color_favorito = "naranja"

for (let i = 0; i < array_colores.length; i++) {
    //vemos los elementos del array uno por uno, ya no tienen []
    console.log(array_colores[i]);
    if(color_favorito == array_colores[i]) {
        console.log(`El color esta en la lista`);
        break
    } 
}