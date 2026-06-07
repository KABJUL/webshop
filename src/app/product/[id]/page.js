export default async function Page({ params }) {
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
