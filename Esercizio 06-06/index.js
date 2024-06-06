const div = document.querySelector('.container');
const button = document.querySelector('.bottone');
button.textContent = "Clicca qui!";
button.addEventListener("click", () => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data)=> {
        for (let i = 0; i <= data.length - 1; i++){
        const card = document.createElement('div');
        const titolo = document.createElement('p');
        const image = document.createElement('img');
        const price = document.createElement('p');
        const description = document.createElement('p');
        card.classList.add('card');
        titolo.textContent = data [i].title;
        titolo.className = "titolo";
        image.src = data [i].image;
        image.className = "immagine";
        description.textContent = data [i].description;
        price.textContent = data [i].price;
        price.className = 'prezzo';
        card.append(image, titolo, description, price);
        div.append(card);
        console.log("DATA", data);}
    });
    console.log("PROMISE", fetch("https://fakestoreapi.com/products"));
})

