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
    origin: "Italy",
    bestseller: true,
  },
  {
    id: "2",
    name: "Black Galaxy Granite",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "granite",
    slug: "black-galaxy-granite",
    origin: "India",
    bestseller: true,
  },
  {
    id: "3",
    name: "Honey Onyx",
    price: 199.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "onyx",
    slug: "honey-onyx",
    origin: "Turkey",
    bestseller: false,
  },
  {
    id: "4",
    name: "Calacatta Gold Marble",
    price: 249.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "italian-marble",
    slug: "calacatta-gold-marble",
    origin: "Italy",
    bestseller: true,
  },
  {
    id: "5",
    name: "Blue Pearl Granite",
    price: 119.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "granite",
    slug: "blue-pearl-granite",
    origin: "Norway",
    bestseller: false,
  },
  {
    id: "6",
    name: "Emperador Dark Marble",
    price: 159.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "italian-marble",
    slug: "emperador-dark-marble",
    origin: "Spain",
    bestseller: false,
  },
  {
    id: "7",
    name: "Crema Marfil Marble",
    price: 139.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "italian-marble",
    slug: "crema-marfil-marble",
    origin: "Spain",
    bestseller: true,
  },
  {
    id: "8",
    name: "Absolute Black Granite",
    price: 99.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "granite",
    slug: "absolute-black-granite",
    origin: "India",
    bestseller: true,
  },
  {
    id: "9",
    name: "Statuario Marble",
    price: 189.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "italian-marble",
    slug: "statuario-marble",
    origin: "Italy",
    bestseller: false,
  },
  {
    id: "10",
    name: "Tan Brown Granite",
    price: 109.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "granite",
    slug: "tan-brown-granite",
    origin: "India",
    bestseller: false,
  },
  {
    id: "11",
    name: "Green Onyx",
    price: 219.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "onyx",
    slug: "green-onyx",
    origin: "Pakistan",
    bestseller: false,
  },
  {
    id: "12",
    name: "Botticino Marble",
    price: 149.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "italian-marble",
    slug: "botticino-marble",
    origin: "Italy",
    bestseller: false,
  },
  {
    id: "13",
    name: "Ziarat White Marble",
    price: 119.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "pakistani-marble",
    slug: "ziarat-white-marble",
    origin: "Pakistan",
    bestseller: true,
  },
  {
    id: "14",
    name: "Silky Black Marble",
    price: 139.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "pakistani-marble",
    slug: "silky-black-marble",
    origin: "Pakistan",
    bestseller: false,
  },
  {
    id: "15",
    name: "Verona Marble",
    price: 129.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "pakistani-marble",
    slug: "verona-marble",
    origin: "Pakistan",
    bestseller: true,
  },
]

export default function ProductGrid() {
  const { toast } = useToast()
  const [wishlist, setWishlist] = useState<string[]>([])

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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="group relative luxury-card rounded-lg overflow-hidden bg-background">
          <div className="relative aspect-square overflow-hidden rounded-t-lg bg-gray-100">
            <Link href={`/products/${product.slug}`}>
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </Link>
            <div className="absolute top-3 right-3 z-10">
              <Button
                variant="outline"
                size="icon"
                className={cn(
                  "rounded-full bg-white h-9 w-9 shadow-md",
                  wishlist.includes(product.id) ? "text-red-500" : "text-gray-500",
                )}
                onClick={() => toggleWishlist(product.id)}
              >
                <Heart className={cn("h-5 w-5", wishlist.includes(product.id) ? "fill-current" : "")} />
                <span className="sr-only">Add to wishlist</span>
              </Button>
            </div>
            {product.bestseller && (
              <div className="absolute top-3 left-3 bg-secondary text-secondary-foreground text-xs font-bold px-2 py-1 rounded">
                BESTSELLER
              </div>
            )}
          </div>
          <div className="p-4">
            <div className="text-xs text-muted-foreground mb-1">{product.origin}</div>
            <Link
              href={`/products/${product.slug}`}
              className="text-base font-medium hover:text-secondary transition-colors"
            >
              {product.name}
            </Link>
            <div className="flex items-center justify-between mt-2">
              <p className="text-base font-semibold">
                ${product.price.toFixed(2)} <span className="text-xs font-normal text-muted-foreground">per sq ft</span>
              </p>
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 rounded-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
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
  )
}

