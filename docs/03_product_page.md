# 03 - Product Page (Dynamic Routing Implementation)

## Overview

In this step, I implemented the product detail page for the TourDePuzzle webshop using Next.js App Router dynamic routing.

The goal was to create a scalable product detail structure that loads product information based on the URL parameter (`/product/[id]`) and prepares the project for future QA automation with Playwright.

---

## Implemented Features

- Created dynamic route using App Router: `src/app/product/[id]/page.js`
- Implemented URL-based product loading (`/product/1`, `/product/2`, etc.)
- Extracted `id` parameter from route
- Displayed product details based on selected ID
- Added basic UI structure for product page
- Implemented "Add to cart" button per product

---

## Route Structure

src/app/product/[id]/page.js

This file represents a **dynamic route segment** in Next.js App Router.

- `[id]` represents a dynamic URL parameter
- Example routes:
  - `/product/1`
  - `/product/2`
  - `/product/3`

---

## Product Data Handling

For this initial implementation, product data is stored as a static array:

const products = [
{ id: 1, name: "Rubik Cube", price: 19.99 },
{ id: 2, name: "Wooden Puzzle", price: 29.99 },
{ id: 3, name: "Jigsaw 1000 pcs", price: 14.99 },
];

Product selection is handled by matching the route parameter:

## const product = products.find(p => p.id === Number(id));

## Technical Notes (Important Learning)

During implementation, an important behavior of newer Next.js App Router versions was discovered:

Route parameters (params) may behave as async values
In some cases, params must be resolved using await

Final working implementation:

export default async function Page({ params }) {
const { id } = await params;

const product = products.find(p => p.id === Number(id));

return (

<main>
<h1>{product.name}</h1>
<p>{product.price} EUR</p>
</main>
);
}

---

## Testing Considerations

This page was created so it will be easy to test later with automation tools (like Playwright).

- The product page can be opened using a URL like `/product/1`
- Each product has its own ID, so it is easy to check if the correct product is shown
- The page structure is simple, so it is easier to test
- `data-testid` attributes can be added later to help automated tests find elements

---

## QA Value

This feature is useful for testing because:

- We can check if different product pages work (for example `/product/1`, `/product/2`)
- We can verify that the correct product name and price are shown
- We can test navigation from the product list page to the product detail page
- Later we can also test the cart feature using this page

---

## Next Steps

- Implement global cart state management
- Add "Add to cart" functionality with shared state
- Create cart page (/cart)
