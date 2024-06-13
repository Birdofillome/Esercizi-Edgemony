import errorEl from "./error.js";

const titoloEl = document.querySelector('.title');
const prezzoEl = document.querySelector('.price');
const descrizioneEl = document.querySelector('.description');
const categoriaEl = document.querySelector('.category-id');
const imaggineEl = document.querySelector('.images');
const buttonMandaEl = document.querySelector('.button-send');
const cancellaEL = document.querySelector('.delete-id');
const buttonDeleteEl = document.querySelector('.button-delete');
const containerEl = document.querySelector('.main-container');

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
        data.message.push("la caterogia ha bisogno di un numero positivo")
    }
    console.log(data);
    throw data;
}
if (product.categoryId === 0) {
    throw {
        message: ["la categoria ha bisogno di un numero positivo"]
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
    const res = await fetch(`${BASE_URL}${getProductEndpoint}/${id}`, {
        method: "GET"
    })

    const data = await res.json()

    console.log(data)
}

//delete
const BASE_URL = "https://api.escuelajs.co/";
const getProductEndpoint = "api/v1/products";

const deleteById = async (id) => {
    const res = await fetch(`${BASE_URL}${getProductEndpoint}/${id}`, {
        method: "DELETE"
    })
    const data = await res.json()
    console.log(data);
    return data;
}

//button-send
buttonMandaEl.addEventListener('click', async e => {
    e.preventDefault();
    const objProductForm = {
        title: titoloEl.value,
        price: Number (prezzoEl.value),
        description: descrizioneEl.value,
        categoryId: Number (categoriaEl.value),
        images: [imaggineEl.value],
    };
const elementId = await POST(objProductForm);
console.log("id:", elementId);
})

//button-delete
buttonDeleteEl.addEventListener('click', async e => {
    e.preventDefault();
    const productId = cancellaEL.value;
    const success = await deleteById(productId);
    console.log("Elemento cancellato",success);
});











