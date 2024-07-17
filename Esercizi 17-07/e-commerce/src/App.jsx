import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = [...cart, product];
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image}  alt={product.title} className="card-img" />
          <div className="card-content">
            <h2 className="card-title">{product.title}</h2>
            <p className="card-price">${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;

