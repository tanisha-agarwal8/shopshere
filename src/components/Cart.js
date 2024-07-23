// src/components/Cart.js
import React from 'react';
import '../styles/Cart.css';

const Cart = ({ cart, updateCart }) => {
  const handleQuantityChange = (product, quantity) => {
    updateCart(product, quantity);
  };

  const handleRemove = (product) => {
    updateCart(product, 0);
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div className="cart">
      {cart.map((item) => (
        <div key={item.product.id} className="cart-item">
          <div>
            <h3 className="cart-item-title">{item.product.title}</h3>
            <p className="cart-item-price">Price: ${item.product.price}</p>
            <p>
              Quantity:
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.product, e.target.value)}
                className="quantity-input"
              />
            </p>
          </div>
          <button 
            onClick={() => handleRemove(item.product)} 
            className="remove-btn"
          >
            Remove
          </button>
        </div>
      ))}
      <h2 className="total-price">Total Price: ${totalPrice.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;
