export function getFavorites(): number[] {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("favorites") || "[]");
}

export function toggleFavorite(id: number) {
  const favorites = getFavorites();
  const updated = favorites.includes(id)
    ? favorites.filter((f) => f !== id)
    : [...favorites, id];

  localStorage.setItem("favorites", JSON.stringify(updated));
  return updated;
}
