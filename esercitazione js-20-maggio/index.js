// Stampa un console log per ogni skill presente in coder

const coder = {
    firstName: 'Chiara', // coppia chiave - valore : "firstname" - "Chiara"
    lastName: 'Corvitto',
    age: 28,
    skills: ['JavaScript', 'HTML', 'CSS'],
    address: {
        // Inseriamo due nuove proprietà all'interno di address
        street: prompt("Enter your street"),
        country: prompt("Enter your country"),
        city: 'Caltanissetta',
        zipCode: '93100'
    }
};
// stampiamo in console tutte le skills del nostro coder
for (let value of coder.skills) {
    console.log(value);
}

// Stampiamo in console tutte le chiavi presenti in coder
for (let key in coder) { console.log(key); }

// Per ogni proprietà presente in coder, controlliamo se la lettera della prima chiave è una vocale
// Se la prima lettera è una vocale stampiamo in console la chiave ed il suo valore.
const vowels = "aeiou";

for (let key in coder) {
    if (vowels.includes(key[0])) {
        console.log(`${key} : ${coder[key]}`);
    }
}

// Chiediamo all'utente, tramite prompt, cosa vuole salvare dentro il nostro object e (tramite un altro prompt) quale valore voglia inserire. 
// Salviamo quindi una nuova proprietà con chiave/valore presi dai prompt.
const chiave = prompt("Wich key do you want to add?");
const value = prompt("Wich value do you want to add?");
coder[chiave] = value;
console.log(coder);