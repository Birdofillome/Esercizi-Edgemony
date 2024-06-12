const titoloEl = document.querySelector('.title');
const prezzoEl = document.querySelector('.price');
const descrizioneEl = document.querySelector('.description');
const categoriaEl = document.querySelector('.category-id');
const imaggineEl = document.querySelector('.images');
const buttonMandaEl = document.querySelector('.button-send');
const cancellaEL = document.querySelector('.delete-id');
const buttonDeleteEl = document.querySelector('.button-delete');


const BASE_URL = "https://api.escuelajs.co/";
const getProductEndpoint = "api/v1/products";

//post
const POST = async (product) => {
    const res = await fetch("https://api.escuelajs.co/api/v1/products", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    });
    const data = await res.json();
    console.log(data);
    return data.id;
    };

//delete
const deleteById = async (id) => {
    const res = await fetch(`${BASE_URL}${getProductEndpoint}/${id}`, {
        method: "DELETE"
    })
    const data = await res.json()
    console.log(data);
}

buttonMandaEl.addEventListener('click', e => {
    e.preventDefault();
    const objProductForm = {
        title: titoloEl.value,
        price: prezzoEl.value,
        description: descrizioneEl.value,
        categoryId: categoriaEl.value,
        images: [imaggineEl.value],
    };
    POST(objProductForm)
})










