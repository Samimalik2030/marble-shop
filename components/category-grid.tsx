"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const categories = [
  {
    name: "Italian Marble",
    description: "Timeless elegance from Italy's finest quarries",
    image: "/placeholder.svg?height=400&width=300",
    slug: "italian-marble",
    featured: true,
  },
  {
    name: "Pakistani Marble",
    description: "Premium local marble with unique patterns",
    image: "/placeholder.svg?height=400&width=300",
    slug: "pakistani-marble",
    featured: true,
  },
  {
    name: "Premium Granite",
    description: "Durable luxury for countertops and flooring",
    image: "/placeholder.svg?height=400&width=300",
    slug: "granite",
    featured: true,
  },
  {
    name: "Exotic Onyx",
    description: "Translucent beauty for statement features",
    image: "/placeholder.svg?height=400&width=300",
    slug: "onyx",
    featured: true,
  },
  {
    name: "Designer Quartz",
    description: "Engineered perfection for modern spaces",
    image: "/placeholder.svg?height=400&width=300",
    slug: "quartz",
    featured: true,
  },
]

export default function CategoryGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {categories
        .filter((cat) => cat.featured)
        .map((category, index) => (
          <motion.div
            key={category.slug}
            className="relative overflow-hidden rounded-lg bg-background border-2 border-muted hover:border-secondary/30 transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <Link href={`/categories/${category.slug}`} className="block h-full">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500"
                  style={{
                    transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
                  }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300"
                  style={{
                    opacity: hoveredIndex === index ? 0.9 : 0.7,
                  }}
                />

                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <motion.h3
                    className="text-xl font-semibold mb-2 gold-accent-line"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: hoveredIndex === index ? 0 : 10,
                      opacity: 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {category.name}
                  </motion.h3>

                  <motion.p
                    className="text-sm text-white/80"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: hoveredIndex === index ? 0 : 10,
                      opacity: hoveredIndex === index ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {category.description}
                  </motion.p>

                  <motion.div
                    className="mt-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: hoveredIndex === index ? 0 : 20,
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <span className="inline-flex items-center text-secondary text-sm font-medium">
                      Explore Collection
                      <svg
                        className="w-4 h-4 ml-1 transition-transform duration-300"
                        style={{
                          transform: hoveredIndex === index ? "translateX(4px)" : "translateX(0)",
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </motion.div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
    </div>
  )
}

