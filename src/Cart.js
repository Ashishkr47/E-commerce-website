import React from 'react';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <strong>{item.name}</strong> - {item.price} (Quantity: {item.quantity})
              <br />
              <img src={item.image} alt={item.name} style={{ maxWidth: '100px', maxHeight: '100px' }} />
              <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
