/*
 * Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

function reto16 (text) {
    const arrayText = text.split(' ');
    const arrayTextFix = [];
    for (const word of arrayText) {
        arrayTextFix.push(word.replace(word[0],word[0].toUpperCase()))
    }
    const textFix = arrayTextFix.join(' ');
    console.log(textFix);
    return textFix;
}

reto16 ('hola mundo hola. mundo! hola, mundo')
// Hola Mundo Hola. Mundo! Hola, Mundo