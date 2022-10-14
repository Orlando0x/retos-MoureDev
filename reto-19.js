/*
 * Crea una función que reciba días, horas, minutos y segundos (como enteros)
 * y retorne su resultado en milisegundos.
 */

function converTime (d,h,m,s){
    const days = d*24*60*60;
    const hours = h*60*60;
    const min = m*60
    const sumaSeg = days + hours + min + s;
    const ms = sumaSeg * 1000;
    return `${ms} ms`;

}

converTime(2,13,40,22)
// 222022000
converTime(2,0,0,0)
converTime(0,0,0,200)
converTime(0,2,1,0)