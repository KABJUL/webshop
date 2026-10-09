"use client";

import { createContext, useContext, useReducer } from "react";

const CartContext = createContext(null);

// This function handles all cart state changes.
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingProduct = state.find(
        (item) => item.id === action.product.id
      );

      if (existingProduct) {
        return state.map((item) =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...state, { ...action.product, quantity: 1 }];
    }

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.id);

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  function addToCart(product) {
    dispatch({
      type: "ADD_TO_CART",
      product,
    });
  }

  function removeFromCart(id) {
    dispatch({
      type: "REMOVE_FROM_CART",
      id,
    });
  }

  function clearCart() {
    dispatch({ type: "CLEAR_CART" });
  }

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
