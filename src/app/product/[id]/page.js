/*export default async function Page({ params }) {
  const { id } = await params;

  const products = [
    { id: 1, name: "Clementoni Panorama Paris 1000 pieces", price: 19.99 },
    { id: 2, name: "Clementoni Panorama Big Ben 500 pieces", price: 9.99 },
    { id: 3, name: "Clementoni Panorama Manhattan 1000 pieces", price: 19.99 },
  ];

  const product = products.find((p) => p.id === Number(id));

  return (
    <main style={{ padding: 20 }}>
      <h1>{product.name}</h1>
      <p>{product.price} EUR</p>

      <button data-testid={`add-${product.id}`}>Add to cart</button>
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

export default async function Page({ params }) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <main className="mx-auto max-w-7xl px-5 py-10">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link href="/" className="mt-4 inline-block underline">
          Back to shop
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-10">
      <Link
        href="/"
        className="mb-8 inline-block text-sm text-gray-600 hover:text-amber-600"
      >
        ← Back to shop
      </Link>

      <article className="grid gap-8 rounded-xl border border-gray-200 bg-white p-5 sm:p-8 md:grid-cols-2">
        <div className="flex aspect-square items-center justify-center rounded-lg bg-gray-50 p-5">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className="h-full w-full object-contain"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
            TourDePuzzle
          </p>

          <h1 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
            {product.name}
          </h1>

          <p className="my-6 text-3xl font-bold text-gray-900">
            {product.price.toFixed(2)} EUR
          </p>

          <p className="mb-6 text-sm text-gray-600">
            A great puzzle for your next relaxing evening.
          </p>

          <AddToCartButton product={product} />
        </div>
      </article>
    </main>
  );
}
