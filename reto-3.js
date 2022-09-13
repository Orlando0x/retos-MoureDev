/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

function isPrime (number) {
    for (let i = 2; i <= 11; i++) {
        if(number % i === 0){
            if (number === i) {return true}
            else {
                return false}
        }
    }
    return true
}

function showPrimeNum (){
    for(let num = 2; num <=100; num++){
        if(isPrime(num)){
            console.log(num);
        }
    }
}

showPrimeNum();