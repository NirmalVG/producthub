# Product Hub - Frontend Project

A modern, high-performance Product Listing Page built with **Next.js 16**, **TypeScript**, and **TanStack Query**. This project demonstrates advanced frontend patterns including infinite scrolling, debounced searching, and URL-driven state management.

## 🚀 Live Demo

[Insert your Vercel/Deployment Link Here]

---

## ✨ Features

- **Infinite Scroll Pagination**: Seamlessly loads more products as the user scrolls using TanStack `useInfiniteQuery` and `Intersection Observer`.
- **Real-time Search with Debounce**: Optimized search functionality that prevents unnecessary API calls by waiting for user input to pause.
- **Dynamic Sorting**: Effortlessly sort products by **Name**, **Price (Low to High)**, and **Price (High to Low)**.
- **URL-Driven State**: All search and sort parameters are synced with the URL, allowing for shareable links and functional browser history.
- **Robust Data Fetching**: Powered by TanStack Query for caching, background refetching, and efficient state management.
- **Fully Responsive UI**: Built with Tailwind CSS and Shadcn/UI for a beautiful experience on mobile, tablet, and desktop.
- **Type Safety**: 100% TypeScript for reliable code and excellent developer experience.

---

## 🛠️ Tech Stack

| Tool                  | Purpose                          |
| :-------------------- | :------------------------------- |
| **Next.js 16**        | Framework (App Router)           |
| **TanStack Query v5** | State Management & Data Fetching |
| **TypeScript**        | Static Typing                    |
| **Tailwind CSS**      | Styling                          |
| **Shadcn/UI**         | UI Components                    |
| **Lucide React**      | Icons                            |
| **DummyJSON**         | Backend API                      |

---

## 📂 Project Structure

```plaintext
src/
├── app/                # Next.js App Router (Pages and Layouts)
├── components/         # Reusable UI components (Buttons, Cards, etc.)
├── features/           # Feature-based logic (Modular approach)
│   └── products/       # Product API calls, custom hooks, and types
├── providers/          # Context providers (Tanstack/Theme Providers)
└── lib/                # Shared utility functions and configurations
```

## ⚙️ Getting Started

### Prerequisites

- **Node.js**: 18.x or later
- **Package Manager**: npm, yarn, or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/product-hub.git](https://github.com/your-username/product-hub.git)
   cd product-hub
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Open the project:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## 🧠 Core Logic Highlights

### Debounced Search

We implemented a custom `useEffect` logic to manage the search input. This ensures that the API is only called **500ms** after the user stops typing, significantly reducing server load and improving performance.

### Infinite Scroll

Using `useInView` from `react-intersection-observer`, we detect when the user reaches the bottom of the page and trigger `fetchNextPage` from TanStack Query's `useInfiniteQuery`. This creates a seamless "infinite" browsing experience without manual pagination buttons.

### URL-Sync

By utilizing `useSearchParams` and `useRouter`, the application state is persisted in the URL. This means users can refresh the page or share a specific search/sort result via a link without losing their place.

---

## 📝 Challenges & Solutions

- **Challenge**: Infinite scroll resetting on refresh.
  - **Solution**: Implemented a scroll-to-top `useEffect` and ensured `initialPageParam` was correctly handled by TanStack Query.
- **Challenge**: Search input lag.
  - **Solution**: Integrated a debounce timer to decouple the UI input state from the API fetching state.
