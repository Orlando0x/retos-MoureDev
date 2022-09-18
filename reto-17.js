/*
 * Crea una función que evalúe si un/a atleta ha superado correctamente una
 * carrera de obstáculos.
 * - La función recibirá dos parámetros:
 *      - Un array que sólo puede contener String con las palabras
 *        "run" o "jump"
 *      - Un String que represente la pista y sólo puede contener "_" (suelo)
 *        o "|" (valla)
 * - La función imprimirá cómo ha finalizado la carrera:
 *      - Si el/a atleta hace "run" en "_" (suelo) y "jump" en "|" (valla)
 *        será correcto y no variará el símbolo de esa parte de la pista.
 *      - Si hace "jump" en "_" (suelo), se variará la pista por "x".
 *      - Si hace "run" en "|" (valla), se variará la pista por "/".
 * - La función retornará un Boolean que indique si ha superado la carrera.
 * Para ello tiene que realizar la opción correcta en cada tramo de la pista.
 */

// playerActions = ['run','run','run','jump','run','jump','run','run','jump','run']
// track = '___|_|__|_'

function race (playerActions, track){
    const raceResult = [];
    let i = 0
    for (const action of playerActions) {
        if(action === 'run' && track[i] === '_'){
            raceResult.push('_')
        } else if (action === 'run' && track[i] === '|'){
            raceResult.push('/')
        };
        if(action === 'jump' && track[i] === '|'){
            raceResult.push('|')
        } else if (action === 'jump' && track[i] === '_'){
            raceResult.push('x')
        };
        i++;
    }
    const verification = raceResult.every(item => {
        return item != 'x' && item != '/'
    })

    console.log(raceResult.join(' '));
    return verification
}
race(['run','run','run','run','run','jump','run','run','jump','run'], '___|_|__|_')
race(['run','run','jump','run','jump','run'], '__|_|_')
race(['run','jump','run','jump','run','run','run','jump','run','run'], '___|_|__|_')