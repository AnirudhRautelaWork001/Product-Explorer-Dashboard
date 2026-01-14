import { getFavorites, toggleFavorite } from "@/lib/favorites";
import { useEffect, useState } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const toggle = (id: number) => {
    setFavorites(toggleFavorite(id));
  };

  return { favorites, toggle };
}
