/*
 * Escribe una función que calcule y retorne el factorial de un número dado
 * de forma recursiva.
 * 
 * ejemplo, 5! = 5.4.3.2.1 = 120
 * 4! = 4.3.2.1 = 24
 * 
 * 
 */

const factorial = (number) => {
    let factorialResult = 1;
    for (let num = number; num >= 1; num--) {
        factorialResult *= num;
    };
    console.log(factorialResult);
    return factorialResult;
};

factorial(4);
// 24
factorial(5);
// 120
factorial(10);
// 3628800