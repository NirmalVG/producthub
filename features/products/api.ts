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

  let sortBy = ""
  let order = "asc"

  if (sort === "price-asc") {
    sortBy = "price"
    order = "asc"
  }
  if (sort === "price-desc") {
    sortBy = "price"
    order = "desc"
  }
  if (sort === "name") {
    sortBy = "title"
    order = "asc"
  }

  let baseUrl = search
    ? `https://dummyjson.com/products/search?q=${search}&limit=${limit}&skip=${pageParam}`
    : `https://dummyjson.com/products?limit=${limit}&skip=${pageParam}`

  if (sortBy) {
    baseUrl += `&sortBy=${sortBy}&order=${order}`
  }

  const res = await fetch(baseUrl)
  if (!res.ok) throw new Error("Failed to fetch")
  const data = await res.json()

  return {
    products: data.products,
    skip: data.skip,
    total: data.total,
    limit: data.limit,
  }
}
