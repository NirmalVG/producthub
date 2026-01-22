import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchProducts } from "./api"

export const useInfiniteProducts = (search: string, sort: string) => {
  return useInfiniteQuery({
    queryKey: ["products", "infinite", search, sort],
    queryFn: ({ pageParam = 0 }) => fetchProducts({ search, sort, pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const currentTotalLoaded = lastPage.skip + lastPage.products.length

      return currentTotalLoaded < lastPage.total
        ? currentTotalLoaded
        : undefined
    },
    staleTime: 1000 * 60 * 5,
  })
}
