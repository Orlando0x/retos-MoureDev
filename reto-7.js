/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

function recuentoPalabras(text){
    let clearText = text.replaceAll('.','');
    clearText = clearText.replaceAll('!','');
    clearText = clearText.replaceAll(',','');
    clearText = clearText.replaceAll('?','');

    const arrayText = (clearText.toLowerCase()).split(' ');
    const recuentoPalabras = arrayText.reduce((objeto, elemento) => {
        if (!objeto[elemento]){
            objeto[elemento] = 1
        }else{
            objeto[elemento] = objeto[elemento] + 1
        }
        return objeto
    }, {})
    console.log(recuentoPalabras);
    return recuentoPalabras;
}

recuentoPalabras('Hola como estas hola? prueba uno, prueba dos, prueba 3 y ultima prueba!!.');
/* {
  '3': 1,
  hola: 2,
  como: 1,
  estas: 1,
  prueba: 4,
  uno: 1,
  dos: 1,
  y: 1,
  ultima: 1
} */

