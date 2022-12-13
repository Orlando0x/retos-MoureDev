/*
 * Crea dos funciones, una que calcule el máximo común divisor (MCD) y otra
 * que calcule el mínimo común múltiplo (mcm) de dos números enteros.
 * - No se pueden utilizar operaciones del lenguaje que 
 *   lo resuelvan directamente.
 */

function mcm (num1,num2){
    let array1 = [];
    let array2 = [];
    let comunes = [];
    for (let i = 1; i < 15; i++) {
        let resA = num1 * i;
        array1.push(resA);
    }
    for (let i = 1; i < 15; i++) {
        let resB = num2 * i;
        array2.push(resB);
    }
    array1.forEach(numA => {
        array2.forEach(numB => {
            if(numA === numB){
                comunes.push(numA);
            }
        })
    });
    console.log(comunes[0]);
    return comunes[0];
}


mcm (81,243)

function MCD (num1,num2){
    const comunDivisor = [];
    // i representa el num menor, a su vez este sera el mayor divisor
    let i;
    num1 > num2 ? i=num2 : i=num1;
    // un buble para determinar los divisores comunes
    for (let index = 1; index <= i; index++) {
        if(num1%index === 0 & num2%index === 0){
            comunDivisor.push(index)
        }
    }
    // retornamos el mayor comun divisor
    return comunDivisor[comunDivisor.length - 1]
}

MCD(9,15)