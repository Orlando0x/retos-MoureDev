/*
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 */

/* 'Hola como estas','Hola mundo mundo' */


function transform (str1,str2){
    const arrayStr1 = str1.toLowerCase().split('');
    const arrayStr2 = str2.toLowerCase().split('');
    const arrayOut1 = [];
    const arrayOut2 = [];
//Ciclo for + metodo find, para cumplir con out1
    for (let item of arrayStr1) {
       const find1 = arrayStr2.find(word => {
        return word === item
       })


       if(find1 === undefined || find1 === ' '){
        arrayOut1.push(item)
       }
    }
//Ciclo for + metodo find, para cumplir con out2
    for (let item of arrayStr2) {
       const find2 = arrayStr1.find(word => {
        return word === item
       })

       if(find2 === undefined || find2 === ' '){
        arrayOut2.push(item)
       }
    }
//Transformo un array en un string
    const out1 = arrayOut1.join('');
    const out2 = arrayOut2.join('');
    console.log(`out1:${out1}`)
    console.log(`out2:${out2}`)

}

transform('Hola como estas','Hola mundo mundo');
//out1: c ests
//out2: und und

transform('Orlando Oscar Octavio','OctavioX Luis');
//out1:rnd r 
//out2:x u