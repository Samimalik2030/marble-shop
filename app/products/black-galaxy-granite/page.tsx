"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Heart, Minus, Plus, Share2, ShoppingCart, Star, Truck, Shield, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import RelatedProducts from "@/components/related-products"

// Mock data for this specific product
const product = {
  id: "2",
  name: "Black Galaxy Granite",
  price: 89.99,
  description:
    "Luxurious Black Galaxy Granite from India featuring a deep black background with copper/gold flecks. Ideal for kitchen countertops and high-traffic areas.",
  features: [
    "Premium Indian granite",
    "Deep black with gold/copper flecks",
    "Highly durable and scratch-resistant",
    "Heat resistant",
    "Low maintenance",
  ],
  images: [
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
  ],
  colors: [{ id: "black", name: "Black", class: "bg-black" }],
  sizes: ["12x12", "18x18", "24x24", "Custom"],
  rating: 4.9,
  reviewCount: 156,
  stock: 350,
  sku: "BGG-001",
  category: "granite",
  origin: "India",
  thickness: ["10mm", "15mm", "20mm", "30mm"],
  finish: ["Polished", "Honed", "Flamed"],
  breadcrumbs: [
    { id: "home", name: "Home", href: "/" },
    { id: "products", name: "Products", href: "/products" },
    { id: "granite", name: "Granite", href: "/categories/granite" },
  ],
}

