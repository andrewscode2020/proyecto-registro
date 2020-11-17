let nombreCompleto = document.querySelector('#nombreCompleto').value
let correoElect = document.querySelector('#correoElect').value
let contrasena = document.querySelector('#creaContrasena').value
const botonRegistrate = document.querySelector('#botonRegistrate')

botonRegistrate.onclick = function() {
    console.log(nombreCompleto)
    console.log(correoElect)
    console.log(contrasena)
}
