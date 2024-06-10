import { GET } from "./get.js";
import { API_KEY } from "./keys.js";
import { renderList } from "./rendercard.js";

const containerEl = document.querySelector(".container");
const searchBarEl = document.querySelector(".searchbar");
const buttonPage = document.querySelector(".button-page");
const categoryBtnContainer = document.querySelector(".category-container");

let actualEndpoint = '';
let actualType = 'movie';
let pageNumber = 1;

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

const render = async (endpoint) => {
    const movieResponse = await GET(endpoint, pageNumber)
  
    renderList(movieResponse.results, containerEl);
  }
  
  render(`${actualType}/popular`);
  actualEndpoint = `${actualType}/popular`;
  
  buttonPage.addEventListener("click", () => {
    pageNumber++;
    render(actualEndpoint);
  });
  
  console.log(await GET('genre/movie/list'));

