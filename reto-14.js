/*
 * Escribe una función que calcule si un número dado es un número de Armstrong
 * (o también llamado narcisista).
 * Si no conoces qué es un número de Armstrong, debes buscar información 
 * al respecto.
 * 
 */

function isArmstrongNum (number){
    const conver = String(number);
    let suma = 0;
    for (let i = 0; i < conver.length; i++) {
        suma += (Number(conver[i]) ** conver.length);
    };
    (suma === number) ? 
    console.log(`${number} es un número de Armstrong`) :
    console.log(`${number} NO es un número de Armstrong`);
}

isArmstrongNum(10);
// 10 NO es un número de Armstrong
isArmstrongNum(371);
// 371 es un número de Armstrong
isArmstrongNum(8208);
// 8208 es un número de Armstrong