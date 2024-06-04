// Scriviamo una function che prende in parametro una serie indefinita di indicazioni, per ogni indicazione stampare un console.log
// nb: le indicazione possono essere solo "su" "giù" "sinistra" "destra" 

function indicazioni(...directions) {
    for (let direct of directions) {
        if (direct === 'su' || direct === 'giù' || direct === 'sinistra' || direct === 'destra') {
            console.log(direct);
        } else {
            console.log(`${direct} non è una direzione valida`);
        }
    }
}
indicazioni('su', 'su', 'sinistra')

//  Scrivere una function partendo da quella di prima, per ogni direzione salvare dentro un oggetto il numero di indicazioni uguali

function contaIndicazioni(...directions) {
    const moves = {
        su: 0,
        giù: 0,
        sinistra: 0,
        destra: 0
    };

    for (let direct of directions) {
        if (moves.hasOwnProperty(direct)) {
            moves[direct]++;
        } else {
            console.log(`${moves} non è una direzione valida`);
        }
    }
    return moves;
}
console.log(contaIndicazioni('su', 'su', 'sinistra'));

// Scriviamo una function che conta quante volte viene eseguita. Attacchiamo questa function all'evento click sul body usando document.body.onclick

let count = 1;
const countClick = () => {
    count++;
    console.log(`click -> ${count}`);
}

document.body.onclick = countClick;

// Scrivere una function che data una stringa in input possa sostituire ogni carattere con il suo indice nell'alfabeto
const indexForEachLetter = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10,
    k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20,
    u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
};

function alphabetPosition(string) {
    let output = '';

    // Convertiamo la stringa in minuscolo per uniformità
    string = string.toLowerCase();

    // Cicliamo su ogni carattere della stringa
    for (let letter of string) {
        // Se il carattere è una lettera, aggiungiamo il suo indice all'output
        if (indexForEachLetter[letter]) {
            output += indexForEachLetter[letter] + ' ';
        }
    }

    // Rimuoviamo l'ultimo spazio in eccesso e restituiamo l'output
    return output.trim();
}