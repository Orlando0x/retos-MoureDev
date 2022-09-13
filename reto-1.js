/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function isAnagrama (word1, word2){
    if (word1 === word2){
        return false;
    } else if (word1.length === word2.length){
        const word1Split = word1.split('');
        const word2Split = word2.split('');

        for (let letter1 of word1Split){
            const anagrama = word2Split.some((letter2) => letter1 === letter2);
            if (anagrama == false){
                return false;
            }
        }
        return true;
    } else return false;
};

isAnagrama('amor', 'roma');
// true
isAnagrama('amor', 'romas');
// false
isAnagrama('amor', 'amor');
// false
isAnagrama('eva', 'ave');
// true

