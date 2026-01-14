import { fetchProducts } from "@/lib/api";
import ProductGrid from "@/components/ProductGrid";

export default async function HomePage() {
  const products = await fetchProducts();

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Product Explorer</h1>
      <ProductGrid products={products} />
    </>
  );
}
