// src/components/LazyImage.js
import React, { useState } from 'react';
import '../styles/LazyImage.css';

const LazyImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative">
      {!loaded && <div className="shimmer"></div>}
      <img 
        src={src} 
        alt={alt} 
        onLoad={() => setLoaded(true)} 
        className={`lazy-image ${loaded ? 'loaded' : ''}`}
      />
    </div>
  );
};

export default LazyImage;
