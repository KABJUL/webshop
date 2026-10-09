# 05 - Add to Cart Button (Cart Integration and UI)

## Overview

In this step, I implemented a reusable Add to Cart button for the TourDePuzzle webshop using a client-side React component.

The goal was to connect the product listing and product detail pages to the global cart state managed by the `CartProvider`.

The button allows users to add a selected product to the cart and provides visual feedback after the action.

---

## Implemented Features

- Created a reusable component in `src/components/AddToCartButton.js`
- Added the `"use client"` directive because the component uses React hooks and click event handling
- Integrated the button with the custom `useCart` hook
- Connected the button to the `addToCart(product)` function
- Passed product data through component props
- Added a temporary success message after clicking the button
- Styled the button using Tailwind CSS
- Added a shopping cart icon
- Added hover and active interaction styles
- Added a `data-testid` attribute for automated testing
- Reused the same button component on the product listing and product detail pages

---

## File Structure

`src/components/AddToCartButton.js`

This component contains the button UI and its click handler.

`src/components/CartProvider.js`

Provides the shared cart state and the `addToCart` function.

`src/app/page.js`

Displays the product listing and renders an Add to Cart button for each product.

`src/app/product/[id]/page.js`

Displays the selected product and renders the same reusable Add to Cart button.

---

## Component Integration

The button receives the selected product through its `product` prop.

Example:

```jsx
<AddToCartButton product={product} />
```

The component imports the cart hook:

```javascript
import { useCart } from "@/components/CartProvider";
```

It then obtains the `addToCart` function:

```javascript
const { addToCart } = useCart();
```

This connects the button to the shared cart state without duplicating cart logic in the product pages.

---

## Button Functionality

When the user clicks the button, the following actions occur:

1. The click handler calls `addToCart(product)`.
2. The Cart Provider dispatches an `ADD_TO_CART` action.
3. The cart reducer adds the product or increases its quantity if it already exists.
4. The button displays a temporary confirmation message.
5. After approximately 1.5 seconds, the button returns to its original label.

The success message confirms that the click handler ran and the cart action was requested. It does not, by itself, verify that the cart is persisted or that a checkout operation has completed.

---

## Visual Design

The button uses Tailwind CSS utility classes to provide a consistent webshop appearance.

The current design includes:

- Full-width layout
- Orange background
- Dark, bold, uppercase text
- Shopping cart icon
- Hover color transition
- Active click feedback
- Visible keyboard focus outline
- Temporary success message after clicking

Example styling:

```jsx
className="flex w-full items-center justify-center gap-3
  bg-[#f5a623] px-6 py-4
  text-base font-bold uppercase tracking-wide text-black
  transition-colors duration-200
  hover:bg-[#e89512]
  active:scale-[0.99]
  focus-visible:outline-2 focus-visible:outline-offset-2
  focus-visible:outline-black"
```

The same component is used on both the product listing and product detail pages to maintain consistent button styling and behavior.

---

## Testability

The button includes a dedicated test identifier:

```jsx
data-testid="add-to-cart-button"
```

This allows Playwright to locate the button independently of its visible text.

Example Playwright test:

```javascript
import { test, expect } from "@playwright/test";

test("Add to Cart button displays confirmation", async ({ page }) => {
  await page.goto("/product/1");

  const addToCartButton = page.getByTestId(
    "add-to-cart-button"
  );

  await expect(addToCartButton).toBeVisible();
  await addToCartButton.click();

  await expect(addToCartButton).toContainText(
    "Added to cart"
  );
});
```

This test verifies that the button is visible, clickable, and displays the expected confirmation message.

A separate integration test should verify that the cart item count and product quantities are updated correctly.

---

## QA Value

The reusable button makes cart interaction consistent across the application.

It also supports automated testing of:

- Button visibility
- Button click behavior
- Temporary confirmation feedback
- Product-specific cart actions
- Cart state updates
- Consistency between the listing page and product detail page

Using a dedicated `data-testid` makes tests less dependent on styling or exact text labels.

---

## Technical Notes (Important Learning)

### Client Component

The file begins with:

```javascript
"use client";
```

This is required because the component uses React state and handles browser click events.

### Reusable Component Design

Keeping the button in a separate component avoids duplicating its logic and styling across pages.

### Shared Cart State

The button relies on the `CartProvider` being available higher in the React component tree, typically through `src/app/layout.js`.

### Styling and Functionality

CSS controls the appearance of the button, while the click handler and Cart Provider control its behavior. Styling alone does not add a product to the cart.

### Current Limitations

The confirmation message is temporary. The current button does not independently display the complete cart contents or guarantee persistence after a page refresh.

---

## Next Steps

- Add a cart item counter to the shared header
- Create the cart page (`/cart`)
- Display cart items, quantities, and total price
- Add remove-item and clear-cart controls
- Write Playwright tests for cart state updates
- Consider cart persistence using `localStorage` or a backend
