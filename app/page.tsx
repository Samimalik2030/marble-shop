import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Star, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import FeaturedProducts from "@/components/featured-products"
import HeroSlider from "@/components/hero-slider"
import CategoryGrid from "@/components/category-grid"
import Newsletter from "@/components/newsletter"
import RoomVisualizer from "@/components/room-visualizer"
import MaterialCalculator from "@/components/material-calculator"
import TestimonialSlider from "@/components/testimonial-slider"
import EmailSubscriptionPopup from "@/components/email-subscription-popup"
import FeaturedProjects from "@/components/featured-projects"
import BenefitsSection from "@/components/benefits-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSlider />

      {/* Premium Collections Section */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <span className="text-secondary text-sm font-medium uppercase tracking-wider">Exclusive Collections</span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Luxury Stone Collections</h2>
            <div className="w-20 h-1 bg-secondary rounded-full my-2"></div>
            <p className="max-w-[800px] text-muted-foreground md:text-lg">
              Discover our exquisite marble and granite collections for your dream spaces
            </p>
          </div>
          <CategoryGrid />
          <div className="flex justify-center mt-10">
            <Button
              asChild
              variant="outline"
              className="border-secondary text-primary hover:bg-secondary hover:text-primary-foreground"
            >
              <Link href="/categories" className="flex items-center gap-1">
                View All Collections <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <BenefitsSection />

      {/* Premium Products Section */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <span className="text-secondary text-sm font-medium uppercase tracking-wider">Handpicked Selection</span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Premium Products</h2>
            <div className="w-20 h-1 bg-secondary rounded-full my-2"></div>
            <p className="max-w-[800px] text-muted-foreground md:text-lg">
              Explore our finest marble and granite selections for luxury interiors
            </p>
          </div>
          <FeaturedProducts />
          <div className="flex justify-center mt-10">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/products" className="flex items-center gap-1">
                Shop All Products <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <span className="text-secondary text-sm font-medium uppercase tracking-wider">Our Advantages</span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Rajput Marble's</h2>
            <div className="w-20 h-1 bg-secondary rounded-full my-2"></div>
            <p className="max-w-[800px] text-primary-foreground/80 md:text-lg">
              Experience the difference of working with Punjab's premier marble and granite supplier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {[
              {
                title: "Premium Quality",
                description: "We source only the finest marble and granite from around the world and within Pakistan",
                icon: <Star className="h-10 w-10 text-secondary" />,
              },
              {
                title: "Expert Craftsmanship",
                description: "Our skilled artisans bring decades of experience to every project we undertake",
                icon: <CheckCircle className="h-10 w-10 text-secondary" />,
              },
              {
                title: "Competitive Pricing",
                description: "We offer the best value without compromising on quality or service",
                icon: <TrendingUp className="h-10 w-10 text-secondary" />,
              },
              {
                title: "Lifetime Support",
                description: "We stand behind our products with maintenance advice and after-sales service",
                icon: <CheckCircle className="h-10 w-10 text-secondary" />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-primary-foreground/5 rounded-lg border border-primary-foreground/10 hover:border-secondary transition-all"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-primary-foreground/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Visualizer Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <span className="text-secondary text-sm font-medium uppercase tracking-wider">Visualize Your Space</span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Room Visualizer</h2>
            <div className="w-20 h-1 bg-secondary rounded-full my-2"></div>
            <p className="max-w-[800px] text-muted-foreground md:text-lg">
              See how our premium marble and granite will look in your space
            </p>
          </div>
          <RoomVisualizer />
        </div>
      </section>

      <FeaturedProjects />

      {/* Material Calculator Section */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <span className="text-secondary text-sm font-medium uppercase tracking-wider">Plan Your Project</span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Material Calculator</h2>
            <div className="w-20 h-1 bg-secondary rounded-full my-2"></div>
            <p className="max-w-[800px] text-muted-foreground md:text-lg">
              Calculate the perfect amount of material for your project
            </p>
          </div>
          <MaterialCalculator />
        </div>
      </section>

      {/* Luxury Showcase Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-secondary text-sm font-medium uppercase tracking-wider">Luxury Redefined</span>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mt-2 mb-6">
                Transform Your Space With Elegance
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                Our premium marble and granite collections bring timeless beauty and sophistication to any space. From
                classic Italian marbles to stunning Pakistani varieties, we offer the perfect stone for every project.
              </p>
              <div className="space-y-4">
                {[
                  "Exclusive collections from around the world",
                  "Custom cutting and finishing options",
                  "Expert installation services",
                  "Lifetime maintenance support",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  <Link href="/categories">Explore Our Collections</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=400"
                    alt="Luxury marble bathroom"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Elegant kitchen countertop"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Marble flooring"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=400"
                    alt="Luxury living room"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <span className="text-secondary text-sm font-medium uppercase tracking-wider">Client Testimonials</span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-secondary rounded-full my-2"></div>
            <p className="max-w-[800px] text-muted-foreground md:text-lg">
              Hear from our satisfied customers about their experience with Rajput Marble's & Granite
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
      <EmailSubscriptionPopup />
    </div>
  )
}

