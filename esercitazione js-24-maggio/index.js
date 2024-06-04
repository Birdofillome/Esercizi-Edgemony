// Aggiungiamo al nostro HTML tramite JS due nuovi elementi: un h1 ed un paragrafo. 
// siamo il metodo document.createElement per creare i vari elementi Per inserirli nella pagina usiamo rispettivamente: insertAdjacentElement() per h1, e append() per il <p>
const container = document.querySelector('.container');
const newVariable = document.createElement('h1');
newVariable.innerHTML = "Benvenuti sulla mia pagina";
container.insertAdjacentElement("afterbegin", newVariable);
const secondVariable = document.createElement('p');
secondVariable.innerHTML = "Sono il paragrafo della mia pagina";
container.append(secondVariable);

// button contatore dinamico: 
const button = document.createElement('button');
button.innerHTML = 0;
container.insertAdjacentElement("afterend", button);
button.style.borderRadius = "5px";
button.style.width = "60px";
button.style.borderWidth = "5px";
button.onmouseenter = function () {
    this.style.backgroundColor = "red";
    this.style.rotate = "30deg";
}
button.onclick = function () {
    const conta = this.innerHTML;
    const count = Number(conta) || 0;
    this.innerHTML = count + 1;
}
button.onmouseleave = function () {
    this.style.backgroundColor = "white";
    this.style.rotate = "0deg";
}

// Form nomi e cognomi
const formEl = document.querySelector('form');
const inputEl = document.querySelector('input');
const liEL = document.querySelector('.list');
formEl.onsubmit = function (event) {
    event.preventDefault();
    const inputValue = inputEl.value.trim();
    if (inputValue && inputValue.includes(' ')) {
        const li = document.createElement('li');
        li.innerText = inputValue;
        liEL.append(li);
        inputEl.value = '';
        li.onclick = function () {
            console.log(li.innerText);
        }
    }
}





