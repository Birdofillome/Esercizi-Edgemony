//Esercizio 1

const div = document.querySelector(".container");
const bottoneUno = document.querySelector(".bottone_uno");
const bottoneDue = document.querySelector(".bottone_due");

// bottoneUno.addEventListener("click", () => {
//     console.log("sono il primo bottone");
// });
// bottoneDue.addEventListener("click", () => {
//     console.log("sono il secondo bottone");
// });

div.addEventListener("click", (event) => {
    const evento = event.target;
    logName.call(evento)
    if (
        evento.tagName === "BUTTON" &&
        evento.className === "bottone_uno"
    )
    {
        console.log("sono bottone uno");
    } else if (evento.tagName === "BUTTON"){
        console.log("sono bottone due");
    } else if (evento.tagName === "UL" || evento.tagName === "LI"){
        console.log("sono nella lista");
    } else{ 
        console.log("sono il div da fuori");
    }
});

//Esercizio 2
const chiaraUser = {
    name: "Chiara",
    age: "28",
    getUser: logName
}
const corvittoUser = {
    name: "Corvitto",
    age: "28",
    getUser: logName
}
function logName() {
    console.log("Sono log name", this);
}
logName.call(chiaraUser);
logName.call(corvittoUser);

// Esecuzione della funzione getUserName che prende come valore dentro ogni oggetto la funzione logName e quindi leggerà il contesto dell'oggetto in questione
chiaraUser.getUser();
corvittoUser.getUser();

//Esercizio opzionale 1
// richiamiamo la classe section e creiamo un bottone che ci permetta di crare con la modale altri 
// tre pulsanti, ogni pulsante ha un suo evento, il pulsante close ci permetterà di chiudere la modale che crea i tre pulsanti. 
const section = document.querySelector(".section");
const pulsante = document.createElement("button");
pulsante.className = "creazione_pulsanti";
pulsante.textContent = "Clicca qui!";
section.append(pulsante);

const modale = document.createElement('div');
modale.className = "modale";
modale.style.display = 'none';
const primoEl = document.createElement('button');
const secondoEl = document.createElement('button');
primoEl.textContent = "YES";
secondoEl.textContent = "NO";
const terzoEl = document.createElement('button');
terzoEl.textContent = 'Close';
modale.append(primoEl, secondoEl, terzoEl);
section.append(modale);

pulsante.addEventListener("click", () => {
    modale.style.display = 'block'; // 'block ci permette di bloccare sul display quello che abbiamo dentro la modale.
    setTimeout(() => {
    modale.style.display = 'none'; // aggiungiamo un setTimeout che ogni 5000ms chiude automaticamente la modale 
    },5000);
});

primoEl.addEventListener('click', () => {
    console.log('Hai cliccato si!');
});
secondoEl.addEventListener('click', () => {
    console.log('hai cliccato no');
});
terzoEl.addEventListener('click', () => {
    modale.style.display = 'none';
});

