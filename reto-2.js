/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

function serieFibonacci(cantidad){
    const fibonacci = [];
    fibonacci.push(0);
    fibonacci.push(1);
    
    for (let i = 2; i < cantidad; i++) {
        fibonacci[i] = fibonacci[i-2] + fibonacci[i-1]
    }
    return fibonacci;

}

console.log(serieFibonacci(50));