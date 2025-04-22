"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

// Mock data - in a real app, this would come from your database
const products = [
  {
    id: "1",
    name: "Carrara White Marble",
    price: 129.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "italian-marble",
    slug: "carrara-white-marble",
  },
  {
    id: "2",
    name: "Black Galaxy Granite",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "granite",
    slug: "black-galaxy-granite",
  },
  {
    id: "3",
    name: "Honey Onyx",
    price: 199.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "onyx",
    slug: "honey-onyx",
  },
  {
    id: "4",
    name: "Calacatta Gold Marble",
    price: 249.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "italian-marble",
    slug: "calacatta-gold-marble",
  },
  {
    id: "5",
    name: "Emperador Dark Marble",
    price: 149.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "italian-marble",
    slug: "emperador-dark-marble",
  },
  {
    id: "6",
    name: "Kashmir White Granite",
    price: 99.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "granite",
    slug: "kashmir-white-granite",
  },
]

interface RelatedProductsProps {
  currentProductId?: string
  category?: string
}

export default function RelatedProducts({ currentProductId, category }: RelatedProductsProps) {
  const { toast } = useToast()
  const [wishlist, setWishlist] = useState<string[]>([])

  // Filter out current product and filter by category if provided
  const filteredProducts = products
    .filter((product) => !currentProductId || product.id !== currentProductId)
    .filter((product) => !category || product.category === category)
    .slice(0, 4)

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))

    toast({
      title: wishlist.includes(productId) ? "Removed from wishlist" : "Added to wishlist",
      duration: 2000,
    })
  }

  const addToCart = (productId: string, name: string) => {
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart`,
      duration: 2000,
    })
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group relative">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
              <Link href={`/products/${product.slug}`}>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <div className="absolute top-3 right-3 z-10">
                <Button
                  variant="outline"
                  size="icon"
                  className={cn(
                    "rounded-full bg-white h-8 w-8",
                    wishlist.includes(product.id) ? "text-red-500" : "text-gray-500",
                  )}
                  onClick={() => toggleWishlist(product.id)}
                >
                  <Heart className={cn("h-4 w-4", wishlist.includes(product.id) ? "fill-current" : "")} />
                  <span className="sr-only">Add to wishlist</span>
                </Button>
              </div>
            </div>
            <div className="mt-4 flex flex-col">
              <Link href={`/products/${product.slug}`} className="text-sm font-medium">
                {product.name}
              </Link>
              <div className="flex items-center justify-between mt-2">
                <p className="text-sm font-medium">${product.price.toFixed(2)} per sq ft</p>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() => addToCart(product.id, product.name)}
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span className="sr-only">Add to cart</span>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

