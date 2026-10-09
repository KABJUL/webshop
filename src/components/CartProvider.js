"use client";

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const CartContext = createContext(null);
const CART_STORAGE_KEY = "tourdepuzzle-cart";

function cartReducer(state, action) {
  switch (action.type) {
    case "LOAD_CART":
      return action.cart;

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
  const [isLoaded, setIsLoaded] = useState(false);

  // Restore the cart from localStorage when the app loads.
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);

      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);

        if (Array.isArray(parsedCart)) {
          dispatch({ type: "LOAD_CART", cart: parsedCart });
        }
      }
    } catch (error) {
      console.error("Failed to load the saved cart:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save cart changes, but only after the initial load is complete.
  useEffect(() => {
    if (!isLoaded) return;

    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
      console.error("Failed to save the cart:", error);
    }
  }, [cart, isLoaded]);

  function addToCart(product) {
    dispatch({ type: "ADD_TO_CART", product });
  }

  function removeFromCart(id) {
    dispatch({ type: "REMOVE_FROM_CART", id });
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
        isLoaded,
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
