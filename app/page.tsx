import LoadingSkeleton from "@/components/LoadingSkeletn/LoadingSkeleton"
import ProductList from "@/components/ProductList/ProductList"
import { Suspense } from "react"

export default function Home() {
  return (
    <section className="container mx-auto px-4">
      <Suspense fallback={<LoadingSkeleton />}>
        <ProductList />
      </Suspense>
    </section>
  )
}
