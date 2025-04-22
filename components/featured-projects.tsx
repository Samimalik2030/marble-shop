import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

const projects = [
  {
    id: "1",
    title: "Luxury Villa Renovation",
    description: "Complete marble flooring and bathroom renovation for a beachfront villa",
    image: "/placeholder.svg?height=600&width=800",
    category: "Residential",
    location: "Lahore, Punjab",
  },
  {
    id: "2",
    title: "Five-Star Hotel Lobby",
    description: "Custom-cut marble and granite installation for a prestigious hotel lobby",
    image: "/placeholder.svg?height=600&width=800",
    category: "Commercial",
    location: "Islamabad, Pakistan",
  },
  {
    id: "3",
    title: "Modern Kitchen Remodel",
    description: "Premium granite countertops and backsplash for a contemporary kitchen",
    image: "/placeholder.svg?height=600&width=800",
    category: "Residential",
    location: "Faisalabad, Punjab",
  },
]

export default function FeaturedProjects() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <span className="text-secondary text-sm font-medium uppercase tracking-wider">Our Portfolio</span>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
          <div className="w-20 h-1 bg-secondary rounded-full my-2"></div>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Explore our recent installations and transformations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group overflow-hidden rounded-lg luxury-card bg-background">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">View Project</Button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-secondary">{project.category}</span>
                  <span className="text-xs text-muted-foreground">{project.location}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button
            asChild
            variant="outline"
            className="border-secondary text-primary hover:bg-secondary hover:text-primary-foreground"
          >
            <Link href="/projects" className="flex items-center gap-1">
              View All Projects <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

