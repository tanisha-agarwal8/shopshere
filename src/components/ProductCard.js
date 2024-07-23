// src/components/ProductCard.js
import React from 'react';
import LazyImage from './LazyImage';
import '../styles/ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <LazyImage src={product.image} alt={product.title} />
      <h3>{product.title.substring(0,40)}</h3>
      {/* <p>{product.description.substring(0, 60)}...</p> */}
      <div className="price">${product.price}</div>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
