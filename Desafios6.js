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

/**
 * 4 - Crear una funcion que reciba sod numero como parametro y devuelva su promedio
 */

alert('Promedio de dos numeros');
let numero1 = parseInt(prompt("Ingrese el primer numero: "));
let numero2 = parseInt(prompt("Ingrese el segundo numero: "));

function promedioNumeros(numero1, numero2) {
    let promedio = (numero1+numero2)/2;
    return promedio;
}

let res = promedioNumeros(numero1, numero2);
alert(`El promedio de los numeros ${numero1} y ${numero2} es: ${res}`);

/**
 * 5 - Crear funcion que reciba dos numeros y devulva el mayor de ellos
 */

alert('Numero mayor')
let num1 = parseInt(prompt("Ingrese el primer numero: "));
let num2 = parseInt(prompt("Ingrese el segundo numero: "));

function numeroMayor(num1, num2) {
    let numMayor;
    if (num1 > num2) {
        numMayor =  num1;
    }else{
        numMayor = num2;
    }
    return numMayor;
}

let resultado = numeroMayor(num1, num2);
alert(`El numero mayor entre ${num1} y ${num2} es ${resultado}`);

/**
 * 6 - Crear una funcion que reciba un numero como parametro, y devuelva el 
 * resultado de multiplicar ese numero por si mismo
*/

alert('Numero multiplicado por si mismo');
let numInput = parseInt(prompt("Ingrese un numero: "));

function numeroPorSiMismo(numPara) {
    let numMismo = numPara * numPara;
    return numMismo;
}

let numResultado = numeroPorSiMismo(numInput);
alert(`El numero ${numInput} multiplicado por si mismo es: ${numResultado}`);