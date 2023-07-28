// ProductList
import './ProductList.css';

import React from 'react';

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} />
          <p>{product.description}</p>
          <p>{product.price}</p>
          <button onClick={() => onAddToCart(product.id)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
