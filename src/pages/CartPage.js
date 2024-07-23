// src/pages/CartPage.js
import React, { useState } from 'react';
import '../styles/CartPage.css';
import { Footer } from '../components/Footer';

const CartPage = ({ cart, updateCart }) => {
  const [notification, setNotification] = useState('');

  const handleRemove = (product) => {
    updateCart(product, 0); // Remove product
    // showNotification(`Removed ${product.title} from cart`);
    showNotification(`Product Removed`);
  };

  const handleQuantityChange = (product, quantity) => {
    updateCart(product, quantity);
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2);
  };

  return (
    <>
    <div className="cart-page">
      {notification && <div className="notification">{notification}</div>}
      <h1 className='cart-title'>Your Cart</h1>
      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map(({ product, quantity }) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                <div className="quantity">
                  <button onClick={() => handleQuantityChange(product, quantity - 1)} disabled={quantity <= 1}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => handleQuantityChange(product, quantity + 1)}>+</button>
                </div>
                <button className="remove-button" onClick={() => handleRemove(product)}>Remove</button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="cart-total">
        <h2>Total: ${calculateTotal()}</h2>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CartPage;
