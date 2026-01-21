"use client"
import { useEffect } from "react"
import { useInfiniteProducts } from "@/features/products/hooks"
import ProductCard from "../ProductCard/ProductCard"
import LoadingSkeleton from "../LoadingSkeletn/LoadingSkeleton"
import { useSearchParams } from "next/navigation"
import { useInView } from "react-intersection-observer"

const ProductList = () => {
  const searchParams = useSearchParams()
  const q = searchParams.get("q") || ""
  const sort = searchParams.get("sort") || "name"

  const { ref, inView } = useInView()

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteProducts(q, sort)

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, fetchNextPage])

  useEffect(() => {
    window.scrollTo(0, 0)

    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" })
    }, 0)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingSkeleton />
  }
  if (isError) {
    throw new Error("Failed to load products")
  }

  const products = data?.pages.flatMap((page) => page.products) || []

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <h2 className="text-2xl font-semibold tracking-tight">
          No products found
        </h2>
        <p className="mt-2 text-muted-foreground">
          {q
            ? `We couldn't find anything matching "${q}".`
            : "There are currently no products available in this category."}
        </p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div ref={ref} className="mt-10 flex justify-center py-4">
        {isFetchingNextPage ? (
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
        ) : hasNextPage ? (
          <p className="text-sm text-muted-foreground">Scroll for more</p>
        ) : (
          <p className="text-sm text-muted-foreground">
            You've reached the end.
          </p>
        )}
      </div>
    </div>
  )
}

export default ProductList
