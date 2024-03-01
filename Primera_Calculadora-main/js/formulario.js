function misDatos() {
    let nombre = document.getElementById("nombre").value
    let edad = document.querySelector("#edad").value
    let tel = document.getElementById("tel").value
    let email = document.querySelector("#email").value

    let frase = `Me has dicho que te llamas ${nombre}, tienes ${edad} años. Tu teléfono es ${tel} y tu email es ${email}.`

    document.getElementById("frase").innerText = frase


}

