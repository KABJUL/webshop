/*import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Clementoni Panorama Paris 1000 pieces",
      price: 19.99,
      image: "/images/placeholder.jpg",
    },
    {
      id: 2,
      name: "Clementoni Panorama Big Ben 500 pieces",
      price: 9.99,
      image: "/images/placeholder.jpg",
    },
    {
      id: 3,
      name: "Clementoni Panorama Manhattan 1000 pieces",
      price: 19.99,
      image: "/images/placeholder.jpg",
    },
  ];
  return (
    <main style={{ padding: 20 }}>
      <h1> TourDePuzzle WebShop</h1>

      <div style={{ marginTop: 20, display: "grid", gap: 15 }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: 15,
              borderRadius: 8,
            }}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
            />

            <Link href={`/product/${product.id}`}>
              <h2 style={{ cursor: "pointer", color: "blue" }}>
                {product.name}
              </h2>
            </Link>

            <p>{product.price} EUR</p>

            <button data-testid={`add-${product.id}`}>Add to cart</button>
          </div>
        ))}
      </div>
    </main>
  );
}
*/

import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";

const products = [
  {
    id: 1,
    name: "Clementoni Panorama Paris 1000 pieces",
    price: 19.99,
    image: "/images/placeholder.jpg",
  },
  {
    id: 2,
    name: "Clementoni Panorama Big Ben 500 pieces",
    price: 9.99,
    image: "/images/placeholder.jpg",
  },
  {
    id: 3,
    name: "Clementoni Panorama Manhattan 1000 pieces",
    price: 19.99,
    image: "/images/placeholder.jpg",
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-10">
      <header className="mb-10 border-b border-gray-200 pb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
          TourDePuzzle
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Puzzle WebShop
        </h1>
        <p className="mt-3 text-gray-600">
          Discover your next puzzle adventure.
        </p>
      </header>

      <section>
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-xl font-bold text-gray-900">
            Our puzzles
          </h2>
          <span className="text-sm text-gray-500">
            {products.length} products
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-lg"
            >
              <Link
                href={`/product/${product.id}`}
                className="flex aspect-square items-center justify-center overflow-hidden bg-gray-50 p-5"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </Link>

              <div className="flex flex-1 flex-col p-5">
                <Link
                  href={`/product/${product.id}`}
                  className="font-semibold leading-6 text-gray-900 hover:text-amber-600"
                >
                  {product.name}
                </Link>

                <p className="mb-5 mt-3 text-xl font-bold text-gray-900">
                  {product.price.toFixed(2)} EUR
                </p>

                <div className="mt-auto">
                  <AddToCartButton product={product} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
