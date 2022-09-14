/*
 * Crea un programa que comprueba si los paréntesis, llaves y corchetes
 * de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cieran
 *   en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios.
 *   No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
 */

function isBalanced (string){
    const array = string.replaceAll(' ','').split('');
    let balanced = [];
    array.forEach(element => {
        if(element === '{'){
            balanced.push(array.find(item => item === '}'))
        }else if(element === '}'){
            balanced.push(array.find(item => item === '{'))
        }
        if(element === '['){
            balanced.push(array.find(item => item === ']'))
        }else if(element === ']'){
            balanced.push(array.find(item => item === '['))
        }
        if(element === '('){
            balanced.push(array.find(item => item === ')'))
        }else if(element === '('){
            balanced.push(array.find(item => item === ')'))
        }
    });
    for (let i = 0; i < balanced.length; i++) {
        if(balanced[i]===undefined){
            console.log('Expresion no balanceada'); 
            return
        }
    }
    console.log('Expresion balanceada');
    return
}

isBalanced('{ a * ( c + d ) ] - 5 }')
// Expresion no balanceada
isBalanced('{ [ a * ( c + d ) ] - 5 }')
// Expresion balanceada