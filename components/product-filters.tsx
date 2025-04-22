"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"

interface ProductFiltersProps {
  className?: string
}

export default function ProductFilters({ className }: ProductFiltersProps) {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500])

  const categories = [
    { id: "italian-marble", label: "Italian Marble" },
    { id: "pakistani-marble", label: "Pakistani Marble" },
    { id: "granite", label: "Granite" },
    { id: "onyx", label: "Onyx" },
    { id: "quartz", label: "Quartz" },
    { id: "travertine", label: "Travertine" },
  ]

  const origins = [
    { id: "italy", label: "Italy" },
    { id: "pakistan", label: "Pakistan" },
    { id: "india", label: "India" },
    { id: "spain", label: "Spain" },
    { id: "turkey", label: "Turkey" },
    { id: "brazil", label: "Brazil" },
    { id: "norway", label: "Norway" },
  ]

  const finishes = [
    { id: "polished", label: "Polished" },
    { id: "honed", label: "Honed" },
    { id: "brushed", label: "Brushed" },
    { id: "leathered", label: "Leathered" },
    { id: "flamed", label: "Flamed" },
  ]

  const colors = [
    { id: "white", label: "White", color: "bg-white border border-gray-200" },
    { id: "black", label: "Black", color: "bg-black" },
    { id: "beige", label: "Beige", color: "bg-amber-100" },
    { id: "brown", label: "Brown", color: "bg-amber-800" },
    { id: "gray", label: "Gray", color: "bg-gray-400" },
    { id: "green", label: "Green", color: "bg-emerald-600" },
    { id: "blue", label: "Blue", color: "bg-blue-600" },
    { id: "red", label: "Red", color: "bg-red-600" },
  ]

  return (
    <div className={cn("space-y-6", className)}>
      <div>
        <h3 className="text-base font-medium mb-4">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox id={`category-${category.id}`} />
              <label
                htmlFor={`category-${category.id}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {category.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex w-full items-center justify-between py-1">
          <h3 className="text-base font-medium">Price Range</h3>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-3">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">${priceRange[0]}</span>
              <span className="text-sm">${priceRange[1]}</span>
            </div>
            <Slider
              defaultValue={[0, 500]}
              max={500}
              step={10}
              value={[priceRange[0], priceRange[1]]}
              onValueChange={(value) => setPriceRange([value[0], value[1]])}
              className="py-4"
            />
            <div className="flex items-center justify-between gap-4">
              <Button variant="outline" size="sm" className="h-8 w-full">
                Apply
              </Button>
              <Button variant="ghost" size="sm" className="h-8">
                Reset
              </Button>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Separator />

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex w-full items-center justify-between py-1">
          <h3 className="text-base font-medium">Origin</h3>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-3">
          <div className="space-y-3">
            {origins.map((origin) => (
              <div key={origin.id} className="flex items-center space-x-2">
                <Checkbox id={`origin-${origin.id}`} />
                <label
                  htmlFor={`origin-${origin.id}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {origin.label}
                </label>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Separator />

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex w-full items-center justify-between py-1">
          <h3 className="text-base font-medium">Finish</h3>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-3">
          <div className="space-y-3">
            {finishes.map((finish) => (
              <div key={finish.id} className="flex items-center space-x-2">
                <Checkbox id={`finish-${finish.id}`} />
                <label
                  htmlFor={`finish-${finish.id}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {finish.label}
                </label>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Separator />

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex w-full items-center justify-between py-1">
          <h3 className="text-base font-medium">Color</h3>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-3">
          <div className="grid grid-cols-4 gap-3">
            {colors.map((color) => (
              <div key={color.id} className="flex flex-col items-center gap-1">
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full p-0">
                  <div className={cn("h-6 w-6 rounded-full", color.color)} />
                  <span className="sr-only">{color.label}</span>
                </Button>
                <span className="text-xs">{color.label}</span>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Separator />

      <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">Apply Filters</Button>
    </div>
  )
}

