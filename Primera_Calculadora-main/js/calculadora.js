/**primero creamos la función y probamos si estan bien vinculados el htm con js, hacemos un alert y probamos
 * alert("ok")
 * creamos una variable en la funcion llamando a uno de los id
 * termina en .value por que queremos al valor
 * document llamamos al todo html
 * con get al contenido de ese id
 * y el value el valor
 * let num1 = document.getElementById("num1").value
 * Ahora mismo acepta cualquier valor que se le introduzca incluidos strings
 * asi que se hace un filtro para que el usuario sólo introduzca un int.
 * 1. en html creamos un parrafo con un id de error 
 * <p id="error1"></p> en css lo ponemos bonito, lo hacemos con los 2 numeros 
 * que se introducen.
 * #error1{    
    height: 1.5rem;
    color: red;
    font-size: 1 rem;
    text-align: right;
    siempre vamos probando todo con console.log()
    para verificar si es un numero lo que se introduce o no se usa la funcion
    isNaN()
    si lo que se pone dentro es numero es false si no true. 
    En el caso de que no introduzca un numero se interrumpe el programa
    y ponemos esto en un if para decirle que hacer
    dentro del if llamamos al htm, con el get al id que queremos y con innerText 
    le decimos lo que queremos que salga y con el return cerramos el programa
    if(isNaN(num1)){
        document.getElementById("error1").innerText ="no valido"
        return
    }
    es necesario limpiar las advertencias con:
    document.getElementById("error1").innerText = ""
    como por ahora estamos usando don peticiones al mismo sitio no esta bien visto
    function calcular(){
    //limpiar las advertencias
    document.getElementById("error1").innerText = ""
    let num1 = document.getElementById("num1").value
    console.log(num1);
    console.log(isNaN(num1));
    if(isNaN(num1)){
        document.getElementById("error1").innerText ="no valido"
        return
    }
    alert("ms")
}
la forma de evitar 2 veces el document.getElementById("error1")
lo que se hace es crear una variable en este caso error1 y quedaria así:
function calcular(){
    //limpiar las advertencias
    let error1 = document.getElementById("error1")
    error1.innerText = ""
    let num1 = document.getElementById("num1").value
    console.log(num1);
    console.log(isNaN(num1));
    if(isNaN(num1)){
        error1.innerText ="no valido"
        return
    }
    alert("ms")
}
y  lo hacemos para el error2, ademas de agregar el mismo codigo para num2
function calcular(){
    //limpiar las advertencias
    let error1 = document.getElementById("error1")
    let error2 = document.getElementById("error2")
    error1.innerText = ""
    error2.innerText = ""
    //obtener los numeros
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    if(isNaN(num1)){
        error1.innerText ="no valido"
        return
    }
    if(isNaN(num2)){
        error2.innerText ="no valido"
        return
    }
    alert("ms")
}
ahora si con el primer numero da error la aplicacion finaliza
así que no se ve el mensaje del segundo numero. Para esto se usa la
tecnica del semaforo, es cuando queremos controlar la direccion de los
semaforos
creamos una variable booleana 
let errores = false;
y para finalizar la funcion no usamos return en los primeros if y 
creamos un if con esta variable
function calcular(){
    //limpiar las advertencias
    let error1 = document.getElementById("error1")
    let error2 = document.getElementById("error2")
    let errores = false;
    error1.innerText = ""
    error2.innerText = ""
    //obtener los numeros
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    if(isNaN(num1)){
        error1.innerText ="no valido"
        errores = true;
    }
    if(isNaN(num2)){
        error2.innerText ="no valido"
        errores = true;
    }
    if(errores){
        return
    }
    alert("ms")

    ahora si no se pone ningun valor igual el programa continua, para que
    esto no pase usamos los operadores logicos, en este caso el o que es || y el 
    operador de asignacion == 
    otro error es que escriba un espacio, para esto usamos la funcion trim() que
    elimina los espacios que hayan al inicio y al final
    como lo que se introduce se convierte en string lo pasamos a int con un cast
    la funcion es parseFloat()
    function calcular(){
    //limpiar las advertencias
    let error1 = document.getElementById("error1")
    let error2 = document.getElementById("error2")
    let errores = false;
    error1.innerText = ""
    error2.innerText = ""

    //obtener los numeros
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    // le pedimos a num1 y num2 que quite los espacios de antes y despues
    num1 = num1.trim()
    num2 = num2.trim()
    // buscamos los posibles errores, si es texto o vacio
    if(isNaN(num1) || num1 == ""){
        error1.innerText ="no valido"
        errores = true;
    }
    if(isNaN(num2) || num2 == ""){
        error2.innerText ="no valido"
        errores = true;
    }
    if(errores == true){
        return
    }
    //pasamos el valor de num1 y num2 en INT
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
}

ahora creamos una variable que captura el operador para escoger que
operacion queremos
 let opciones = document.getElementsByName("operador") y recorremos opciones para
 saber cual es true
 function calcular(){
    //limpiar las advertencias
    let error1 = document.getElementById("error1")
    let error2 = document.getElementById("error2")
    let errores = false;
    error1.innerText = ""
    error2.innerText = ""

    //obtener los numeros
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value

    // le pedimos a num1 y num2 que quite los espacios de antes y despues
    num1 = num1.trim()
    num2 = num2.trim()

    // buscamos los posibles errores, si es texto o vacio
    if(isNaN(num1) || num1 == ""){
        error1.innerText ="no valido"
        errores = true;
    }
    if(isNaN(num2) || num2 == ""){
        error2.innerText ="no valido"
        errores = true;
    }
    if(errores == true){
        return
    }

    //pasamos el valor de num1 y num2 en INT
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)

    let opciones = document.getElementsByName("operador")
    console.log(opciones);

    //primero recorremos las opciones
    let operacion = ""
    for(let i = 0; i < opciones.length; i++){
        if (opciones[i].checked == true){
            operacion = opciones[i].id
            break
        }
    }

    console.log(operacion);

}

queda hacer las operaciones
    let resultado = document.getElementById("resultado").innerText // se deberia poner al inicio
    resultado = 0  //deberia estar al inicio
    if(operacion == "sumar"){
        resultado = num1 + num2
    } else if (operacion == "restar"){
        resultado = num1 - num2
    }

    Como el reset sólo funciona con los input, hay que modificarlo para que borre el parrafo
    en html: <button type="reset" onclick="reset">Borrar</button>

    y en js



 */


