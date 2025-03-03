import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-bold">Cart</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id} className="py-2">
            <span className="text-lg font-bold">{product.name}</span>
            <span className="text-gray-600"> x{product.quantity}</span>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => removeFromCart(product)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p className="text-lg font-bold">Total: ${cart.reduce((acc, product) => acc + product.price * product.quantity, 0)}</p>
    </div>
  );
}
export default Cart;
