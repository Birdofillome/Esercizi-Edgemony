//esercizio uno
let saluto = "Ciao Mondo";
console.log(saluto);

let zio = 'Mio zio viene dalla città di l\'Aquila';
console.log(zio);

let backtick = `
${saluto} sapete che ${zio}
`;
console.log(backtick);

//

//esercizio due
let pippo = "sono pippo";
let pippoUpper = pippo.toUpperCase();
console.log(pippoUpper);
//

//esercizio tre 

let code = prompt("inserisci il tuo codice fiscale");
let codeLower = code.toLowerCase();
console.log(codeLower);
//

//esercizio quattro
let numero = prompt('dammi un numero da uno a dieci');
console.log(numero);
numero = parseInt(numero);
if (numero > 7) {
    console.log("hai vinto!")
}
else {
    console.log("hai perso!")
}

//
