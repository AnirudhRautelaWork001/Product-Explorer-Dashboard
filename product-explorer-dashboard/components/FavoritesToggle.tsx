"use client";

interface Props {
  enabled: boolean;
  onToggle: () => void;
}

export default function FavoritesToggle({ enabled, onToggle }: Props) {
  return (
    <button onClick={onToggle} className="border px-3 py-1 rounded">
      {enabled ? "Show All" : "Show Favorites"}
    </button>
  );
}
