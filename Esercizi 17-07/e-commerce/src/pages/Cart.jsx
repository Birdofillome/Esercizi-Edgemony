import { useEffect, useState } from "react";
import "./Cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div>
      <h1>Carrello</h1>
      {cartItems.length === 0 ? (
        <p>Il carrello è vuoto.</p>
      ) : (
        <div className="cart-list">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-img" />
              <div className="cart-item-content">
                <h2 className="cart-item-title">{item.title}</h2>
                <p className="cart-item-price">${item.price}</p>
                <button onClick={() => removeFromCart(index)}>Rimuovi</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;

