"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";
import CheckoutForm from "@/components/CheckoutForm";

const formatPrice = (price) =>
  new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
  }).format(price);

export default function CheckoutPage() {
  const { cart, cartCount, cartTotal } = useCart();
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setMessage(
      "Your details are valid. Order submission will be implemented in the next step."
    );
  }

  if (cart.length === 0) {
    return (
      <main className="mx-auto w-full max-w-7xl flex-1 px-5 py-10">
        <h1 className="text-3xl font-bold text-gray-900">
          Checkout
        </h1>

        <section className="mt-8 rounded-xl border border-gray-200 bg-white px-6 py-16 text-center">
          <h2 className="text-xl font-bold text-gray-900">
            Your cart is empty
          </h2>

          <p className="mt-3 text-gray-600">
            Add some puzzles before proceeding to checkout.
          </p>

          <Link
            href="/"
            className="mt-6 inline-flex bg-[#f5a623] px-6 py-3 font-bold text-black transition hover:bg-[#e89512]"
          >
            Continue shopping
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-5 py-10">
      <header className="mb-8 border-b border-gray-200 pb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
          TourDePuzzle
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Checkout
        </h1>

        <p className="mt-3 text-gray-600">
          Enter your contact and shipping details to continue.
        </p>
      </header>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_320px]">
        <section>
          <CheckoutForm
            onSubmit={handleSubmit}
          />

          {message && (
            <p
              role="status"
              className="mt-4 rounded-lg bg-green-50 p-4 text-sm text-green-800"
            >
              {message}
            </p>
          )}

          <Link
            href="/cart"
            className="mt-6 inline-flex text-sm font-semibold text-gray-700 underline underline-offset-4 hover:text-amber-600"
          >
            ← Back to cart
          </Link>
        </section>

        <aside className="h-fit rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-xl font-bold text-gray-900">
            Order summary
          </h2>

          <div className="mt-6 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between gap-4 text-sm"
              >
                <div>
                  <p className="font-semibold text-gray-900">
                    {item.name}
                  </p>
                  <p className="mt-1 text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                </div>

                <p className="shrink-0 font-semibold text-gray-900">
                  {formatPrice(item.price * item.quantity)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-4 border-t border-gray-200 pt-4">
            <div className="flex justify-between gap-4 text-gray-600">
              <span>Items ({cartCount})</span>
              <span>{formatPrice(cartTotal)}</span>
            </div>

            <div className="flex justify-between gap-4 text-gray-600">
              <span>Shipping</span>
              <span>To be determined</span>
            </div>

            <div className="flex justify-between gap-4 border-t border-gray-200 pt-4">
              <span className="font-bold text-gray-900">
                Subtotal
              </span>
              <span className="text-xl font-bold text-gray-900">
                {formatPrice(cartTotal)}
              </span>
            </div>
          </div>

          <p className="mt-4 text-xs leading-5 text-gray-500">
            Shipping costs are not included. Payment and order
            submission are not yet implemented.
          </p>
        </aside>
      </div>
    </main>
  );
}
