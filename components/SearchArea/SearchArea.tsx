"use client"
import { useEffect, useState } from "react"
import { SearchIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useRouter, useSearchParams } from "next/navigation"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const SearchArea = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const currentSearch = searchParams.get("q") || ""
  const currentSort = searchParams.get("sort") || "name"

  const [inputValue, setInputValue] = useState(currentSearch)

  useEffect(() => {
    setInputValue(currentSearch)
  }, [currentSearch])

  useEffect(() => {
    if (inputValue === currentSearch) return

    const timeout = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString())
      if (inputValue) params.set("q", inputValue)
      else params.delete("q")
      router.push(`?${params.toString()}`, { scroll: false })
    }, 500)

    return () => clearTimeout(timeout)
  }, [inputValue, currentSearch, router, searchParams])

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("sort", value)
    router.push(`?${params.toString()}`, { scroll: false })
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Products
        </h1>

        <div className="flex flex-col gap-4 md:flex-row md:items-end">
          <div className="relative flex-1">
            <label
              htmlFor="search"
              className="mb-2 block text-sm font-medium text-muted-foreground"
            >
              Search
            </label>
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="search"
                type="text"
                placeholder="Search products..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full pl-10"
              />
            </div>
          </div>

          <div className="w-full md:w-64">
            <label
              htmlFor="sort"
              className="mb-2 block text-sm font-medium text-muted-foreground"
            >
              Sort by
            </label>
            <Select value={currentSort} onValueChange={handleSortChange}>
              <SelectTrigger
                id="sort"
                className="w-full bg-background text-foreground"
              >
                <SelectValue />
              </SelectTrigger>

              <SelectContent className="bg-background border border-border shadow-md">
                <SelectItem value="name">Name (A-Z)</SelectItem>
                <SelectItem value="price-asc">Price (Low to High)</SelectItem>
                <SelectItem value="price-desc">Price (High to Low)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchArea
