// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CartPage from './pages/CartPage';
import './styles/App.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [notification, setNotification] = useState('');

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.product.id === product.id);
    if (existingItem) {
      setCart(cart.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
    // showNotification(`Added ${product.title} to cart`);
    showNotification(`Product Added`);
  };

  const updateCart = (product, quantity) => {
    if (quantity <= 0) {
      setCart(cart.filter((item) => item.product.id !== product.id));
    } else {
      setCart(cart.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity }
          : item
      ));
    }
  };

  const onSearch = (query) => {
    setSearchQuery(query);
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 1000);
  };

  return (
    <Router>
      <div className="app">
        <Navbar onSearch={onSearch} />
        {notification && <div className="notification">{notification}</div>}
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} searchQuery={searchQuery} />} />
          <Route path="/cart" element={<CartPage cart={cart} updateCart={updateCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
