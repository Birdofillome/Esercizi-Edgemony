import { getHeaderHTML } from "./components/header.js";
import { getMainHTML } from "./components/main.js";
import { getFooterHTML } from "./components/footer.js";

window.addEventListener("DOMContentLoaded", () => {
console.log("ciao mondo, la pagina si è caricata");

const appEl = document.querySelector("#app");

if (appEl) {
    // dentro la function sono sicuro che appEl sia un elemento caricato nel dom
    renderPage(appEl);
}
});

async function renderPage(appEl) {

const header = getHeaderHTML();
const main = await getMainHTML();
const footer = getFooterHTML();
// Creiamo una stringa che contiene html
const html = header + main + footer;
// La insieriamo dentro appEl
appEl.innerHTML = html;
}
// function per creare elementi
function createElement(element, attrs = {}, parent = document.body) {
  // creo elemento
const el = document.createElement(element);

for (let prop in attrs) {
    if (prop in el) {
    el[prop] = attrs[prop];
    continue;
    }

    el.setAttribute(prop, attrs[prop]);
}

parent.append(el);
}