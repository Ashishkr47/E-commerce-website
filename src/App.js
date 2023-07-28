// App.js

import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import Cart from './Cart';

const products = [
  {
    id: 1,
    name: 'TV',
    description: 'High-definition smart TV with built-in streaming services.',
    price: '$599',
    image: '/images/tv.png',
  },
  {
    id: 2,
    name: 'Air Conditioner',
    description: 'Energy-efficient AC with remote control and sleep mode.',
    price: '$399',
    image: '/images/ac.png',
  },
  {
    id: 3,
    name: 'Refrigerator',
    description: 'Large capacity fridge with multiple compartments.',
    price: '$799',
    image: '/images/fridge.png',
  },
  {
    id: 4,
    name: 'Laptop',
    description: 'Powerful laptop for productivity and gaming.',
    price: '$999',
    image: '/images/lap.jpg',
  },
  {
    id: 5,
    name: 'Smartphone',
    description: 'High-performance smartphone with advanced features.',
    price: '$699',
    image: '/images/phone.jpg',
  },
  // ... Product data ...
];

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);
    if (productToAdd) {
      const existingCartItem = cartItems.find((item) => item.id === productId);

      if (existingCartItem) {
        // If the product is already in the cart, update its quantity
        setCartItems((prevCartItems) =>
          prevCartItems.map((item) =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
      } else {
        // If the product is not in the cart, add it with quantity 1
        setCartItems((prevCartItems) => [
          ...prevCartItems,
          { ...productToAdd, quantity: 1, image: productToAdd.image },
        ]);
      }
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== productId));
  };


  return (
    <div>
      <header className="header">
        <div className="center">
          <h1 className="title">E-commerce</h1>
        </div>
        <div className="right-section">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button type="button">Search</button>
          </div>
          <div className="login-section">
            {/* Add your sign-in options here */}
            {/* For example: Sign in with Google, Facebook, or Email */}
          </div>
        </div>
      </header>
      <main>
        <ProductList products={products} onAddToCart={handleAddToCart} />
        <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} /> {/* Pass the handleRemoveFromCart function */}
      </main>
    </div>
  );
};

export default App;
