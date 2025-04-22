"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const slides = [
    {
      title: "Exquisite Italian Marble",
      subtitle: "The Epitome of Luxury",
      description:
        "Transform your spaces with our premium Italian marble collection, handpicked from the finest quarries for unparalleled elegance",
      image: "/placeholder.svg?height=800&width=1600",
      cta: "Explore Collection",
      link: "/categories/italian-marble",
      position: "center",
    },
    {
      title: "Premium Pakistani Marble",
      subtitle: "Local Luxury, Global Standards",
      description:
        "Discover our exclusive collection of Pakistani marble, featuring unique patterns and exceptional durability",
      image: "/placeholder.svg?height=800&width=1600",
      cta: "View Collection",
      link: "/categories/pakistani-marble",
      position: "center",
    },
    {
      title: "Luxury Granite Countertops",
      subtitle: "Timeless Elegance for Your Kitchen",
      description:
        "Elevate your kitchen with our premium granite countertops, combining stunning aesthetics with unmatched durability",
      image: "/placeholder.svg?height=800&width=1600",
      cta: "Shop Granite",
      link: "/categories/granite",
      position: "center",
    },
    {
      title: "Exotic Onyx Collection",
      subtitle: "Nature's Translucent Masterpiece",
      description:
        "Create breathtaking backlit features with our rare onyx collection, showcasing nature's most dramatic patterns",
      image: "/placeholder.svg?height=800&width=1600",
      cta: "Discover Onyx",
      link: "/categories/onyx",
      position: "center",
    },
    {
      title: "Custom Marble Solutions",
      subtitle: "Tailored to Your Vision",
      description:
        "From concept to creation, our bespoke marble solutions bring your unique design vision to life with precision craftsmanship",
      image: "/placeholder.svg?height=800&width=1600",
      cta: "Custom Orders",
      link: "/contact",
      position: "center",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide()
    }, 6000)

    return () => clearInterval(interval)
  }, [currentSlide])

  const goToSlide = (index: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide(index)
    setTimeout(() => setIsAnimating(false), 1000)
  }

  const goToPrevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 1000)
  }

  const goToNextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 1000)
  }

  const currentSlideData = slides[currentSlide]

  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
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
              <div
                className="absolute inset-0 bg-cover bg-center transform transition-transform duration-10000 ease-out scale-110"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  animation: index === currentSlide ? "slowZoom 6s forwards" : "none",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative h-full container flex items-center justify-center">
        <div
          className={cn(
            "max-w-3xl space-y-6 text-white text-center",
            currentSlideData.position === "left"
              ? "mr-auto text-left"
              : currentSlideData.position === "right"
                ? "ml-auto text-right"
                : "mx-auto text-center",
          )}
        >
          <div className="overflow-hidden">
            <span
              className="text-secondary text-sm md:text-base font-medium uppercase tracking-wider block"
              style={{
                animation: "slideInUp 0.6s ease forwards",
                opacity: 0,
                transform: "translateY(20px)",
              }}
            >
              {currentSlideData.subtitle}
            </span>
          </div>

          <div className="overflow-hidden">
            <h1
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
              style={{
                animation: "slideInUp 0.6s 0.2s ease forwards",
                opacity: 0,
                transform: "translateY(20px)",
              }}
            >
              {currentSlideData.title}
            </h1>
          </div>

          <div className="overflow-hidden">
            <p
              className="text-lg md:text-xl mx-auto max-w-xl text-white/90"
              style={{
                animation: "slideInUp 0.6s 0.4s ease forwards",
                opacity: 0,
                transform: "translateY(20px)",
              }}
            >
              {currentSlideData.description}
            </p>
          </div>

          <div className="pt-4 overflow-hidden">
            <div
              style={{
                animation: "slideInUp 0.6s 0.6s ease forwards",
                opacity: 0,
                transform: "translateY(20px)",
              }}
            >
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-black font-medium">
                <Link href={currentSlideData.link} className="flex items-center gap-2">
                  {currentSlideData.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 h-12 w-12 rounded-full"
        onClick={goToPrevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 h-12 w-12 rounded-full"
        onClick={goToNextSlide}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentSlide ? "bg-secondary w-10" : "bg-white/50 hover:bg-white/80",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

