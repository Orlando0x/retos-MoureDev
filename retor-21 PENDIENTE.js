/* * Enunciado: Lee el fichero "Challenge21.txt" incluido en el proyecto, calcula su resultado e imprímelo.
 * - El .txt se corresponde con las entradas de una calculadora.
 * - Cada línea tendrá un número o una operación representada por un símbolo (alternando ambos).
 * - Soporta números enteros y decimales.
 * - Soporta las operaciones suma "+", resta "-", multiplicación "*" y división "/".
 * - El resultado se muestra al finalizar la lectura de la última línea (si el .txt es correcto).
 * - Si el formato del .txt no es correcto, se indicará que no se han podido resolver las operaciones. */

const url_txt = 'https://github.com/mouredev/Weekly-Challenge-2022-Kotlin/blob/main/app/src/main/java/com/mouredev/weeklychallenge2022/Challenge21.txt'

fetch(url_txt)
.then(res => res.text())
.then(data => console.log(data))

const txt =
5
+
2
-
1
*
8
-
15
+
4
/
2

console.log(txt);