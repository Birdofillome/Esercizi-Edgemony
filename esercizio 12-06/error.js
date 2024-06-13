const erroreTitolo = document.querySelector('.errore-titolo');
const errorePrezzo = document.querySelector('.errore-prezzo');
const erroreDescrizione = document.querySelector('.errore-descrizione');
const erroreCategoria = document.querySelector('.errore-categoria');
const erroreImmagine = document.querySelector('.errore-immagine');

const errorEl = (err, mainContainer) => {
    mainContainer.innerHTML = "";
    const messaggioErrore = document.createElement("h2");
    messaggioErrore.textContent = `${err.statusCode} - ${err.error}`;

    erroreTitolo.innerHTML = "";
    errorePrezzo.innerHTML = "";
    erroreDescrizione.innerHTML = "";
    erroreCategoria.innerHTML = "";
    erroreImmagine.innerHTML = "";

    err.message.forEach((message) => {
        if (message.includes("title")) {
           erroreTitolo.textContent = message;
            return;
        }
        if (message.includes("price")) {
           errorePrezzo.textContent = message;
            return;
        }
        if (message.includes("description")) {
            erroreDescrizione.textContent = message;
            return;
        }
        
        if (message.includes("category-id")) {
            erroreCategoria.textContent = message;
            return;
        }
        if (message.includes("images")) {
            erroreImmagine.textContent = message;
            return;
        }
    });
mainContainer.append(messaggioErrore);
console.error(`${err.statusCode} - ${err.error}`);
};

export default errorEl;
