import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchProducts } from "./api"

export const useInfiniteProducts = (search: string, sort: string) => {
  return useInfiniteQuery({
    queryKey: ["products", "infinite", { search, sort }],
    queryFn: ({ pageParam }) => fetchProducts({ search, sort, pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.nextSkip < lastPage.total ? lastPage.nextSkip : undefined
    },
    staleTime: 1000 * 60 * 5,
  })
}
