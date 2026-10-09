
"use client";

import { useState } from "react";
import { useCart } from "@/components/CartProvider";

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    addToCart(product);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  }

  return (
    <button
      type="button"
      data-testid="add-to-cart-button"
      onClick={handleAddToCart}
      className="flex w-full items-center justify-center gap-3
        bg-[#f5a623] px-6 py-4
        text-base font-bold uppercase tracking-wide text-black
        transition-colors duration-200
        hover:bg-[#e89512]
        active:scale-[0.99]
        focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-black"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>

      <span>
        {added ? "Added to cart ✓" : "Add to the cart"}
      </span>
    </button>
  );
}
