/*
 * Crea una función que analice una matriz 3x3 compuesta por "X" y "O"
 * y retorne lo siguiente:
 * - "X" si han ganado las "X"
 * - "O" si han ganado los "O"
 * - "Empate" si ha habido un empate
 * - "Nulo" si la proporción de "X", de "O", o de la matriz no es correcta.
 *   O si han ganado los 2.
 * Nota: La matriz puede no estar totalmente cubierta.
 * Se podría representar con un vacío "", por ejemplo.
 */

/* const matriz = [`
    X,O,X,      
    X,X,O,      
    X,O,X,      
`]
 */

function ticTacToe (matriz) {
const matrizFix = matriz[0].replaceAll(' ','').replaceAll('\n','').split(',');
matrizFix.pop();
const row0 = matrizFix.slice(0,3);
const row1 = matrizFix.slice(3,6);
const row2 = matrizFix.slice(6,9);
const col0 = [matrizFix[0],matrizFix[3],matrizFix[6]]
const col1 = [matrizFix[1],matrizFix[4],matrizFix[7]]
const col2 = [matrizFix[2],matrizFix[5],matrizFix[8]]
let validation = false;

// fila 1 es hay 3 iguales?
if(row0[0] === row0[1] && row0[1] === row0[2]){
    console.log(`${row0[0]} Win`)
    validation = true;
} else if(col0[0] === col0[1] && col0[1] === col0[2]){
    console.log(`${col0[0]} Win`)
    validation = true;
}
// fila 2 es hay 3 iguales?
if(row1[0] === row1[1] && row1[1] === row1[2]){
    console.log(`${row1[0]} Win`)
    validation = true;
} else if(col1[0] === col1[1] && col1[1] === col1[2]){
    console.log(`${col1[0]} Win`)
    validation = true;
}
// fila 3 es hay 3 iguales?
if(row2[0] === row2[1] && row2[1] === row2[2]){
    console.log(`${row2[0]} Win`)
    validation = true;
}else if(col2[0] === col2[1] && col2[1] === col2[2]){
    console.log(`${col2[0]} Win`)
    validation = true;
}
// diagonal
if(row0[0] === row1[1] && row1[1] === row2[2]){
    console.log(`${row0[0]} Win`)
    validation = true;
}else if(col0[2] === col1[1] && col1[1] === col2[0]){
    console.log(`${col2[0]} Win`)
    validation = true;
}

if(!validation){
    console.log("Empate");
}

}

ticTacToe([`
    X,O,X,
    X,O,O,
    O,X,X,
`])
//Empate
ticTacToe([`
    X,O,O,
    X,O,O,
    O,X,X,
`])
// O Win