/*
 * Crea un programa que sea capaz de transformar texto natural a código
 * morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar
 *   la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras
 *   o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en
 *   https://es.wikipedia.org/wiki/Código_morse.
 */

function morse(text){
    const arrayText = text.toLowerCase().split('');
    const array = [];

    arrayText.forEach(letter => {
        switch(letter){
            case 'a':
                array.push('.-')
                array.push(' ')
                break;
            case 'b':
                array.push('-...')
                array.push(' ')
                break;
            case 'c':
                array.push('-.-.')
                array.push(' ')
                break;
            case 'ch':
                array.push('----')
                array.push(' ')
                break;
            case 'd':
                array.push('-··')
                array.push(' ')
                break;
            case 'e':
                array.push('.')
                array.push(' ')
                break;
            case 'f':
                array.push('..-.')
                array.push(' ')
                break;
            case 'g':
                array.push('--.')
                array.push(' ')
                break;
            case 'h':
                array.push('....')
                array.push(' ')
                break;
            case 'i':
                array.push('..')
                array.push(' ')
                break;
            case 'j':
                array.push('.---')
                array.push(' ')
                break;
            case 'k':
                array.push('-.-')
                array.push(' ')
                break;
            case 'l':
                array.push('.-..')
                array.push(' ')
                break;
            case 'm':
                array.push('--')
                array.push(' ')
                break;
            case 'n':
                array.push('-.')
                array.push(' ')
                break;
            case 'nn':
                array.push('--.--')
                array.push(' ')
                break;
            case 'o':
                array.push('---')
                array.push(' ')
                break;
            case 'p':
                array.push('.--.')
                array.push(' ')
                break;
            case 'q':
                array.push('--.-')
                array.push(' ')
                break;
            case 'r':
                array.push('.-.')
                array.push(' ')
                break;
            case 's':
                array.push('...')
                array.push(' ')
                break;
            case 't':
                array.push('-')
                array.push(' ')
                break;
            case 'u':
                array.push('..-')
                array.push(' ')
                break;
            case 'v':
                array.push('...-')
                array.push(' ')
                break;
            case 'w':
                array.push('.--')
                array.push(' ')
                break;
            case 'x':
                array.push('-..-')
                array.push(' ')
                break;
            case 'y':
                array.push('-.--')
                array.push(' ')
                break;
            case 'z':
                array.push('--..')
                array.push(' ')
                break;
            case '0':
                array.push('-----')
                array.push(' ')
                break;
            case '1':
                array.push('.----')
                array.push(' ')
                break;
            case '2':
                array.push('..---')
                array.push(' ')
                break;
            case '3':
                array.push('...--')
                array.push(' ')
                break;
            case '4':
                array.push('....-')
                array.push(' ')
                break;
            case '5':
                array.push('.....')
                array.push(' ')
                break;
            case '6':
                array.push('-....')
                array.push(' ')
                break;
            case '7':
                array.push('--...')
                array.push(' ')
                break;
            case '8':
                array.push('---..')
                array.push(' ')
                break;
            case '9':
                array.push('----.')
                array.push(' ')
                break;
            case '.':
                array.push('.-.-.-')
                array.push(' ')
                break;
            case ',':
                array.push('--..--')
                array.push(' ')
                break;
            case '?':
                array.push('..--..')
                array.push(' ')
                break;
            case `"`:
                array.push('.-..-.')
                array.push(' ')
                break;
            case '/':
                array.push('-..-.')
                array.push(' ')
                break;
            case ' ':
                array.push(' ')
                break;
        }
    });

    const morse = array.join('').trim();
    console.log(morse);
    return morse;
}

morse('Orlando');
// --- .-. .-.. .- -. -·· ---
morse('SOS');
// ... --- ...