# 08 — Checkout Page

## Overview

The checkout page allows customers to enter their contact information and shipping address before proceeding with an order.

The checkout flow is connected to the shopping cart and is designed for guest checkout. Customers do not need to create an account or log in.

## Route

- `/checkout`

## Components

### `src/app/checkout/page.js`

The checkout page is responsible for:
- Checking whether the shopping cart contains products.
- Displaying an empty-cart message when there are no items.
- Rendering the checkout form and order summary.
- Calculating and displaying the current cart subtotal.
- Displaying the shipping cost as yet to be determined.
- Handling form submission and displaying a validation confirmation message.
- Providing navigation back to the cart.

### `src/components/CheckoutForm.js`

The checkout form collects the customer's information.

**Contact information**
- Email address
- Phone number

**Shipping address**
- First name
- Last name
- Postal code
- City
- Street and house number
- Optional apartment or additional address details
- Country (fixed to Hungary)

## Form Validation

The form uses built-in HTML validation, including:
- Required fields
- Email format validation
- Phone number pattern validation
- Four-digit postal code validation

The browser validates the form before its submit handler is called.

## Order Summary

The order summary displays:
- Product names
- Quantities
- Individual line totals
- Total item count
- Cart subtotal
- Shipping cost status

Prices are displayed in EUR.

The shipping cost is not included in the subtotal because the shipping fee has not yet been determined.

## Current Limitations

The checkout is currently a frontend-only implementation.

- No order is saved or submitted.
- No database is connected.
- No payment provider is integrated.
- No customer account or authentication is required.
- Form submission only displays a confirmation message.
- Shipping costs have not yet been implemented.

The current confirmation message indicates that the form was accepted by the browser; it does not mean that an order has been placed.

## Planned Improvements

1. Create an order object from the submitted customer details and cart contents.
2. Save a demo order in browser `localStorage`.
3. Create an `/order-confirmation` page.
4. Generate and display an order reference.
5. Clear the cart after a successful demo order submission.
6. Determine the shipping fee.
7. Consider backend order storage and payment integration in a future stage.

## Testing Checklist

- [ ] The checkout page opens from the shopping cart.
- [ ] An empty cart displays the appropriate message.
- [ ] All required form fields are validated.
- [ ] Invalid email addresses are rejected.
- [ ] Postal codes must contain four digits.
- [ ] The order summary reflects the current cart contents.
- [ ] The subtotal is displayed correctly.
- [ ] The form displays its current submission message.
- [ ] The customer can navigate back to the cart.