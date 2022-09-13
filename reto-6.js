/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

function inverText(text){
    arrayText = text.split('');
    const inverArray = [];
    arrayText.forEach(word => {
        inverArray.unshift(word)
    });
    const inverText = inverArray.join('');
    console.log(inverText);
    return inverText;
}