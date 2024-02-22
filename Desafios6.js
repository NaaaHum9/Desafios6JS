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
let nombrePromt = prompt("Ingrese su nombre: ");//Creamos una varible que guarde el valor del input
//La funcion resive como parametro lo que esta en nombrepromt
function HolaNombre(nombre) {
    console.log(`Hola ${nombre}!`);//Tienen que ser la misma variable nombre y nombre
}

HolaNombre(nombrePromt)//Se necesita para poder invocar a la funcion

/**
 * 3 - Crear funcion que resiba un numero como parametro y devulva el doble del numero
 */

alert('Doble de un numero');
let dobleNum;//Se creo esta variable para almacenar el valor devuelto por la funcion
let numeroInput = parseInt(prompt("Ingrese un numero: "));//pide un numero por prompt
//La funcion resive el numero pedido por prompt
function DobleNumero(numeroInput) {
    return numeroInput * 2;//La funcuion hace el doble de un numero
}
//ALmacenamos el valor de la funcion para despues imprimirlo
dobleNum = DobleNumero(numeroInput);//aqui se invoca a la funcion ya no hasta abajo
//Se muestra un mensaje con el resultado
alert(`Doble del numero ${numeroInput} es ${dobleNum}`);
