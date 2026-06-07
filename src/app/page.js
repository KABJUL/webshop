import Image from "next/image";
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
