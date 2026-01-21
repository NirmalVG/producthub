export const fetchProducts = async ({
  search = "",
  sort = "",
  pageParam = 0,
}: {
  search?: string
  sort?: string
  pageParam?: number
}) => {
  const limit = 20
  const baseUrl = search
    ? `https://dummyjson.com/products/search?q=${search}&limit=${limit}&skip=${pageParam}`
    : `https://dummyjson.com/products?limit=${limit}&skip=${pageParam}`

  const res = await fetch(baseUrl)
  if (!res.ok) throw new Error("Failed to fetch")
  const data = await res.json()

  let products = data.products
  if (sort === "price-asc") products.sort((a: any, b: any) => a.price - b.price)
  if (sort === "price-desc")
    products.sort((a: any, b: any) => b.price - a.price)
  if (sort === "name")
    products.sort((a: any, b: any) => a.title.localeCompare(b.title))

  return {
    products,
    nextSkip: data.skip + data.limit,
    total: data.total,
  }
}
