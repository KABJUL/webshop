# 04 - Cart Provider (Global Cart State Management)

## Overview

In this step, I implemented global cart state management for the TourDePuzzle webshop using React Context API and the `useReducer` hook.

The goal was to create a shared cart state that can be accessed from different components and pages without passing cart data through multiple component levels.

The Cart Provider manages adding products to the cart, removing products, clearing the cart, tracking quantities, and calculating the total price.

---

## Implemented Features

- Created the cart context and provider in `src/components/CartProvider.js`
- Implemented global cart state management using React Context API
- Used `useReducer` to handle cart state changes
- Implemented adding products to the cart
- Implemented quantity updates when the same product is added multiple times
- Implemented removing individual products from the cart
- Implemented clearing the entire cart
- Calculated the total number of items in the cart
- Calculated the total cart price
- Created a custom `useCart` hook for accessing cart functionality
- Integrated the provider into the root layout

---

## File Structure

`src/components/CartProvider.js`

This file contains the cart context, reducer, provider component, and custom hook.

`src/app/layout.js`

The root layout wraps the application content with the `CartProvider`, making the cart state available throughout the application.

Example:

```jsx
import { CartProvider } from "@/components/CartProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
```

The provider must wrap components that use the `useCart` hook.

---

## State Management

The cart state is stored as an array of product objects.

Each cart item contains the original product properties and an additional `quantity` property.

Example cart state:

```javascript
[
  {
    id: 1,
    name: "Clementoni Panorama Paris 1000 pieces",
    price: 19.99,
    quantity: 2
  }
]
```

The initial cart state is an empty array:

```javascript
const [cart, dispatch] = useReducer(cartReducer, []);
```

---

## Cart Reducer

The `cartReducer` function handles the available cart actions.

### ADD_TO_CART

- Checks whether the product already exists in the cart.
- If it exists, increases its quantity by one.
- If it does not exist, adds the product with a quantity of one.

### REMOVE_FROM_CART

Removes the product matching the provided ID from the cart.

### CLEAR_CART

Removes all products from the cart and resets the cart state to an empty array.

The reducer returns a new state instead of directly modifying the existing state.

---

## Custom Hook

The `useCart` hook provides access to the cart context.

Example:

```javascript
const {
  cart,
  addToCart,
  removeFromCart,
  clearCart,
  cartCount,
  cartTotal,
} = useCart();
```

Available values and functions:

- `cart` – array containing cart items
- `addToCart(product)` – adds a product to the cart
- `removeFromCart(id)` – removes a product by ID
- `clearCart()` – clears the cart
- `cartCount` – total number of items, including quantities
- `cartTotal` – total price of all cart items

The hook throws an error if it is used outside the `CartProvider`. This helps identify incorrect provider configuration during development.

---

## Cart Calculations

The total item count is calculated using the quantity of each cart item:

```javascript
const cartCount = cart.reduce(
  (total, item) => total + item.quantity,
  0
);
```

The total cart price is calculated by multiplying each product's price by its quantity:

```javascript
const cartTotal = cart.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);
```

These values are derived from the current cart state and update when the state changes.

---

## Technical Notes (Important Learning)

### React Context API

React Context allows multiple components to access shared state without passing props through every intermediate component.

### useReducer

The `useReducer` hook centralizes state transitions in one reducer function. This makes cart operations easier to maintain and test.

### Client Component Requirement

The `CartProvider.js` file starts with:

```javascript
"use client";
```

This is necessary because the provider uses React hooks and client-side state management.

### State Persistence

The current implementation stores cart data only in React state.

Therefore, the cart is reset when the application is refreshed or the provider is remounted. Persistent storage, such as `localStorage` or a backend database, can be implemented later.

---

## Testing Considerations

The cart provider prepares the application for automated testing with Playwright.

Potential test scenarios:

- Add a product to the cart.
- Add the same product twice and verify that its quantity becomes two.
- Add different products and verify that both appear in the cart state.
- Remove a product by its ID.
- Clear the cart and verify that it is empty.
- Verify that `cartCount` reflects the total quantity.
- Verify that `cartTotal` reflects the combined product prices.

These scenarios can be tested through the webshop UI once the cart display and controls are implemented.

---

## QA Value

This feature provides a central location for cart logic and makes it possible to test cart behavior consistently across multiple pages.

It also supports future integration of:

- A cart item counter in the header
- A dedicated cart page (`/cart`)
- Quantity controls
- Cart total and checkout calculations
- Persistent cart storage

---

## Next Steps

- Implement the cart item counter in the shared layout
- Connect the Add to Cart button to the cart provider
- Create the cart page (`/cart`)
- Add quantity controls and remove buttons
- Add automated Playwright tests for cart operations
- Consider persistent cart storage
