import React, { createContext, useReducer } from 'react';

const initialState = {
  cart: [],
  total: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.product],
        total: state.total + action.product.price,
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.productId),
        total: state.total - action.productPrice,
      };
    default:
      return state;
  }
};


const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };

