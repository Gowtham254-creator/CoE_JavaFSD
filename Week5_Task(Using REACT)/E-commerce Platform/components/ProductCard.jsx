import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { dispatch, state } = useContext(CartContext);

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', product });
    alert('Added to cart successfully!');
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-64">
      <img src={`/${product.image}`} alt={product.name} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-4"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
