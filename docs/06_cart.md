# 06 – Shopping Cart

## Overview

The shopping cart feature allows users to review the products they have added to their cart. It is integrated with the existing `CartProvider` and provides a dedicated cart page at `/cart`.

The cart functionality is shared across the application, so products added from the homepage or a product detail page are available on the cart page.

## Implemented Features

- Display all products added to the shopping cart
- Show product images, names, unit prices, and quantities
- Calculate the subtotal for each product based on its quantity
- Display the total number of items and the total cart price
- Remove individual products from the cart
- Clear the entire cart with one action
- Display an empty-cart message when no products are present
- Provide links to return to the webshop and continue shopping
- Display an order summary
- Include a disabled checkout button as a placeholder for future checkout functionality

## Route Structure

The cart page is implemented using the Next.js App Router.

- **Route:** `/cart`
- **File:** `src/app/cart/page.js`

The page is a Client Component because it uses the `useCart` hook to access and update the shared cart state.

## Shared Header and Cart Navigation

A reusable header component is available throughout the application.

- **Component:** `src/components/Header.js`
- **Integration:** `src/app/layout.js`

The header contains a link to the homepage and a shopping cart link.

The cart link displays the current item count using the `cartCount` value provided by `CartProvider`. The counter updates automatically when products are added or removed.

The header is rendered inside `CartProvider`, allowing it to access the shared cart state.

## Cart State Management

The cart page uses the existing `CartProvider` and its `useCart` hook.

The following values and functions are used:

- `cart` – the list of products currently in the cart
- `cartCount` – the total number of items, including quantities
- `cartTotal` – the total price of all cart items
- `removeFromCart(id)` – removes a product by its ID
- `clearCart()` – removes all products from the cart

The cart state is managed centrally, so changes are reflected in both the cart page and the shared header.

## Price Calculation

Each cart item's subtotal is calculated by multiplying its unit price by its quantity.

The overall cart total is calculated by the `CartProvider` and displayed in the order summary.

Prices are formatted as EUR currency values for consistent presentation.

## User Interface and Responsiveness

The cart page uses Tailwind CSS utility classes and follows the visual style of the webshop.

- Responsive layout for mobile and desktop screens
- Product list with images and pricing information
- Separate order summary panel on larger screens
- Empty-cart state with a link back to the homepage
- Interactive remove-item and clear-cart controls
- Consistent styling for navigation and shopping actions

## Checkout Status

Checkout functionality has not yet been implemented.

The checkout button is intentionally disabled and serves as a placeholder for a future order and payment process.

Shipping costs, payment processing, and order submission are not currently handled by the cart page.

## Data Persistence

The cart state is currently stored in React memory through `useReducer` inside `CartProvider`.

This means the cart is shared across pages while the application remains mounted, but the current implementation does not persist cart contents after a page refresh or application remount.

Persistent storage or backend-based cart management may be added in a future iteration.

## Testing Considerations

The following scenarios should be tested:

- Add a product from the homepage and verify that it appears in the cart
- Add the same product multiple times and verify that its quantity increases
- Open the cart through the header link
- Verify the header item counter
- Check individual item subtotals and the overall cart total
- Remove a single product and verify that the totals update
- Clear the cart and verify that the empty-cart state appears
- Navigate back to the homepage using the shopping links
- Verify the layout on mobile and desktop screen sizes
- Refresh the page and confirm the current non-persistent cart behavior

## QA Value

The shopping cart provides an important foundation for testing shared React state, user interactions, price calculations, and navigation.

It also creates opportunities for future end-to-end tests covering the product selection and cart management flow.

## Next Steps

- Persist cart contents across page refreshes
- Implement quantity controls directly on the cart page
- Add checkout and order submission functionality
- Introduce shipping cost calculations
- Add automated tests for cart interactions and price calculations
