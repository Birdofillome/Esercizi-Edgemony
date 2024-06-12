import { GET } from "./get.js";
import { API_KEY } from "./keys.js";
import { renderList } from "./rendercard.js";

const inputTitleEl = document.querySelector('.title');
const inputPriceEl = document.querySelector('.price');
const inputDescriptionEl = document.querySelector('.description');
const inputCategoryEl = document.querySelector('.category-id');
const inputImagesEl = document.querySelector('.images');
const buttonSendEl = document.querySelector('.button-send');
const containerEl = document.querySelector(".container");
const searchBarEl = document.querySelector(".searchbar");
const buttonPage = document.querySelector(".button-page");
const categoryBtnContainer = document.querySelector(".category-container");
const genresContainerEl = document.querySelector(".genres-container");

let actualEndpoint = '';
let actualType = 'movie';
let pageNumber = 1;

buttonSendEl.addEventListener('click', e => {
    e.preventDefault();
    const objProductForm = {
        title: inputTitleEl.value,
        price: inputPriceEl.value,
        description: inputDescriptionEl.value,
        categoryId: inputCategoryEl.value,
        images: [inputImagesEl.value]
    };

    POST(objProductForm)
})

const BASE_URL = "https://api.escuelajs.co/";
const getProductEndpoint = "api/v1/products";

const deleteById = async (id) => {
    const res = await fetch(`${BASE_URL}${getProductEndpoint}/${id}`, {
        method: "DELETE"
    })

    const data = await res.json()

    console.log(data)
}

const POST = async (product) => {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await res.json();
    return data.id;
  };
  
categoryBtnContainer.addEventListener("click", (e) => {
    const categoryId = e.target.id;
    if (e.target.tagName === "BUTTON") {
actualEndpoint = `${actualType}/${categoryId}`;
pageNumber = 1;
render(actualEndpoint)
    } else {
console.log("fuori");
    }
});

const render = async (endpoint, query) => {
    const movieResponse = await GET(endpoint, pageNumber, query)
  
    renderList(movieResponse.results, containerEl);
  }
  
  render(`${actualType}/popular`);
  actualEndpoint = `${actualType}/popular`;
  
  buttonPage.addEventListener("click", () => {
    pageNumber++;
    render(actualEndpoint);
  });
  
  console.log(await GET('genre/movie/list'));

  const renderGenreList = async () => {
    const genreListElement = document.createElement('ul');
    const genreListResponse = await GET('genre/movie/list');
  
    genreListResponse.genres.forEach(genre => {
      const liEl = document.createElement('li')
  
      liEl.id = genre.id;
      liEl.textContent = genre.name
  
      genreListElement.append(liEl)
    })
  
    genresContainerEl.append(genreListElement)
  }
  renderGenreList();

genresContainerEl.addEventListener('click', e => {
  const tagName = e.target.tagName
  const id = Number(e.target.id)

  if (tagName === 'LI') {
    console.log(id)
    pageNumber = 1;

    render(`discover/${actualType}`, `with_genres=${id}`)
  }
})
