# Product Explorer Dashboard

A production-style frontend application built with **Next.js App Router**, **TypeScript**, and **Tailwind CSS**.  
The app displays products from a public API with filtering, detailed views, and a favorites feature.

---

## 🚀 Tech Stack

- **Next.js 16 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Fake Store API** – https://fakestoreapi.com

---

## ✨ Features Implemented

### Product Listing
- Fetches products from Fake Store API
- Responsive grid layout
- Displays:
  - Product image
  - Title
  - Price
  - Category
- Server-side data fetching using App Router
- Loading state using `loading.tsx`

### Product Details Page
- Dynamic routing using `/products/[id]`
- Displays:
  - Large product image
  - Title
  - Description
  - Price
  - Category
- Proper error handling for invalid product IDs

### Favorites
- Mark / unmark products as favorites
- Favorites persist using `localStorage`
- Custom reusable `useFavorites` hook

### UI & UX
- Mobile-first responsive design
- Skeleton loading states
- Clean and reusable component architecture

---

## 📁 Folder Structure

# Product Explorer Dashboard

A production-style frontend application built with **Next.js App Router**, **TypeScript**, and **Tailwind CSS**.  
The app displays products from a public API with filtering, detailed views, and a favorites feature.

---

## 🚀 Tech Stack

- **Next.js 16 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Fake Store API** – https://fakestoreapi.com

---

## ✨ Features Implemented

### Product Listing
- Fetches products from Fake Store API
- Responsive grid layout
- Displays:
  - Product image
  - Title
  - Price
  - Category
- Server-side data fetching using App Router
- Loading state using `loading.tsx`

### Product Details Page
- Dynamic routing using `/products/[id]`
- Displays:
  - Large product image
  - Title
  - Description
  - Price
  - Category
- Proper error handling for invalid product IDs

### Favorites
- Mark / unmark products as favorites
- Favorites persist using `localStorage`
- Custom reusable `useFavorites` hook

### UI & UX
- Mobile-first responsive design
- Skeleton loading states
- Clean and reusable component architecture

---

## 📁 Folder Structure

src/
├─ app/
│ ├─ page.tsx
│ ├─ layout.tsx
│ ├─ loading.tsx
│ └─ products/[id]/page.tsx
│
├─ components/
│ ├─ ProductCard.tsx
│ ├─ ProductGrid.tsx
│ ├─ SearchBar.tsx
│ ├─ CategoryFilter.tsx
│ ├─ FavoritesToggle.tsx
│ └─ LoadingSkeleton.tsx
│
├─ lib/
│ ├─ api.ts
│ └─ favorites.ts
│
├─ hooks/
│ └─ useFavorites.ts
│
└─ types/
└─ product.ts


---

## 🧠 Architecture Decisions

- **Server Components** are used for data fetching to improve performance and SEO
- **Client Components** are used only where browser APIs are required (e.g. `localStorage`)
- API responses and props are fully typed using TypeScript
- Reusable UI components with clear separation of concerns
- Loading states handled using Next.js `loading.tsx`

---

## 🛠 Setup Instructions

### Prerequisites
- Node.js ≥ 18
- Yarn

### Installation

```bash
yarn install
