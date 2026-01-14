"use client";

import { Product } from "@/types/product";
import { useFavorites } from "@/hooks/useFavorites";
import Link from "next/link";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { favorites, toggle } = useFavorites();
  const isFavorite = favorites.includes(product.id);

  return (
    <div className="border rounded-lg p-4 flex flex-col">
      <Link href={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="h-40 object-contain mx-auto"
        />
        <h3 className="mt-2 font-medium line-clamp-2">{product.title}</h3>
      </Link>

      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="font-semibold">${product.price}</p>

      <button
        onClick={() => toggle(product.id)}
        className="mt-auto text-sm text-blue-600"
      >
        {isFavorite ? "★ Remove Favorite" : "☆ Add Favorite"}
      </button>
    </div>
  );
}
