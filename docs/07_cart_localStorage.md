# 07 – Shopping Cart Persistence with localStorage

## Overview

The shopping cart has been extended with browser-based persistence using the Web Storage API (`localStorage`).

Previously, cart data was stored only in React state and was lost when the page was refreshed. With this update, the cart contents are saved in the browser and restored when the application loads again.

This implementation builds on the existing `CartProvider` and does not require an external database or additional dependencies.

## Implemented Features

- Save cart contents to `localStorage`
- Restore saved cart contents when the application starts
- Preserve product quantities across page refreshes
- Persist product additions and removals
- Persist the clear-cart operation
- Keep the shared header counter synchronized with the restored cart
- Keep cart totals consistent with the current cart state
- Handle missing or invalid stored JSON without crashing the application

## Technical Implementation

**File:** `src/components/CartProvider.js`

The persistence logic is implemented inside the existing `CartProvider` component.

### Storage Key

The cart is stored under the following key:

`tourdepuzzle-cart`

The stored value is a JSON representation of the cart array, including each product's information and quantity.

### Loading Cart Data

When `CartProvider` mounts, a `useEffect` hook attempts to read the saved cart from `localStorage`.

The stored JSON is parsed and checked to ensure that it is an array before being dispatched to the cart reducer through the `LOAD_CART` action.

If no saved cart exists, the application starts with an empty cart.

### Saving Cart Data

A second `useEffect` hook saves the cart whenever its state changes.

The cart is serialized with `JSON.stringify()` and stored using `localStorage.setItem()`.

Saving is enabled only after the initial loading process has completed.

### Loading State

The `isLoaded` state variable indicates whether the initial restoration attempt has finished.

This prevents the initial empty React state from immediately overwriting previously saved cart data.

The loading state is also exposed through the `useCart()` context value for use by other components if needed.

### Error Handling

Storage operations and JSON parsing are wrapped in `try...catch` blocks.

If reading or writing fails, the error is logged to the console rather than crashing the application.

Invalid JSON is handled without preventing the webshop from loading.

## Integration with the Application

The existing cart functionality continues to use the `useCart()` hook.

- `Header.js` displays the restored item count through `cartCount`.
- `src/app/cart/page.js` displays the restored products, quantities, and total price.
- `AddToCartButton.js` adds products through `addToCart()`.
- `removeFromCart()` and `clearCart()` update the cart and trigger persistence automatically.

No additional changes to these components are required for basic persistence.

## Testing Considerations

The following scenarios should be tested:

- Add a product and refresh the page.
- Verify that the product remains in the cart.
- Add the same product multiple times and verify that its quantity is preserved.
- Verify that the header counter matches the restored quantities.
- Remove an item and refresh the page to confirm that the removal persists.
- Clear the cart and refresh the page to confirm that it remains empty.
- Test the application when no saved cart exists.
- Test the application when the stored JSON is invalid.
- Check browser console output when storage access fails.

## Limitations

- Cart data is stored only in the current browser's storage.
- Cart contents are not synchronized across different browsers or devices.
- Clearing browser storage removes the saved cart.
- The contents of `localStorage` can be modified by the user and must not be trusted for order processing.
- Product prices and availability must be verified on the server before a real order is accepted.
- This implementation does not provide authentication, checkout, payment processing, or order persistence.

## QA Value

Browser-based persistence makes the shopping experience more reliable and allows end-to-end tests to verify cart behavior across page reloads.

It also provides a useful foundation for testing state restoration, synchronization between components, and persistence of user actions.

## Next Steps

- Add quantity increase and decrease controls to the cart page.
- Consider validating and normalizing restored cart data.
- Implement server-side price and stock validation.
- Introduce backend-based cart persistence if cross-device synchronization is required.
- Implement checkout and order processing.
