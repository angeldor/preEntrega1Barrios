let usuario = angel_barrios
let password = hola123
let usuarioIngresado = prompt("Ingresa tu nombre de usuario")

if(usuarioIngresado === usuario){
    let passwordIngresada = prompt("Ingresa tu contraseña")

    if(passwordIngresada === password){
        console.log("Bienvenido ${usuario} ")
    }
} else {
    console.log("Usuario no encontrado, Intentelo de nuevo")
}