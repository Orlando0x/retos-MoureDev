/*
 * Escribe una función que reciba un texto y retorne verdadero o
 * falso (Boolean) según sean o no palíndromos.
 * Un Palíndromo es una palabra o expresión que es igual si se lee
 * de izquierda a derecha que de derecha a izquierda.
 * NO se tienen en cuenta los espacios, signos de puntuación y tildes.
 * Ejemplo: Ana lleva al oso la avellana.
 */

function isPalindromo (text){
    const arrayText = text.toLowerCase().replaceAll(' ','').replaceAll(',','').replaceAll('.','').replaceAll('?','').replaceAll('!','').split('');
    let i = 0;
    const validation = arrayText.every(letter => {
        i++;
        return letter === arrayText[arrayText.length - i];
    })
    console.log(validation);
    return validation;
}

isPalindromo('Oso');
// true
isPalindromo('Ana lleva al oso la pelota');
// false
isPalindromo('Ana lleva al oso la avellana');
// true
isPalindromo('Ana, lleva. al oso! la?? avellana...');
// true