/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */

function convBinario (entero){
    const array = [];
    for (let num = entero; num > 0; num = Math.floor(num/2)) {
        console.log(num);
        array.unshift(num % 2);
        console.log(array)
    }
}