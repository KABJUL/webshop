
"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";

const formatPrice = (price) =>
  new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
  }).format(price);

export default function CartPage() {
  const { cart, removeFromCart, clearCart, cartTotal } = useCart();

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-5 py-10">
      <header className="mb-8 border-b border-gray-200 pb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
          TourDePuzzle
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>
        <p className="mt-3 text-gray-600">
          Review the puzzles you have selected.
        </p>
      </header>

      {cart.length === 0 ? (
        <section className="rounded-xl border border-gray-200 bg-white px-6 py-16 text-center">
          <h2 className="text-xl font-bold text-gray-900">
            Your cart is empty
          </h2>
          <p className="mt-3 text-gray-600">
            You haven&apos;t added any puzzles to your cart yet.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center justify-center bg-[#f5a623] px-6 py-3 font-bold text-black transition-colors hover:bg-[#e89512]"
          >
            Continue shopping
          </Link>
        </section>
      ) : (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
          <section aria-label="Cart items" className="min-w-0">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2 className="text-xl font-bold text-gray-900">
                Your items ({cart.reduce((sum, item) => sum + item.quantity, 0)})
              </h2>
              <button
                type="button"
                onClick={clearCart}
                className="text-sm font-semibold text-gray-600 underline underline-offset-4 transition-colors hover:text-red-600"
              >
                Clear cart
              </button>
            </div>

            <div className="divide-y divide-gray-200 border-y border-gray-200">
              {cart.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center"
                >
                  <Link
                    href={`/product/${item.id}`}
                    className="flex h-28 w-28 shrink-0 items-center justify-center rounded-lg bg-gray-50 p-3"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={112}
                      height={112}
                      className="h-full w-full object-contain"
                    />
                  </Link>

                  <div className="flex min-w-0 flex-1 flex-col gap-2">
                    <Link
                      href={`/product/${item.id}`}
                      className="font-semibold text-gray-900 hover:text-amber-600"
                    >
                      {item.name}
                    </Link>

                    <p className="text-sm text-gray-600">
                      Unit price: {formatPrice(item.price)}
                    </p>

                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity}
                    </p>

                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      aria-label={`Remove ${item.name} from cart`}
                      className="mt-1 w-fit text-sm font-semibold text-red-600 underline underline-offset-4 hover:text-red-800"
                    >
                      Remove item
                    </button>
                  </div>

                  <p className="text-lg font-bold text-gray-900 sm:text-right">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </article>
              ))}
            </div>

            <Link
              href="/"
              className="mt-6 inline-flex text-sm font-semibold text-gray-700 underline underline-offset-4 hover:text-amber-600"
            >
              ← Continue shopping
            </Link>
          </section>

          <aside className="h-fit rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="text-xl font-bold text-gray-900">
              Order summary
            </h2>

            <div className="mt-6 flex justify-between gap-4 text-gray-600">
              <span>Items</span>
              <span>
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </div>

            <div className="mt-4 flex justify-between gap-4 border-t border-gray-200 pt-4">
              <span className="font-semibold text-gray-900">Total</span>
              <span className="text-xl font-bold text-gray-900">
                {formatPrice(cartTotal)}
              </span>
            </div>

            <p className="mt-4 text-xs leading-5 text-gray-500">
              Shipping costs and payment will be handled at checkout.
            </p>

            
<Link
  href="/checkout"
  className="mt-6 block w-full bg-[#f5a623] px-5 py-4 text-center font-bold text-black transition-colors hover:bg-[#e89512]"
>
  Proceed to checkout
</Link>

          </aside>
        </div>
      )}
    </main>
  );
}
