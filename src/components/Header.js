
"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";

export default function Header() {
  const { cartCount } = useCart();

  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-gray-900"
        >
          TourDePuzzle
        </Link>

        <Link
          href="/cart"
          aria-label={`Shopping cart, ${cartCount} items`}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 font-semibold text-gray-900 transition-colors hover:bg-gray-50"
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

          <span>Cart</span>

          <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#f5a623] px-1.5 text-xs font-bold text-black">
            {cartCount}
          </span>
        </Link>
      </nav>
    </header>
  );
}
