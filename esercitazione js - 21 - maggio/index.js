//Scriviamo ed eseguiamo una funzione che permetta di fare rapidamente un console.clear()

function clearConsole() {
    console.clear();

}
console.log(clearConsole);
console.log('ciaone');
clearConsole();

//Scriviamo ed eseguamo una funzione che possa data una stringa tornarne una nuova con la prima lettera maiuscola, il resto minuscolo.

function capitalize(string) {
    let firstLetterCapitalize = string[0].toUpperCase();
    let stringWithoutFirstLetter = string.slice(1).toLowerCase();

    return `${firstLetterCapitalize}${stringWithoutFirstLetter}`;
}

console.log(capitalize('CIAONE'));


//Scrivere una function che dati due parametri in ingresso controlla se siano numeri e torna il numero più piccolo:


function findSmallestNumber(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return Math.max(a, b);
    } else {
        typeof a != 'number' && typeof b != 'number'
        return console.warn('Scrivi un numero')
    }
}

console.log(findSmallestNumber(10, 8));
console.log(findSmallestNumber(0, 5));

//Scriviamo una function potenza che accetta due parametri: base ed esponente. 
//Facciamo tornare alla funzione il numero "base" moltiplicato per se stesso tante volte quante indicate dall'esponente

function potenza(base, esponente) {

    let result = 1
    for (let i = 0; i < esponente; i++) {
        result *= base;
    }
    if (esponente = 0) {
        result = 1
    }
    return result;
}
console.log(potenza(4, 4))
console.log(potenza(5, 0))

//il fattoriale (n!) in matematica è il prodotto di un numero intero per tutti i numeri precedenti positivi (!==0). esempio: 5! (fattoriale di 5) è 5 * 4 * 3 * 2 * 1 = 120
//scriviamo una funzione ricorsia che calcola il fattoriale di un numero passato tramite parametro e lo stampa in console.

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(0));