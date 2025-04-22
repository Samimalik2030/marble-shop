import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

const collections = [
  {
    name: "Italian Marble",
    description: "Timeless elegance from Italy's finest quarries",
    image: "/placeholder.svg?height=600&width=400",
    slug: "italian-marble",
    featured: true,
    products: ["Carrara White Marble", "Calacatta Gold Marble", "Statuario Marble", "Botticino Marble"],
  },
  {
    name: "Pakistani Marble",
    description: "Premium local marble with unique patterns",
    image: "/placeholder.svg?height=600&width=400",
    slug: "pakistani-marble",
    featured: true,
    products: ["Ziarat White Marble", "Silky Black Marble", "Verona Marble", "Badal Marble"],
  },
  {
    name: "Premium Granite",
    description: "Durable luxury for countertops and flooring",
    image: "/placeholder.svg?height=600&width=400",
    slug: "granite",
    featured: true,
    products: ["Black Galaxy Granite", "Absolute Black Granite", "Kashmir White Granite", "Blue Pearl Granite"],
  },
  {
    name: "Exotic Onyx",
    description: "Translucent beauty for statement features",
    image: "/placeholder.svg?height=600&width=400",
    slug: "onyx",
    featured: true,
    products: ["Honey Onyx", "Green Onyx", "White Onyx", "Red Onyx"],
  },
  {
    name: "Designer Quartz",
    description: "Engineered perfection for modern spaces",
    image: "/placeholder.svg?height=600&width=400",
    slug: "quartz",
    featured: true,
    products: ["Pure White Quartz", "Calacatta Quartz", "Nero Quartz", "Veined Quartz"],
  },
  {
    name: "Travertine",
    description: "Natural elegance with distinctive textures",
    image: "/placeholder.svg?height=600&width=400",
    slug: "travertine",
    featured: false,
    products: ["Classic Travertine", "Silver Travertine", "Noce Travertine", "Gold Travertine"],
  },
  {
    name: "Limestone",
    description: "Subtle sophistication for timeless interiors",
    image: "/placeholder.svg?height=600&width=400",
    slug: "limestone",
    featured: false,
    products: ["Jura Beige Limestone", "Jerusalem Gold Limestone", "Crema Europa Limestone", "Moca Cream Limestone"],
  },
  {
    name: "Sandstone",
    description: "Natural warmth for indoor and outdoor spaces",
    image: "/placeholder.svg?height=600&width=400",
    slug: "sandstone",
    featured: false,
    products: ["Mint Sandstone", "Rainbow Sandstone", "Teakwood Sandstone", "Autumn Brown Sandstone"],
  },
]

export default function CollectionsPage() {
  return (
    <div className="bg-muted/30 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/placeholder.svg?height=800&width=1600" alt="Marble texture" fill className="object-cover" />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Our Collections</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8">
              Explore our curated collections of premium natural stone
            </p>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg luxury-card bg-background h-full flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-2">{collection.name}</h3>
                  <p className="text-muted-foreground mb-4">{collection.description}</p>

                  <div className="mt-auto">
                    <h4 className="font-medium text-sm text-secondary mb-2">Popular Products:</h4>
                    <ul className="space-y-1 mb-6">
                      {collection.products.slice(0, 3).map((product, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <ArrowRight className="h-3 w-3 mr-2 text-secondary" />
                          {product}
                        </li>
                      ))}
                    </ul>

                    <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                      <Link href={`/categories/${collection.slug}`}>Explore Collection</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Orders Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Custom marble work"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-secondary text-sm font-medium uppercase tracking-wider">Bespoke Solutions</span>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mt-2 mb-6">Custom Orders</h2>
              <p className="text-primary-foreground/80 mb-6">
                Can't find exactly what you're looking for? We specialize in custom orders tailored to your specific
                requirements. From unique cuts and finishes to special dimensions, our expert team can bring your vision
                to life.
              </p>
              <p className="text-primary-foreground/80 mb-8">
                Our craftsmen have decades of experience working with natural stone and can create custom pieces for any
                application, including:
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-secondary"></div>
                  <span>Custom countertops with specialized edge profiles</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-secondary"></div>
                  <span>Bespoke marble fireplaces and surrounds</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-secondary"></div>
                  <span>Intricate floor medallions and patterns</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-secondary"></div>
                  <span>Unique bathroom vanities and shower surrounds</span>
                </li>
              </ul>
              <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="/contact">Request Custom Order</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Material Guide */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="text-secondary text-sm font-medium uppercase tracking-wider">Material Guide</span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mt-2">Choosing the Right Stone</h2>
            <div className="w-20 h-1 bg-secondary rounded-full my-2 mx-auto"></div>
            <p className="max-w-[800px] text-muted-foreground mx-auto">
              Understanding the characteristics of different natural stones will help you make the best choice for your
              project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Marble",
                description:
                  "Elegant and timeless, marble is perfect for luxury interiors. It requires regular sealing but offers unmatched beauty.",
                bestFor: ["Bathroom vanities", "Fireplace surrounds", "Elegant flooring", "Feature walls"],
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Granite",
                description:
                  "Extremely durable and heat-resistant, granite is ideal for high-traffic areas and requires minimal maintenance.",
                bestFor: ["Kitchen countertops", "Outdoor applications", "High-traffic flooring", "Commercial spaces"],
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Onyx",
                description:
                  "Translucent and dramatic, onyx creates stunning visual effects, especially when backlit. Best for decorative applications.",
                bestFor: ["Backlit features", "Accent walls", "Decorative elements", "Luxury bathrooms"],
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Quartz",
                description:
                  "Engineered for consistency and durability, quartz offers the look of natural stone with enhanced performance.",
                bestFor: ["Kitchen countertops", "Bathroom vanities", "Commercial surfaces", "High-use areas"],
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Travertine",
                description:
                  "Natural and earthy with distinctive textures, travertine brings warmth and character to any space.",
                bestFor: ["Flooring", "Wall cladding", "Outdoor patios", "Pool surrounds"],
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Limestone",
                description:
                  "Subtle and sophisticated, limestone offers a soft, natural look with consistent coloring.",
                bestFor: ["Flooring", "Wall cladding", "Fireplace surrounds", "Exterior applications"],
                image: "/placeholder.svg?height=300&width=400",
              },
            ].map((material, index) => (
              <div key={index} className="bg-background rounded-lg overflow-hidden border shadow-sm">
                <div className="relative h-48">
                  <Image
                    src={material.image || "/placeholder.svg"}
                    alt={material.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{material.title}</h3>
                  <p className="text-muted-foreground mb-4">{material.description}</p>
                  <h4 className="font-medium text-sm mb-2">Best For:</h4>
                  <ul className="space-y-1">
                    {material.bestFor.map((use, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <ArrowRight className="h-3 w-3 mr-2 text-secondary" />
                        {use}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Transform Your Space?</h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Visit our showroom in Lahore or contact us to explore our premium collections in person.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/products">Browse Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

