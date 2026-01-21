import { Button } from "@/components/ui/button"
import { Card, CardFooter, CardContent } from "@/components/ui/card"
import { Product } from "@/types/product"
import { ShoppingCart, Star } from "lucide-react"
import Image from "next/image"
import { Badge } from "../ui/badge"

const ProductCard = ({ product }: { product: Product }) => {
  const stockStatus = product.stock > 0 ? "In Stock" : "Out of Stock"
  const stockColor =
    product.stock > 0
      ? "bg-green-100 text-green-800"
      : "bg-red-100 text-red-800"

  return (
    <Card className="flex flex-col overflow-hidden transition-shadow duration-200 hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.thumbnail || "/placeholder.svg"}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {product.stock === 0 && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <span className="text-lg font-semibold text-white">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      <CardContent className="flex flex-1 flex-col gap-2">
        <h3 className="line-clamp-2 text-sm font-semibold leading-tight text-foreground">
          {product.title}
        </h3>

        <p className="line-clamp-2 text-xs text-muted-foreground">
          {product.description}
        </p>

        <div className="flex items-center ">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.round(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-xs font-medium text-muted-foreground">
            {product.rating.toFixed(1)}
          </span>
        </div>

        <Badge variant="secondary" className={`w-fit text-xs ${stockColor}`}>
          {stockStatus}
        </Badge>
      </CardContent>

      <CardFooter className="flex flex-col gap-2 border-t">
        <div className="w-full">
          <p className="text-2xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </p>
        </div>

        <Button
          className="w-full gap-2 cursor-pointer"
          disabled={product.stock === 0}
          onClick={() => {
            console.log(`Added ${product.title} to cart`)
          }}
        >
          <ShoppingCart className="h-4 w-4" />
          <span>Add to Cart</span>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProductCard
