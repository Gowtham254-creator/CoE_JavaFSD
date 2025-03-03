import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const { state, dispatch } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', productId });
    alert('Removed from cart successfully!');
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {state.cart.map((product) => (
          <li key={product.id}>
            <span>{product.name}</span>
            <span>${product.price}</span>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleRemoveFromCart(product.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p>Total: ${state.total}</p>
    </div>
  );
};

export default CartPage;


