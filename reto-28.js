/*
 * Simula el funcionamiento de una máquina expendedora creando una operación
 * que reciba dinero (array de monedas) y un número que indique la selección
 * del producto.
 * - El programa retornará el nombre del producto y un array con el dinero
 *   de vuelta (con el menor número de monedas).
 * - Si el dinero es insuficiente o el número de producto no existe,
 *   deberá indicarse con un mensaje y retornar todas las monedas.
 * - Si no hay dinero de vuelta, el array se retornará vacío.
 * - Para que resulte más simple, trabajaremos en céntimos con monedas
 *   de 5, 10, 50, 100 y 200.
 * - Debemos controlar que las monedas enviadas estén dentro de las soportadas.
 */

//                          1               2               3                   4           5           6
const listProducts = [['caramelos',5],['galletas',10],['coca-cola',15],['pirulin',20],['pan',20],['snacks',25]];
const monedas = [5]

function expen (dinero,producto){
    if(producto > listProducts.length) return console.log('El producto solicitado no existe, intente de nuevo');

    const sumaMonedas = monedas.reduce((valorAc, valorNue) => {
        return valorAc + valorNue
    })
    console.log(sumaMonedas);

    let total = sumaMonedas - listProducts[producto-1][1];
    if(total < 0) return console.log("Dinero insuficiente");
    console.log(listProducts[producto-1][0]);
    console.log(total);
}


expen(monedas,3)
expen(15,4)
expen(30,7)