function calcular(){
    //limpiar las advertencias
    let error1 = document.getElementById("error1")
    let error2 = document.getElementById("error2")
    let errores = false;
    error1.innerText = ""
    error2.innerText = ""

    //obtener los numeros
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value

    // le pedimos a num1 y num2 que quite los espacios de antes y despues
    num1 = num1.trim()
    num2 = num2.trim()

    // buscamos los posibles errores, si es texto o vacio
    if(isNaN(num1) || num1 == ""){
        error1.innerText ="no valido"
        errores = true;
    }
    if(isNaN(num2) || num2 == ""){
        error2.innerText ="no valido"
        errores = true;
    }
    if(errores == true){
        return
    }

    //pasamos el valor de num1 y num2 en INT
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)

    let opciones = document.getElementsByName("operador")
    console.log(opciones);

    //primero recorremos las opciones
    let operacion = ""
    for(let i = 0; i < opciones.length; i++){
        if (opciones[i].checked == true){
            operacion = opciones[i].id
            break
        }
    }
    console.log(operacion);
    //ahora hacemos las operaciones
    let resultado = document.getElementById("resultado").innerText // se deberia poner al inicio
    resultado = 0  //deberia estar al inicio
    if(operacion == "sumar"){
        resultado = num1 + num2
    } else if (operacion == "restar"){
        resultado = num1 - num2
    }
}

function reset(){
    document.getElementById("resultado".innerText) = 0
    
}



