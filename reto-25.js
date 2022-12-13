/*
 * Crea un programa que calcule quien gana más partidas al piedra,
 * papel, tijera.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "R" (piedra), "P" (papel)
 *   o "S" (tijera).
 * - Ejemplo. Entrada: [("R","S"), ("S","R"), ("P","S")]. Resultado: "Player 2".
 */

const plays = [["R","S"], ["S","R"], ["P","S"]];

let player1;
let player2;

function count (array) {
    player1 = 0;
    player2 = 0;

    array.forEach(plays => {
        whoWins(plays)
    });
    if(player1 > player2) console.log(`Player 1 WIN`)
    else if ((player1 < player2)) console.log(`Player 2 WIN`)
    else console.log('Tie!!');
}

function whoWins (array){
    if((array[0] === 'R' & array[1] === 'S') || (array[0] === 'S' & array[1] === 'P') || (array[0] === 'P' & array[1] === 'R')){
        return player1++;
    } else if ((array[0] === 'R' & array[1] === 'P') || (array[0] === 'S' & array[1] === 'R') || (array[0] === 'P' & array[1] === 'S') ) {
        return player2++;
    }
}

count(plays);
// Player 2 WIN

