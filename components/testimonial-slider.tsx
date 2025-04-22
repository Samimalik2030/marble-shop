"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Ayesha Khan",
    role: "Interior Designer",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "The quality of marble from Rajput Marble's & Granite is exceptional. My clients in Lahore are always impressed with the final result. Their Italian marble collection is truly world-class.",
    rating: 5,
  },
  {
    id: 2,
    name: "Faisal Ahmed",
    role: "Property Developer",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "We've used Rajput Marble's & Granite for multiple high-end residential projects in Punjab. Their material quality and service are consistently excellent. The room visualizer tool helped our clients make decisions faster.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sana Malik",
    role: "Homeowner",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "Renovating our kitchen with Black Galaxy granite from Rajput was the best decision. The material calculator helped us order the perfect amount, and the installation team from Lahore was professional and precise.",
    rating: 5,
  },
  {
    id: 4,
    name: "Usman Ali",
    role: "Architect",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "As an architect working on luxury projects in Punjab, I need reliable suppliers. Rajput Marble's & Granite has been my go-to for years. Their extensive collection and consistent quality make my job easier.",
    rating: 5,
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<"left" | "right" | null>(null)

  const nextTestimonial = () => {
    setDirection("right")
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setDirection("left")
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className={cn(
            "flex transition-transform duration-500 ease-in-out",
            direction === "left" ? "animate-slide-left" : direction === "right" ? "animate-slide-right" : "",
          )}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="w-full flex-shrink-0">
              <CardContent className="p-6 md:p-10">
                <div className="flex flex-col items-center text-center">
                  <Quote className="h-10 w-10 text-primary/20 mb-6" />
                  <p className="text-lg md:text-xl italic mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              index === currentIndex ? "bg-primary w-4" : "bg-primary/30",
            )}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-background shadow-md h-10 w-10 rounded-full hidden md:flex"
        onClick={prevTestimonial}
      >
        <ChevronLeft className="h-5 w-5" />
        <span className="sr-only">Previous testimonial</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-background shadow-md h-10 w-10 rounded-full hidden md:flex"
        onClick={nextTestimonial}
      >
        <ChevronRight className="h-5 w-5" />
        <span className="sr-only">Next testimonial</span>
      </Button>
    </div>
  )
}

