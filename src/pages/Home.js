// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import ProductCard from '../components/ProductCard';
import { Reviews } from '../components/Reviews';
import '../styles/Home.css';
import { Footer } from '../components/Footer';
import { Rectangle } from '../components/Rectangle';
import { ContainerFluid } from '../components/ContainerFluid';

const Home = ({ addToCart, searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      setProducts(products);
      setLoading(false);
    };

    getProducts();
  }, []);

  if (loading) {
    return (
      <div className="shimmer-container">
        {Array(10).fill().map((_, index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
      </div>
    );
  }

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <ContainerFluid/>
    <Rectangle/>
    <div className="product-list">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
    <Reviews/>
    <Footer/>
    </>
  );
};

export default Home;
