/*
 * Crea una función que reciba dos array, un booleano y retorne un array.
 * - Si el booleano es verdadero buscará y retornará los elementos comunes
 *   de los dos array.
 * - Si el booleano es falso buscará y retornará los elementos no comunes
 *   de los dos array.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

const array1 = [1,2,3,4,5,'7'];
const array2 = [1,3,6,5,'5',2,7];

function challenge (array1,array2,boolean){
    let comunes = [];
    let noComunes = [];

    array1.forEach(element1 => {
        array2.forEach(element2 => {
            if(element1 === element2){
                comunes.push(element1)
            }
        });
    });
    if(boolean){
        console.log(comunes);
    } else {
        array1.forEach(element1 => {
            if(!comunes.includes(element1)){
                noComunes.push(element1);
            }
        });
        array2.forEach(element1 => {
            if(!comunes.includes(element1)){
                noComunes.push(element1);
            }
        });
        console.log(noComunes);
    }

}