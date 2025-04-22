import Link from "next/link"
import Image from "next/image"
import { Check, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

const roomCategories = ["all", "kitchen", "bathroom", "living", "bedroom", "outdoor"]

const roomIdeas = [
  {
    title: "Modern Kitchen with Black Galaxy Granite",
    description: "Sleek black granite countertops paired with white cabinetry for a contemporary look",
    image: "/placeholder.svg?height=600&width=800",
    category: "kitchen",
    materials: ["Black Galaxy Granite", "Absolute Black Granite"],
    featured: true,
    designer: "Ayesha Khan",
    location: "Lahore, Punjab",
  },
  {
    title: "Luxury Master Bathroom with Carrara Marble",
    description: "Elegant white marble creates a spa-like retreat in this master bathroom",
    image: "/placeholder.svg?height=600&width=800",
    category: "bathroom",
    materials: ["Carrara White Marble", "Calacatta Gold Marble"],
    featured: true,
    designer: "Faisal Ahmed",
    location: "Islamabad",
  },
  {
    title: "Backlit Honey Onyx Feature Wall",
    description: "Stunning translucent onyx creates a dramatic focal point when backlit",
    image: "/placeholder.svg?height=600&width=800",
    category: "living",
    materials: ["Honey Onyx", "White Onyx"],
    featured: true,
    designer: "Sana Malik",
    location: "Karachi",
  },
  {
    title: "Classic Living Room with Marble Flooring",
    description: "Timeless elegance with polished marble floors in this traditional living space",
    image: "/placeholder.svg?height=600&width=800",
    category: "living",
    materials: ["Crema Marfil Marble", "Botticino Marble"],
    featured: false,
    designer: "Usman Ali",
    location: "Lahore, Punjab",
  },
  {
    title: "Outdoor Kitchen with Granite Countertops",
    description: "Weather-resistant granite makes this outdoor kitchen both beautiful and practical",
    image: "/placeholder.svg?height=600&width=800",
    category: "outdoor",
    materials: ["Blue Pearl Granite", "Kashmir White Granite"],
    featured: false,
    designer: "Imran Khan",
    location: "Faisalabad, Punjab",
  },
  {
    title: "Marble Accent Wall in Bedroom",
    description: "A stunning marble feature wall creates a luxurious focal point in this master bedroom",
    image: "/placeholder.svg?height=600&width=800",
    category: "bedroom",
    materials: ["Emperador Dark Marble", "Silky Black Marble"],
    featured: false,
    designer: "Zara Mahmood",
    location: "Multan, Punjab",
  },
  {
    title: "Waterfall Edge Island in Open Kitchen",
    description: "Dramatic waterfall edge detail showcases the beauty of natural stone",
    image: "/placeholder.svg?height=600&width=800",
    category: "kitchen",
    materials: ["Calacatta Gold Marble", "Statuario Marble"],
    featured: true,
    designer: "Ahmed Hassan",
    location: "Lahore, Punjab",
  },
  {
    title: "Marble Shower Surround",
    description: "Floor-to-ceiling marble creates a seamless, luxurious shower experience",
    image: "/placeholder.svg?height=600&width=800",
    category: "bathroom",
    materials: ["Ziarat White Marble", "Carrara White Marble"],
    featured: false,
    designer: "Farah Ahmed",
    location: "Rawalpindi",
  },
  {
    title: "Outdoor Patio with Travertine Pavers",
    description: "Natural travertine creates a beautiful and durable outdoor living space",
    image: "/placeholder.svg?height=600&width=800",
    category: "outdoor",
    materials: ["Classic Travertine", "Silver Travertine"],
    featured: false,
    designer: "Ali Raza",
    location: "Islamabad",
  },
  {
    title: "Mixed Material Kitchen",
    description: "Combining different stones creates visual interest in this gourmet kitchen",
    image: "/placeholder.svg?height=600&width=800",
    category: "kitchen",
    materials: ["Absolute Black Granite", "Calacatta Gold Marble"],
    featured: false,
    designer: "Malik Riaz",
    location: "Lahore, Punjab",
  },
  {
    title: "Minimalist Bathroom with Large Format Tiles",
    description: "Clean lines and large format marble tiles create a serene, spa-like bathroom",
    image: "/placeholder.svg?height=600&width=800",
    category: "bathroom",
    materials: ["Ziarat White Marble", "Pure White Quartz"],
    featured: false,
    designer: "Sana Malik",
    location: "Karachi",
  },
  {
    title: "Cozy Bedroom with Marble Fireplace",
    description: "A luxurious marble fireplace surround adds warmth and elegance to this master bedroom",
    image: "/placeholder.svg?height=600&width=800",
    category: "bedroom",
    materials: ["Emperador Dark Marble", "Crema Marfil Marble"],
    featured: true,
    designer: "Zainab Hasan",
    location: "Islamabad",
  },
]

export default function RoomIdeasPage() {
  return (
    <div className="bg-muted/30 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/placeholder.svg?height=800&width=1600" alt="Marble texture" fill className="object-cover" />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Room Ideas</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8">
              Get inspired with our curated collection of design ideas for every space
            </p>
          </div>
        </div>
      </section>

      {/* Room Ideas Gallery */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-muted/50 p-1 rounded-full">
                {roomCategories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="rounded-full px-6 py-2 capitalize data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {roomCategories.map((category) => (
              <TabsContent key={category} value={category} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {roomIdeas
                    .filter((idea) => category === "all" || idea.category === category)
                    .map((idea, index) => (
                      <div
                        key={index}
                        className="group premium-product-card rounded-lg overflow-hidden bg-background border-2 border-muted hover:border-secondary/30"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={idea.image || "/placeholder.svg"}
                            alt={idea.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                              View Details
                            </Button>
                          </div>

                          {idea.featured && (
                            <div className="absolute top-3 left-3 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                              FEATURED
                            </div>
                          )}
                        </div>
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-xs font-medium px-2 py-1 bg-primary/5 rounded-full">
                              {idea.location}
                            </div>
                            <div className="text-xs font-medium">By {idea.designer}</div>
                          </div>
                          <h3 className="text-lg font-semibold mb-2">{idea.title}</h3>
                          <p className="text-sm text-muted-foreground mb-4">{idea.description}</p>
                          <div>
                            <h4 className="text-xs font-medium text-secondary mb-2">Materials Used:</h4>
                            <div className="flex flex-wrap gap-2">
                              {idea.materials.map((material, idx) => (
                                <span key={idx} className="text-xs bg-muted px-2 py-1 rounded-full">
                                  {material}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Design Tips Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="text-secondary text-sm font-medium uppercase tracking-wider">Expert Advice</span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mt-2">Design Tips from Our Experts</h2>
            <div className="w-20 h-1 bg-secondary rounded-full my-2 mx-auto"></div>
            <p className="max-w-[800px] text-primary-foreground/80 mx-auto">
              Professional insights to help you make the most of natural stone in your home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Mixing Materials",
                description:
                  "Don't be afraid to mix different types of stone. Combining marble with granite or quartz can create visual interest and highlight different areas of your space.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Lighting Considerations",
                description:
                  "Natural stone looks different under various lighting conditions. Always view samples in the space where they'll be installed, under both natural and artificial light.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Veining Direction",
                description:
                  "Pay attention to the direction of veining in marble and similar stones. Bookmatching (mirroring adjacent slabs) can create dramatic, symmetrical patterns.",
                image: "/placeholder.svg?height=300&width=400",
              },
            ].map((tip, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 hover:border-secondary/30 transition-all premium-product-card"
              >
                <div className="relative h-48">
                  <Image src={tip.image || "/placeholder.svg"} alt={tip.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{tip.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-primary-foreground/80">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              {
                title: "Edge Profiles",
                description:
                  "The edge profile you choose for countertops can dramatically change the look. From simple eased edges to elaborate ogee profiles, each creates a different aesthetic.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Maintenance Matters",
                description:
                  "Different stones require different maintenance. Consider your lifestyle when choosing - some stones require more regular sealing than others.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Sample Size",
                description:
                  "Always look at large samples of natural stone. Small samples can't capture the full range of variation and movement in the material.",
                image: "/placeholder.svg?height=300&width=400",
              },
            ].map((tip, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 hover:border-secondary/30 transition-all premium-product-card"
              >
                <div className="relative h-48">
                  <Image src={tip.image || "/placeholder.svg"} alt={tip.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{tip.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-primary-foreground/80">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="text-secondary text-sm font-medium uppercase tracking-wider">Inspiration Gallery</span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mt-2">Featured Projects</h2>
            <div className="w-20 h-1 bg-secondary rounded-full my-2 mx-auto"></div>
            <p className="max-w-[800px] text-muted-foreground mx-auto">
              Explore our most stunning completed projects featuring premium natural stone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-lg overflow-hidden aspect-[4/3] premium-product-card">
              <Image src="/placeholder.svg?height=600&width=800" alt="Luxury Villa" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <span className="text-xs text-white/80">5.0 (12 reviews)</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Luxury Villa Renovation</h3>
                <p className="text-white/80 mb-4">
                  Complete marble flooring and bathroom renovation for a beachfront villa in Lahore
                </p>
                <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  <Link href="/projects/luxury-villa">View Project</Link>
                </Button>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden aspect-[4/3] premium-product-card">
              <Image src="/placeholder.svg?height=600&width=800" alt="Hotel Lobby" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <span className="text-xs text-white/80">5.0 (8 reviews)</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Five-Star Hotel Lobby</h3>
                <p className="text-white/80 mb-4">
                  Custom-cut marble and granite installation for a prestigious hotel lobby in Islamabad
                </p>
                <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  <Link href="/projects/hotel-lobby">View Project</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Consultation Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-secondary text-sm font-medium uppercase tracking-wider">Professional Guidance</span>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mt-2 mb-6">Free Design Consultation</h2>
              <p className="text-muted-foreground mb-6">
                Not sure which stone is right for your project? Our design consultants are here to help. Schedule a free
                consultation at our Lahore showroom or virtually from anywhere in Pakistan.
              </p>
              <p className="text-muted-foreground mb-8">Our experts will:</p>
              <div className="space-y-4 mb-8">
                {[
                  "Help you select the perfect stone for your space and budget",
                  "Provide material samples to view in your home",
                  "Offer design suggestions based on current trends",
                  "Create digital visualizations of your space with different materials",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden premium-product-card">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Design consultation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
              <div className="absolute bottom-6 right-6 bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium">
                Free Consultation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Browse our collections or visit our showroom to see our premium materials in person.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="/products">Browse Products</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