export default function ProductPage() {
  const { toast } = useToast()
  const [mainImage, setMainImage] = useState(product.images[0])
  const [selectedColor, setSelectedColor] = useState(product.colors[0].id)
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])
  const [selectedThickness, setSelectedThickness] = useState(product.thickness[1])
  const [selectedFinish, setSelectedFinish] = useState(product.finish[0])
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} (${selectedSize}, ${selectedThickness}, ${selectedFinish}) x ${quantity} has been added to your cart`,
      duration: 3000,
    })
  }

  const handleAddToWishlist = () => {
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist`,
      duration: 3000,
    })
  }

  return (
    <div className="bg-muted/30 py-10">
      <div className="container px-4 md:px-6">
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm">
            {product.breadcrumbs.map((breadcrumb, index) => (
              <li key={breadcrumb.id} className="flex items-center">
                <Link href={breadcrumb.href} className="text-muted-foreground hover:text-foreground">
                  {breadcrumb.name}
                </Link>
                {index < product.breadcrumbs.length - 1 && (
                  <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="bg-background rounded-lg shadow-sm border overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 p-6 md:p-10">
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                <Image src={mainImage || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>

              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className="relative aspect-square overflow-hidden rounded-md bg-gray-100 hover:ring-2 hover:ring-secondary"
                    onClick={() => setMainImage(image)}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-secondary">
                    {product.category.replace("-", " ").toUpperCase()}
                  </span>
                  <span className="text-xs text-muted-foreground">Origin: {product.origin}</span>
                </div>
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <div className="flex items-center mt-2 space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : i < product.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
                <p className="text-2xl font-bold mt-2 text-primary">
                  ${product.price.toFixed(2)}{" "}
                  <span className="text-sm font-normal text-muted-foreground">per sq ft</span>
                </p>
              </div>

              <Separator />

              <div>
                <p className="text-muted-foreground">{product.description}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-3">Size</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        className={`flex items-center justify-center rounded-md border py-2 text-sm font-medium ${
                          selectedSize === size
                            ? "border-secondary bg-secondary text-secondary-foreground"
                            : "border-input hover:border-secondary"
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-3">Thickness</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {product.thickness.map((thickness) => (
                      <button
                        key={thickness}
                        className={`flex items-center justify-center rounded-md border py-2 text-sm font-medium ${
                          selectedThickness === thickness
                            ? "border-secondary bg-secondary text-secondary-foreground"
                            : "border-input hover:border-secondary"
                        }`}
                        onClick={() => setSelectedThickness(thickness)}
                      >
                        {thickness}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-3">Finish</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {product.finish.map((finish) => (
                      <button
                        key={finish}
                        className={`flex items-center justify-center rounded-md border py-2 text-sm font-medium ${
                          selectedFinish === finish
                            ? "border-secondary bg-secondary text-secondary-foreground"
                            : "border-input hover:border-secondary"
                        }`}
                        onClick={() => setSelectedFinish(finish)}
                      >
                        {finish}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-3">Quantity</h3>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                      <span className="sr-only">Decrease quantity</span>
                    </Button>
                    <span className="w-12 text-center">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      disabled={quantity >= product.stock}
                    >
                      <Plus className="h-4 w-4" />
                      <span className="sr-only">Increase quantity</span>
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{product.stock} sq ft in stock</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <Button
                  size="lg"
                  className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  onClick={handleAddToWishlist}
                >
                  <Heart className="h-5 w-5" />
                  <span className="sr-only">Add to wishlist</span>
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-5 w-5" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>

              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-2 text-sm">
                  <Truck className="h-5 w-5 text-muted-foreground" />
                  <span>Free shipping on orders over $1000</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-5 w-5 text-muted-foreground" />
                  <span>2-year warranty on all products</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span>Ships within 3-5 business days</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-10 pt-0">
            <Tabs defaultValue="description">
              <TabsList className="w-full justify-start border-b rounded-none">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="py-4">
                <div className="prose max-w-none">
                  <p>{product.description}</p>
                  <p>
                    Black Galaxy Granite is quarried in the Andhra Pradesh region of India and is one of the most
                    popular black granite varieties worldwide. It's known for its distinctive gold/copper flecks that
                    resemble stars in a night sky.
                  </p>
                  <p>
                    This premium granite is characterized by its deep black background with golden/copper specks. The
                    striking contrast makes it a statement piece for kitchen countertops, bathroom vanities, flooring,
                    and wall cladding.
                  </p>
                  <p>
                    Black Galaxy Granite is highly durable and resistant to scratches, heat, and stains, making it
                    perfect for high-traffic areas like kitchens. Its low porosity means it requires minimal maintenance
                    while providing long-lasting beauty.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="features" className="py-4">
                <ul className="list-disc pl-5 space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="specifications" className="py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium mb-2">Product Specifications</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-muted-foreground">Material</span>
                        <span className="font-medium">Granite</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-muted-foreground">Origin</span>
                        <span className="font-medium">{product.origin}</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-muted-foreground">Available Sizes</span>
                        <span className="font-medium">{product.sizes.join(", ")}</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-muted-foreground">Available Thickness</span>
                        <span className="font-medium">{product.thickness.join(", ")}</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-muted-foreground">Available Finishes</span>
                        <span className="font-medium">{product.finish.join(", ")}</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Technical Specifications</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-muted-foreground">Water Absorption</span>
                        <span className="font-medium">0.1%</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-muted-foreground">Density</span>
                        <span className="font-medium">3.0 g/cm³</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-muted-foreground">Compressive Strength</span>
                        <span className="font-medium">180 MPa</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-muted-foreground">Flexural Strength</span>
                        <span className="font-medium">20.5 MPa</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-muted-foreground">Mohs Hardness</span>
                        <span className="font-medium">6-7</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="py-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Customer Reviews</h3>
                    <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                      Write a Review
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between mb-2">
                        <div>
                          <h4 className="font-medium">Perfect for our kitchen</h4>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">1 month ago</span>
                      </div>
                      <p className="text-sm">
                        We installed Black Galaxy Granite in our kitchen and it looks absolutely stunning. The gold
                        flecks catch the light beautifully and it's very easy to clean. Highly recommend!
                      </p>
                      <div className="mt-2 text-sm font-medium">- Ahmed K.</div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between mb-2">
                        <div>
                          <h4 className="font-medium">Durable and Beautiful</h4>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">2 months ago</span>
                      </div>
                      <p className="text-sm">
                        After a year of heavy use in our busy kitchen, the Black Galaxy Granite still looks brand new.
                        It's incredibly resistant to scratches and heat. The installation team was professional and
                        efficient.
                      </p>
                      <div className="mt-2 text-sm font-medium">- Fatima S.</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <section className="mt-16">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <span className="text-secondary text-sm font-medium uppercase tracking-wider">You May Also Like</span>
            <h2 className="text-3xl font-bold tracking-tighter">Related Products</h2>
            <div className="w-20 h-1 bg-secondary rounded-full my-2"></div>
          </div>
          <RelatedProducts currentProductId={product.id} category={product.category} />
        </section>
      </div>
    </div>
  )
}

