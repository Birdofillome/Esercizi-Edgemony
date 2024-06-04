//Quiz risposta multipla
let score = 0;
let answer1 = prompt("Quanto fa 2+2?: 4,5,6,7");

switch (answer1) {
    case "4":
        score += 1;
        alert("risposta esatta");
        break;
    case "5":
    case "6":
    case "7":
        score = Math.max(0, score - 1);
    default:
        alert("risposta sbagliata");
}
let answer2 = prompt("Quanto fa 2+3?: 5,6,7,8");
switch (answer2) {
    case "5":
        score += 1;
        alert("risposta esatta");
        break;
    case "6":
    case "7":
    case "8":
        score = Math.max(0, score - 1);
    default:

        alert("risposta sbagliata");
}

let answer3 = prompt("Quanto fa 2+4?: 6,7,8,9");
switch (answer3) {
    case "6":
        score += 1;
        alert("risposta esatta");
        break; 6
    case "7":
    case "8":
    case "9":
        score = Math.max(0, score - 1);
    default:

        alert("risposta sbagliata");
}

let answer4 = prompt("Quanto fa 2+5?: 7,8,9,10");
switch (answer4) {
    case "7":
        score += 1;
        alert("risposta esatta");
        break;
    case "8":
    case "9":
    case "10":
        score = Math.max(0, score - 1);
    default:
        alert("risposta sbagliata");
}
alert(`Questo è il tuo punteggio ${score}`);

const arrayAnswer = [];
arrayAnswer.push(answer1, answer2, answer3, answer4);
console.log('risposte date', arrayAnswer, arrayAnswer.length);


if (score == 4) {
    alert("Sei un campione!");
} else {
    alert("Torna a studiare!");
}

// Esercizio - 2
let vowels = "aeiou";
let parola1 = prompt('Dammi una parola!');
let isVocal = vowels.includes(parola1[0]);
let result = (isVocal) ? "vocale" : "consonante";
console.log(result);

let parola2 = prompt('Dammi una parola!');
isVocal = vowels.includes(parola2[0]);
result = (isVocal) ? "vocale" : "consonante";
console.log(result);

let parola3 = prompt('Dammi una parola!');
isVocal = vowels.includes(parola3[0]);
result = (isVocal) ? "vocale" : "consonante";
console.log(result);

// Esercizio - 3
const string = prompt("Inserisci una parola");
console.log(string);
const stringSplit = string.split("");
console.log(stringSplit);
const reversString = stringSplit.reverse();
console.log(reversString);
const join = reversString.join("");
console.log(join);





