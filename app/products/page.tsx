import Link from "next/link"
import Image from "next/image"
import { Filter, SlidersHorizontal, ArrowRight, Star, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import ProductGrid from "@/components/product-grid"
import ProductFilters from "@/components/product-filters"
import Pagination from "@/components/pagination"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductsPage() {
  return (
    <div className="bg-muted/30 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/placeholder.svg?height=800&width=1600" alt="Marble texture" fill className="object-cover" />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Luxury Stone Collection</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8">
              Discover our exquisite selection of premium marble, granite, and natural stone
            </p>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-12 bg-background luxury-section">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-8">
            <span className="text-secondary text-sm font-medium uppercase tracking-wider">Explore By Category</span>
            <h2 className="text-3xl font-bold mt-2 mb-4">Premium Collections</h2>
            <div className="w-20 h-1 bg-secondary rounded-full my-2 mx-auto"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our most sought-after collections, each carefully curated for exceptional quality and beauty
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Italian Marble",
                image: "/placeholder.svg?height=300&width=300",
                slug: "italian-marble",
                description: "Timeless elegance from Italy's finest quarries",
              },
              {
                name: "Pakistani Marble",
                image: "/placeholder.svg?height=300&width=300",
                slug: "pakistani-marble",
                description: "Premium local marble with unique patterns",
              },
              {
                name: "Premium Granite",
                image: "/placeholder.svg?height=300&width=300",
                slug: "granite",
                description: "Durable luxury for countertops and flooring",
              },
              {
                name: "Exotic Onyx",
                image: "/placeholder.svg?height=300&width=300",
                slug: "onyx",
                description: "Translucent beauty for statement features",
              },
            ].map((category, index) => (
              <Link
                key={index}
                href={`/categories/${category.slug}`}
                className="group relative overflow-hidden rounded-lg premium-product-card"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <h3 className="text-white font-bold text-xl md:text-2xl mb-2">{category.name}</h3>
                    <p className="text-white/80 text-sm mb-4">{category.description}</p>
                    <span className="px-4 py-2 bg-secondary/90 text-secondary-foreground rounded-full text-sm font-medium transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      Explore Collection
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Our Products</h2>
              <p className="text-muted-foreground mt-1">Browse our collection of premium marble and granite products</p>
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <Input
                placeholder="Search products..."
                className="w-full md:w-[300px] border-input/50 focus-visible:ring-secondary"
              />

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="md:hidden">
                    <SlidersHorizontal className="h-4 w-4" />
                    <span className="sr-only">Filters</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <div className="px-1 py-6">
                    <h3 className="text-lg font-medium mb-4">Filters</h3>
                    <ProductFilters className="mt-4" />
                  </div>
                </SheetContent>
              </Sheet>

              <div className="hidden md:flex items-center gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Filter className="h-4 w-4" />
                  Sort
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="hidden md:block w-[280px] flex-shrink-0">
              <div className="bg-background rounded-lg border-2 p-6 sticky top-24">
                <ProductFilters />
              </div>
            </div>

            <div className="flex-1">
              <Tabs defaultValue="grid" className="w-full mb-6">
                <div className="flex justify-end">
                  <TabsList className="bg-muted/50 p-1 rounded-full">
                    <TabsTrigger value="grid" className="rounded-full px-4 data-[state=active]:bg-background">
                      Grid View
                    </TabsTrigger>
                    <TabsTrigger value="list" className="rounded-full px-4 data-[state=active]:bg-background">
                      List View
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="grid" className="mt-6">
                  <ProductGrid />
                </TabsContent>

                <TabsContent value="list" className="mt-6">
                  <div className="space-y-4">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <div
                        key={index}
                        className="flex flex-col md:flex-row gap-6 bg-background p-4 rounded-lg border-2 hover:border-secondary/30 transition-all"
                      >
                        <div className="relative w-full md:w-48 h-48 rounded-md overflow-hidden flex-shrink-0">
                          <Image
                            src="/placeholder.svg?height=200&width=200"
                            alt="Product"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 flex flex-col">
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-xs font-medium px-2 py-1 bg-primary/5 rounded-full">Italy</div>
                            <div className="flex items-center">
                              <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                              <span className="text-xs ml-1">4.8</span>
                            </div>
                          </div>
                          <h3 className="text-lg font-semibold mb-2">Premium Italian Marble</h3>
                          <p className="text-sm text-muted-foreground mb-4 flex-grow">
                            Exquisite Italian marble with elegant veining patterns, perfect for luxury interiors and
                            statement features.
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {["Polished", "Indoor", "Premium"].map((tag, i) => (
                              <span key={i} className="text-xs bg-muted px-2 py-1 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center justify-between mt-auto">
                            <p className="text-lg font-semibold">
                              $129.99 <span className="text-xs font-normal text-muted-foreground">per sq ft</span>
                            </p>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                Add to Cart
                              </Button>
                              <Button
                                size="sm"
                                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                              >
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-10">
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Spotlight */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-secondary text-sm font-medium uppercase tracking-wider">Product Spotlight</span>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mt-2 mb-6">Calacatta Gold Marble</h2>
              <p className="text-primary-foreground/80 mb-6">
                Calacatta Gold is one of the most prestigious marbles in the world, known for its distinctive gold
                veining that creates a dramatic contrast against its bright white background.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Quarried from the mountains of Carrara, Italy",
                  "Bold, dramatic gold veining on white background",
                  "Each slab is unique with its own pattern",
                  "Perfect for luxury kitchens and bathrooms",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-primary-foreground/90">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  <Link href="/products/calacatta-gold-marble" className="flex items-center gap-2">
                    View Details <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Link href="/room-ideas">See It In Use</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Calacatta Gold Marble"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
              <div className="absolute bottom-6 right-6 bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium">
                Premium Selection
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Care Guide */}
      <section className="py-16 bg-muted/50 luxury-section">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="text-secondary text-sm font-medium uppercase tracking-wider">Maintenance Tips</span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mt-2">Product Care Guide</h2>
            <div className="w-20 h-1 bg-secondary rounded-full my-2 mx-auto"></div>
            <p className="max-w-[800px] text-muted-foreground mx-auto">
              Keep your natural stone looking beautiful for generations with these care tips
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Daily Cleaning",
                description:
                  "Clean stone surfaces with a pH-neutral cleaner specifically designed for natural stone. Avoid acidic cleaners like vinegar or lemon-based products, which can etch the surface.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Sealing",
                description:
                  "Most natural stones should be sealed regularly to prevent staining. Marble and limestone typically need sealing every 6-12 months, while granite may only need it every 1-3 years.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Stain Removal",
                description:
                  "Address spills immediately to prevent staining. For existing stains, use a poultice specifically formulated for the type of stain and stone you're treating.",
                image: "/placeholder.svg?height=300&width=400",
              },
            ].map((tip, index) => (
              <div
                key={index}
                className="bg-background rounded-lg overflow-hidden border-2 hover:border-secondary/30 transition-all premium-product-card"
              >
                <div className="relative h-48">
                  <Image src={tip.image || "/placeholder.svg"} alt={tip.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{tip.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Link href="/contact">Request Care Guide</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              We offer custom orders and can source specific materials for your project needs.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

