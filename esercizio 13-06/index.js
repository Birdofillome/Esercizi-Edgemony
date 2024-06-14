import errorEl from "./error.js";

const BASE_URL = "https://api.escuelajs.co/";
const getProductEndpoint = "api/v1/products";

const titoloEl = document.querySelector('.title');
const prezzoEl = document.querySelector('.price');
const descrizioneEl = document.querySelector('.description');
const categoriaEl = document.querySelector('.category-id');
const imaggineEl = document.querySelector('.images');
const buttonMandaEl = document.querySelector('.button-send');
const cancellaEL = document.querySelector('.delete-id');
const buttonDeleteEl = document.querySelector('.button-delete');
const containerEl = document.querySelector('.main-container');
const erroreTitolo = document.querySelector('.check-titolo');
const errorePrezzo = document.querySelector('.check-prezzo');
const erroreDescrizione = document.querySelector('.check-descrizione');
const erroreCategoria = document.querySelector('.check-categoria');
const erroreImmagine = document.querySelector('.check-immagine');
const idEsistente = document.querySelector('.id-esistente');
const idButton = document.querySelector('.id-button');
const messageError = document.querySelector('.message-error');

const aggiornaProdotto = {};
let id = "";

//bottone cerca id
idButton.addEventListener('click', async (e) => {
    e.preventDefault();
    id = idEsistente.value;
    const prodotto = await get (id);
    if (prodotto){
        titoloEl.value = prodotto.title;
        prezzoEl.value = prodotto.price;
        descrizioneEl.value = prodotto.description;
        categoriaEl.value = prodotto.category.id;
        imaggineEl.value = prodotto.images.join('').replace(/[\[\]"]/g, '');
    }
})

//post
const POST = async (product) => {
    try {
    const res = await fetch("https://api.escuelajs.co/api/v1/products", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    });
    const data = await res.json();
    console.log(data);
if (data.error){
    if (product.categoryId === 0) {
        data.message.push("La caterogia ha bisogno di un numero positivo")
    }
    console.log(data);
    throw data;
}
if (product.categoryId === 0) {
    throw {
        message: ["La categoria ha bisogno di un numero positivo"]
    }
}
containerEl.innerHTML = "";
    return data.id;
    } catch (err) {
        errorEl(err, containerEl);
    }
};

//patch
const patch = async (id, product) => {
    const res = await fetch(` ${BASE_URL}${getProductEndpoint}/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(product)
    })
    const data = res.json();
    return data;
}

//put
const put = async (id, product) => {
    const res = await fetch(` ${BASE_URL}${getProductEndpoint}/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(product)
    })
    const data = res.json();
    return data;
}

//get
const get = async (id) => {
    try {
        const res = await fetch(`${BASE_URL}${getProductEndpoint}/${id}`, {
            method: "GET"
        });
        const data = await res.json()
        if (data.message){
            throw data;
        }
        messageError.textContent = "";
        console.log(data)
        return data;
    } catch (error) {
        messageError.textContent = "ID non trovato";

    }     
}

//delete
const deleteById = async (id) => {
    const res = await fetch(`${BASE_URL}${getProductEndpoint}/${id}`, {
        method: "DELETE"
    })
    const data = await res.json()
    console.log(data);
    return data;
}

//button-send + aggiunta dei check di controllo value + aggiorna prodotti id esistente
buttonMandaEl.addEventListener('click', async e => {
    e.preventDefault();
let check = false;
if(titoloEl.value.trim() === "") {
erroreTitolo.textContent = "Il titolo non può essere vuoto";
check = true;
} else {
    erroreTitolo.textContent = "";
}

if(prezzoEl.value <= 0 || isNaN(prezzoEl.value)) {
    errorePrezzo.textContent = "Il prezzo deve essere un numero positivo";
    check = true;
    }

    if(categoriaEl.value.trim() === "" || isNaN(categoriaEl.value)) {
        erroreCategoria.textContent = "L'ID della categoria deve essere un numero valido";
        check = true;
        }

        if(descrizioneEl.value.trim() === "") {
            erroreDescrizione.textContent = "La descrizione non può essere vuota";
            check = true;
            }

            if(imaggineEl.value.trim() === "") {
                erroreImmagine.textContent = "L'URL dell'immagine non può essere vuoto";
                check = true;
                }
                
                if (check) {
                    return;
                }
            
    const objProductForm = {
        title: titoloEl.value,
        price: Number (prezzoEl.value),
        description: descrizioneEl.value,
        categoryId: Number (categoriaEl.value),
        images: [imaggineEl.value],
    };
    if(id) {
        await put(id, objProductForm);
        console.log("Prodotto aggiornato con successo!", objProductForm);
    } else {
        const elementId = await POST(objProductForm);
        console.log("id:", elementId, id);
    }
})

//button-delete
buttonDeleteEl.addEventListener('click', async e => {
    e.preventDefault();
    const productId = cancellaEL.value;
    const success = await deleteById(productId);
    console.log("Elemento cancellato",success);
});











