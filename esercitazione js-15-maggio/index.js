// Esercizio - 1
//Chiediamo all'utente tramite un prompt di inserire il suo nome, poi salviamo il dato in una variabile;
//Chiediamo all'utente tramite un prompt di inserire il suo cognome, poi salviamo il dato in una variabile;
let nome = prompt("Inserisci il tuo nome");
let cognome = prompt("Inserisci il tuo cognome");

//Controlliamo che siano valori validi (non null), con almeno 3 caratteri e mostriamo tramite alert errori specifici;
//Se abbiamo mostrato un errore ricarichiamo la pagina usando window.location.reload();
if (nome === '') {
    alert("Non hai inserito nessun nome");
    ;
} else if (nome.length < 3) {
    alert('Inserire minimo tre caratteri');
    window.location.reload();

} else if (cognome === '') {
    alert('Non hai inserito nessun cognome');

} else if (cognome.length < 3) {
    alert('Inserire minimo tre caratteri');
    window.location.reload();
}
// Prendiamo il nome inserito e salviamo una nuova variabile trasformando la prima lettera in maiuscola;
// Prendiamo il cognome inserito e salviamo una nuova variabile trasformando la prima lettera in maiuscola;
// Mostriamo tramite alert "Ciao + [Nome] + [Cognome]"
else {
    const nomeM = nome[0].toUpperCase();
    const nameWithoutFirstLetter = nome.slice(1);
    const nomeWithCapitalize = `${nomeM}${nameWithoutFirstLetter}`;
    const cognomeM = cognome[0].toUpperCase();
    const cognomeWithoutFirstLetter = cognome.slice(1);
    const cognomeWithCapitalize = `${cognomeM}${cognomeWithoutFirstLetter}`;
    alert(`Ciao ${nomeWithCapitalize} ${cognomeWithCapitalize}`);
};


// Esercizio - 2 quizzone
// Creiamo una variabile let score = 0;;
// Proponiamo all'utente, tramite prompt, 4 domande di cultura generale e raccogliamo le sue risposte in altrettante variabili;
let score = 0;
let answer1 = prompt("Qual'è il capoluogo della Sicilia?");
let answer2 = prompt("Qual'è il capoluogo della Puglia?");
let answer3 = prompt("Qual'è il capoluogo del Lazio?");
let answer4 = prompt("Qual'è il capoluogo della Sardegna?");

// Correggiamo le risposte in variabili, portandole tutte in minuscolo e riducendo gli spazi
answer1 = answer1.toLowerCase().trim();
answer2 = answer2.toLowerCase().trim();
answer3 = answer3.toLowerCase().trim();
answer4 = answer4.toLowerCase().trim();

// Per ogni risposta corretta aggiungiamo al score 3 punti, per ogni errata togliamo 1 punto;
// Alla fine delle 4 domande mostriamo il pungeggio complessivo;
switch (answer1) {
    case "palermo":
        score += 3;
        break;

    default:
        score -= 1;
        break;
}
switch (answer2) {
    case "bari":
        score += 3;
        break;
    default:
        score -= 1;
        break;
}
switch (answer3) {
    case "roma":
        score += 3;
        break;
    default:
        score -= 1;
        break;
}
switch (answer4) {
    case "cagliari":
        score += 3;
        break;
    default:
        score -= 1;
        break;
}

//Poi se le hai indovinate tutte mostra un alert "Sei il nuovo campione!"
if (score == 12) {
    alert(`Sei il nuovo campione!: ${score}`);
} else {
    alert('Torna a studiare!');
}


