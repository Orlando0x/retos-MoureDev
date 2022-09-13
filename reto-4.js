/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

function calcularArea(poligono, dato1, dato2){
    if(poligono === 't'){
        const area = (dato1*dato2)/2
        console.log(`El area del triangulo es ${area}`);
        return area;
    } else if(poligono === 'c'){
        const area = dato1*dato2
        console.log(`El area del cuadrado es ${area}`);
        return area;
    } else if(poligono === 'r'){
        const area = dato1*dato2
        console.log(`El area del rectangulo es ${area}`);
        return area;
    } else {
        console.log(`Poligono no soportado. Recuerda solo escribe 't' para triangulo, 'c' cuadrado y 'r' rectangulo`)
    }
}

calcularArea('c',5,5)