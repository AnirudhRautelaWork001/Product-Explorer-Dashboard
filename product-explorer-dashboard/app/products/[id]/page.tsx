import { fetchProduct } from "@/lib/api";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params; // ✅ REQUIRED in Next 15+

  try {
    const product = await fetchProduct(id);

    return (
      <div className="max-w-xl mx-auto">
        <img src={product.image} alt={product.title} className="h-60 mx-auto" />

        <h1 className="text-xl font-bold mt-4">{product.title}</h1>
        <p className="text-gray-500">{product.category}</p>
        <p className="mt-2">{product.description}</p>
        <p className="font-semibold mt-2">${product.price}</p>
      </div>
    );
  } catch {
    return (
      <div className="text-center mt-20">
        <h1 className="text-xl font-bold">Product not found</h1>
        <p className="text-gray-500">Please check the URL.</p>
      </div>
    );
  }
}
