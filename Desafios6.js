/**
 * 1 - Crear una funcion que muestre Hola mundo en la consola
 */

alert('Funcion Hola mundo');

function HolaMundo() {
    console.log("Hola mundo");
}

HolaMundo();

/**
 * 2 - Crear una funcion que reciba un nombre como parametro y muestre Hola nombre
 * en la consola
 */

alert('Funcion con nombre');
let nombrePromt = prompt("Ingrese su nombre: ");

function HolaNombre(nombre) {
    console.log(`Hola ${nombre}!`);
}

HolaNombre(nombrePromt)
