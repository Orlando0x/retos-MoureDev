/*
 * Crea una función que calcule y retorne cuántos días hay entre dos cadenas
 * de texto que representen fechas.la) {
 * - Una cadena de texto que representa una fecha tiene el formato "dd/MM/yyyy".
 * - La función recibirá dos String y retornará un Int.
 * - La diferencia en días será absoluta (no importa el orden de las fechas).
 * - Si una de las dos cadenas de texto no representa una fecha correcta se
 *   lanzará una excepción.
 */

function countDays (fecha1, fecha2){
    const fecha1Array = fecha1.split('/')
    const dateA = new Date(fecha1Array[2],(Number(fecha1Array[1])-1),fecha1Array[0])
    const fecha2Array = fecha2.split('/')
    const dateB = new Date(fecha2Array[2],(Number(fecha2Array[1])-1),fecha2Array[0])

// Comprobacion de que las fechas cumplan el formato indicado
    if (Number(fecha1Array[0]) > 31 || Number(fecha2Array[0]) > 31){
        console.error('Error en el dia, recuerde el formato es "dd/MM/yyyy"')
        return
    } else if (Number(fecha1Array[1]) > 12 || Number(fecha2Array[1]) > 12) {
        console.error('Error en el mes, recuerde el formato es "dd/MM/yyyy"')
        return
    } else if (Number(fecha1Array[2]) > 9999 || Number(fecha2Array[2]) > 9999) {
        console.error('Error en el annio, recuerde el formato es "dd/MM/yyyy"')
        return
    }

    let count = (dateA - dateB)/60/60/24/1000;
    if (count < 0) count = count * -1;

    console.log(`Hay ${count} día(s) entre estas dos fechas`);
    return count;
}

countDays('20/09/2022','21/09/2022');
// Hay 1 día(s) entre estas dos fechas
countDays('01/01/2021','31/12/2021');
// Hay 364 día(s) entre estas dos fechas
countDays('01/09/2021','21/09/2021');
// Hay 20 día(s) entre estas dos fechas
