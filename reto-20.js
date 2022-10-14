/*
 * Crea una función que sume 2 números y retorne su resultado pasados
 * unos segundos.
 * - Recibirá por parámetros los 2 números a sumar y los segundos que
 *   debe tardar en finalizar su ejecución.
 * - Si el lenguaje lo soporta, deberá retornar el resultado de forma
 *   asíncrona, es decir, sin detener la ejecución del programa principal.
 *   Se podría ejecutar varias veces al mismo tiempo.
 */

function sumaAsincrona (num1,num2,time){
    const ms = time * 1000;
    const suma = num1 + num2;
    setTimeout(() => {
        console.log(suma)
    }, ms);
    console.log(`En ${time} seg tendras el resultado`)
}

sumaAsincrona(2,2,5);
// En 5 seg tendras el resultado
// 4