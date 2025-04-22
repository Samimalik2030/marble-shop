import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ChevronRight, Home, ZoomIn } from "lucide-react"

export default function GalleryPage() {
  // Gallery categories and images
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
    { id: "flooring", name: "Flooring" },
    { id: "countertops", name: "Countertops" },
    { id: "bathrooms", name: "Bathrooms" },
  ]

  // Mock gallery items
  const galleryItems = [
    {
      id: 1,
      title: "Luxury Villa Flooring",
      category: "residential",
      subcategory: "flooring",
      image: "/placeholder.svg?height=600&width=800",
      location: "Lahore, Pakistan",
      material: "Carrara White Marble",
    },
    {
      id: 2,
      title: "Modern Kitchen Countertop",
      category: "residential",
      subcategory: "countertops",
      image: "/placeholder.svg?height=600&width=800",
      location: "Islamabad, Pakistan",
      material: "Black Galaxy Granite",
    },
    {
      id: 3,
      title: "Luxury Hotel Lobby",
      category: "commercial",
      subcategory: "flooring",
      image: "/placeholder.svg?height=600&width=800",
      location: "Karachi, Pakistan",
      material: "Calacatta Gold Marble",
    },
    {
      id: 4,
      title: "Executive Office Suite",
      category: "commercial",
      subcategory: "flooring",
      image: "/placeholder.svg?height=600&width=800",
      location: "Faisalabad, Pakistan",
      material: "Emperador Dark Marble",
    },
    {
      id: 5,
      title: "Spa Bathroom Renovation",
      category: "residential",
      subcategory: "bathrooms",
      image: "/placeholder.svg?height=600&width=800",
      location: "Multan, Pakistan",
      material: "Honey Onyx",
    },
    {
      id: 6,
      title: "Restaurant Bar Counter",
      category: "commercial",
      subcategory: "countertops",
      image: "/placeholder.svg?height=600&width=800",
      location: "Peshawar, Pakistan",
      material: "Blue Pearl Granite",
    },
    {
      id: 7,
      title: "Luxury Bathroom",
      category: "residential",
      subcategory: "bathrooms",
      image: "/placeholder.svg?height=600&width=800",
      location: "Rawalpindi, Pakistan",
      material: "Statuario Marble",
    },
    {
      id: 8,
      title: "Corporate Headquarters",
      category: "commercial",
      subcategory: "flooring",
      image: "/placeholder.svg?height=600&width=800",
      location: "Lahore, Pakistan",
      material: "Ziarat White Marble",
    },
    {
      id: 9,
      title: "Designer Kitchen Island",
      category: "residential",
      subcategory: "countertops",
      image: "/placeholder.svg?height=600&width=800",
      location: "Islamabad, Pakistan",
      material: "Absolute Black Granite",
    },
  ]

  return (
    <div className="bg-muted/30 min-h-screen py-10">
      <div className="container px-4 md:px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            <Home className="h-4 w-4" />
          </Link>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span>Gallery</span>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-lg overflow-hidden mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
          <Image
            src="/placeholder.svg?height=500&width=1200"
            alt="Project Gallery"
            width={1200}
            height={500}
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fade-up animate-once animate-duration-[800ms] animate-delay-100">
              Our Project Gallery
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl animate-fade-up animate-once animate-duration-[800ms] animate-delay-200">
              Explore our portfolio of premium marble and granite installations across Pakistan
            </p>
          </div>
        </div>

        {/* Gallery Tabs */}
        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="flex flex-wrap justify-center mb-8 bg-transparent">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-secondary data-[state=active]:text-white rounded-full px-6 py-2 m-1"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* All Projects Tab */}
          <TabsContent value="all" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-10 w-10 rounded-full bg-white/80 text-secondary hover:bg-white"
                      >
                        <ZoomIn className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1 group-hover:text-secondary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {item.location} • {item.material}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-1 bg-secondary/10 text-secondary rounded-full">
                        {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                      </span>
                      <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full">
                        {item.subcategory.charAt(0).toUpperCase() + item.subcategory.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Category Tabs */}
          {categories.slice(1).map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems
                  .filter((item) => item.category === category.id || item.subcategory === category.id)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-10 w-10 rounded-full bg-white/80 text-secondary hover:bg-white"
                          >
                            <ZoomIn className="h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-1 group-hover:text-secondary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {item.location} • {item.material}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-xs px-2 py-1 bg-secondary/10 text-secondary rounded-full">
                            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                          </span>
                          <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-full">
                            {item.subcategory.charAt(0).toUpperCase() + item.subcategory.slice(1)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Featured Project */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Project</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Featured Project"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-2">Luxury Villa Complete Renovation</h3>
              <p className="text-muted-foreground mb-4">
                A comprehensive renovation project featuring premium Carrara White marble flooring, Black Galaxy granite
                kitchen countertops, and custom-designed bathroom vanities using Pakistani Ziarat White marble.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-muted-foreground">DHA Phase 5, Lahore</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Project Size</p>
                  <p className="text-muted-foreground">8,500 sq. ft.</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Materials Used</p>
                  <p className="text-muted-foreground">Marble, Granite, Onyx</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Completion Time</p>
                  <p className="text-muted-foreground">4 months</p>
                </div>
              </div>
              <Button className="bg-secondary hover:bg-secondary/90 text-white w-fit">View Project Details</Button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-lg overflow-hidden bg-gradient-to-r from-secondary to-secondary/80 text-white p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-white/90 mb-6 md:text-lg">
              Let our experts help you select the perfect marble or granite for your next project. Contact us for a free
              consultation and quote.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-secondary hover:bg-white/90">Request a Quote</Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

