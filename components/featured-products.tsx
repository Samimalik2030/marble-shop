"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingCart, Star, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
    rating: 4.8,
    description: "Classic Italian marble with subtle gray veining on a white background",
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
    rating: 4.9,
    description: "Luxurious black granite with gold/copper flecks resembling stars",
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
    rating: 4.7,
    description: "Translucent onyx with warm amber tones, perfect for backlit features",
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
    rating: 5.0,
    description: "Premium Italian marble with dramatic gold veining on white background",
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
    rating: 4.6,
    description: "Elegant blue-gray granite with iridescent crystal flecks",
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
    rating: 4.7,
    description: "Rich brown marble with fine veining for a sophisticated look",
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
    rating: 4.8,
    description: "Warm beige marble with subtle veining and consistent patterning",
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
    rating: 4.9,
    description: "Deep, consistent black granite with exceptional durability",
  },
  {
    id: "9",
    name: "Ziarat White Marble",
    price: 119.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "pakistani-marble",
    slug: "ziarat-white-marble",
    origin: "Pakistan",
    bestseller: true,
    rating: 4.8,
    description: "Premium Pakistani marble with clean white background and subtle veining",
  },
  {
    id: "10",
    name: "Verona Marble",
    price: 129.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "pakistani-marble",
    slug: "verona-marble",
    origin: "Pakistan",
    bestseller: true,
    rating: 4.7,
    description: "Elegant Pakistani marble with distinctive patterns and warm tones",
  },
]

const categories = [
  { id: "all", name: "All Products" },
  { id: "bestsellers", name: "Bestsellers" },
  { id: "italian-marble", name: "Italian Marble" },
  { id: "pakistani-marble", name: "Pakistani Marble" },
  { id: "granite", name: "Granite" },
  { id: "onyx", name: "Onyx" },
]

export default function FeaturedProducts() {
  const { toast } = useToast()
  const [wishlist, setWishlist] = useState<string[]>([])
  const [activeCategory, setActiveCategory] = useState("bestsellers")

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))

    toast({
      title: wishlist.includes(productId) ? "Removed from wishlist" : "Added to wishlist",
      duration: 2000,
    })
  }

  const addToCart = (productId: string, name: string) => {
    // In a real app, this would add the product to the cart state or call an API
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart`,
      duration: 2000,
    })
  }

  // Filter products based on active category
  const filteredProducts =
    activeCategory === "all"
      ? products.slice(0, 8)
      : activeCategory === "bestsellers"
        ? products.filter((p) => p.bestseller).slice(0, 8)
        : products.filter((p) => p.category === activeCategory).slice(0, 8)

  return (
    <div className="relative">
      <Tabs defaultValue="bestsellers" onValueChange={setActiveCategory} className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="bg-muted/50 p-1 rounded-full">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="rounded-full px-6 py-2 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group premium-product-card rounded-lg overflow-hidden bg-background border-2 border-muted hover:border-secondary/30"
                >
                  <div className="relative aspect-square overflow-hidden">
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
                          "rounded-full bg-white/80 backdrop-blur-sm h-9 w-9 shadow-md",
                          wishlist.includes(product.id) ? "text-red-500" : "text-gray-500",
                        )}
                        onClick={() => toggleWishlist(product.id)}
                      >
                        <Heart className={cn("h-5 w-5", wishlist.includes(product.id) ? "fill-current" : "")} />
                        <span className="sr-only">Add to wishlist</span>
                      </Button>
                    </div>
                    {product.bestseller && (
                      <div className="absolute top-3 left-3 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                        BESTSELLER
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <Button
                        className="w-full bg-white/90 hover:bg-white text-primary"
                        onClick={() => addToCart(product.id, product.name)}
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-1">
                      <div className="text-xs font-medium px-2 py-1 bg-primary/5 rounded-full">{product.origin}</div>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                        <span className="text-xs ml-1">{product.rating}</span>
                      </div>
                    </div>
                    <Link
                      href={`/products/${product.slug}`}
                      className="text-base font-medium hover:text-secondary transition-colors block mt-1"
                    >
                      {product.name}
                    </Link>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between mt-3">
                      <p className="text-base font-semibold">
                        ${product.price.toFixed(2)}{" "}
                        <span className="text-xs font-normal text-muted-foreground">per sq ft</span>
                      </p>
                      <Link
                        href={`/products/${product.slug}`}
                        className="text-xs font-medium text-secondary flex items-center hover:underline"
                      >
                        Details <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

