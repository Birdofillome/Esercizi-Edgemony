// Esercizio - 1

const array = [-1, -2, -10, 2, 5];
console.log(array);
for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        console.log(array[i]);
    }
}
for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        console.log(array[i]);
        break;
    }
}

//esercizio - due
let parola = prompt("dammi una parola");
const parolaArray = parola.split("");
const newArray = [];

for (let i = parolaArray.length - 1; i >= 0; i--) {
    newArray.push(parolaArray[i]);
}
console.log(newArray);
console.log(parolaArray);

let isPalindromo = true;
for (let i = 0; i < parolaArray.length; i++) {
    if (parolaArray[i] !== newArray[i]) {
        console.log("non è un palindromo!");
        isPalindromo = false;
        break;
    }
}
if (isPalindromo) {
    console.log("è un palindromo!");
}

