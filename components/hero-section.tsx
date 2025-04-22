"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Summer Collection 2025",
      description: "Discover the latest trends and styles for the upcoming season",
      image: "/placeholder.svg?height=600&width=1200",
      cta: "Shop Now",
      link: "/categories/summer",
      position: "left",
    },
    {
      title: "New Arrivals",
      description: "Be the first to explore our freshest additions",
      image: "/placeholder.svg?height=600&width=1200",
      cta: "Explore",
      link: "/new-arrivals",
      position: "right",
    },
  ]

  const currentSlideData = slides[currentSlide]

  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={cn(
                "absolute inset-0 transition-opacity duration-1000",
                index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none",
              )}
            >
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }}>
                <div className="absolute inset-0 bg-black/40" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative h-full container flex items-center">
        <div
          className={cn(
            "max-w-md space-y-5 text-white transition-all duration-500",
            currentSlideData.position === "right" ? "ml-auto" : "",
          )}
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{currentSlideData.title}</h1>
          <p className="text-lg md:text-xl">{currentSlideData.description}</p>
          <Button asChild size="lg" className="mt-4">
            <Link href={currentSlideData.link} className="flex items-center gap-2">
              {currentSlideData.cta} <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn("w-3 h-3 rounded-full transition-all", index === currentSlide ? "bg-white" : "bg-white/50")}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

