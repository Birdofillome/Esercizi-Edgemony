//Usando il querySelector prendiamo l'elemento con id heading ed eseguiamo un console.log

const heading = document.querySelector('#heading'); // in questo caso stiamo selezionando un elemento con id="heading"
console.log(heading);

//Per ogni elemento button presente in pagina stampiamo in console il suo testo.

const buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
    console.log(buttons[i].textContent);
}


// Salviamo due variabili con dentro i riferimenti ai due button della pagina resetBtn e clickBtn;
// inseriamo una function dentro l'evento onclick di clickBtn e per ogni click:
// leggiamo il valore attuale del proprio innerHTML
// convertiamo il valore a numero, se NaN portiamolo a 0;
// incrementiamo il valore precedente e salviamolo in innerHTML;
// inseriamo una function dentro l'evento onclick di resetBtn e per ogni click impostiamo innerHTML di clickBtn a "0";

const resetBtn = document.querySelector('#resetBtn');
const clickBtn = document.querySelector('#clickBtn');

clickBtn.onclick = function () {
    let currentValue = clickBtn.innerHTML;
    let numericValue = Number(currentValue);
    if (isNaN(numericValue)) {
        numericValue = 0;
    }
    numericValue += 1;
    clickBtn.innerHTML = numericValue;
}

resetBtn.onclick = function () {
    clickBtn.innerHTML = 0;
}