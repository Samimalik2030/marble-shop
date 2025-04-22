"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingBag, Home, ChevronRight, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

// Mock wishlist data
const initialWishlist = [
  {
    id: "1",
    name: "Carrara White Marble",
    price: 129.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "italian-marble",
    slug: "carrara-white-marble",
    origin: "Italy",
    inStock: true,
  },
  {
    id: "2",
    name: "Black Galaxy Granite",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "granite",
    slug: "black-galaxy-granite",
    origin: "India",
    inStock: true,
  },
  {
    id: "3",
    name: "Honey Onyx",
    price: 199.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "onyx",
    slug: "honey-onyx",
    origin: "Turkey",
    inStock: false,
  },
  {
    id: "4",
    name: "Calacatta Gold Marble",
    price: 249.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "italian-marble",
    slug: "calacatta-gold-marble",
    origin: "Italy",
    inStock: true,
  },
  {
    id: "5",
    name: "Ziarat White Marble",
    price: 119.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "pakistani-marble",
    slug: "ziarat-white-marble",
    origin: "Pakistan",
    inStock: true,
  },
]

export default function WishlistPage() {
  const { toast } = useToast()
  const [wishlist, setWishlist] = useState(initialWishlist)

  const removeFromWishlist = (id: string, name: string) => {
    setWishlist(wishlist.filter((item) => item.id !== id))
    toast({
      title: "Removed from wishlist",
      description: `${name} has been removed from your wishlist`,
    })
  }

  const addToCart = (id: string, name: string) => {
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart`,
    })
  }

  return (
    <div className="bg-muted/30 min-h-screen py-10">
      <div className="container px-4 md:px-6">
        <div className="flex items-center gap-2 mb-6">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            <Home className="h-4 w-4" />
          </Link>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span>Wishlist</span>
        </div>

        <Card className="border-2 hover:border-secondary/30 transition-all premium-product-card">
          <CardHeader>
            <CardTitle>My Wishlist</CardTitle>
            <CardDescription>Items you've saved for later</CardDescription>
          </CardHeader>
          <CardContent>
            {wishlist.length === 0 ? (
              <div className="text-center py-12">
                <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
                <h3 className="text-xl font-medium mb-3">Your wishlist is empty</h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Save items you like for future reference by clicking the heart icon on any product.
                </p>
                <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  <Link href="/products">Browse Products</Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {wishlist.map((item) => (
                    <div key={item.id} className="border rounded-lg overflow-hidden group premium-product-card">
                      <div className="relative aspect-square">
                        <Link href={`/products/${item.slug}`}>
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </Link>
                        {!item.inStock && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <span className="text-white font-medium px-3 py-1 bg-black/70 rounded-full">
                              Out of Stock
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <div className="text-xs text-muted-foreground mb-1">{item.origin}</div>
                        <Link
                          href={`/products/${item.slug}`}
                          className="text-base font-medium hover:text-secondary transition-colors"
                        >
                          {item.name}
                        </Link>
                        <div className="flex items-center justify-between mt-3">
                          <p className="text-base font-semibold">
                            ${item.price.toFixed(2)}{" "}
                            <span className="text-xs font-normal text-muted-foreground">per sq ft</span>
                          </p>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-9 w-9 rounded-full text-red-500 hover:text-red-600 hover:bg-red-50"
                              onClick={() => removeFromWishlist(item.id, item.name)}
                            >
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Remove from wishlist</span>
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-9 w-9 rounded-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                              onClick={() => addToCart(item.id, item.name)}
                              disabled={!item.inStock}
                            >
                              <ShoppingBag className="h-4 w-4" />
                              <span className="sr-only">Add to cart</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-6 border-t">
                  <p className="text-sm text-muted-foreground">{wishlist.length} items in wishlist</p>
                  <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    <Link href="/products">Continue Shopping</Link>
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

