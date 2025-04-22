"use client"

import { useState } from "react"
import Image from "next/image"
import { Calculator, Check, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MaterialCalculator() {
  const [calculatorType, setCalculatorType] = useState("flooring")
  const [length, setLength] = useState("")
  const [width, setWidth] = useState("")
  const [height, setHeight] = useState("")
  const [thickness, setThickness] = useState("20")
  const [material, setMaterial] = useState("marble")
  const [quality, setQuality] = useState("premium")
  const [result, setResult] = useState<null | {
    area: number
    volume?: number
    slabs: number
    cost: number
    wastage: number
    totalCost: number
  }>(null)

  // Material prices in PKR per square foot
  const materialPrices = {
    marble: {
      premium: 1200,
      medium: 800,
      low: 500,
    },
    granite: {
      premium: 1500,
      medium: 1000,
      low: 700,
    },
    onyx: {
      premium: 2000,
      medium: 1500,
      low: 1000,
    },
  }

  // Calculate material requirements
  const calculateMaterial = () => {
    if (!length || !width) return

    const lengthInFeet = Number.parseFloat(length)
    const widthInFeet = Number.parseFloat(width)

    if (isNaN(lengthInFeet) || isNaN(widthInFeet)) return

    const area = lengthInFeet * widthInFeet
    let volume = 0

    if (calculatorType === "countertop" && height) {
      const heightInFeet = Number.parseFloat(height)
      if (!isNaN(heightInFeet)) {
        volume = area * heightInFeet
      }
    }

    const thicknessValue = Number.parseInt(thickness)
    const wastagePercentage = 10 // 10% wastage
    const wastage = area * (wastagePercentage / 100)
    const totalArea = area + wastage

    // Calculate number of slabs (assuming standard slab is 5.5 x 3 feet)
    const slabArea = 5.5 * 3
    const slabs = Math.ceil(totalArea / slabArea)

    // Calculate cost
    const pricePerSqFt =
      materialPrices[material as keyof typeof materialPrices][quality as keyof typeof materialPrices.marble]
    const cost = area * pricePerSqFt
    const totalCost = totalArea * pricePerSqFt

    setResult({
      area: Number.parseFloat(area.toFixed(2)),
      ...(volume ? { volume: Number.parseFloat(volume.toFixed(2)) } : {}),
      slabs,
      cost: Number.parseFloat(cost.toFixed(2)),
      wastage: Number.parseFloat(wastage.toFixed(2)),
      totalCost: Number.parseFloat(totalCost.toFixed(2)),
    })
  }

  const resetCalculator = () => {
    setLength("")
    setWidth("")
    setHeight("")
    setThickness("20")
    setMaterial("marble")
    setQuality("premium")
    setResult(null)
  }

  return (
    <div className="bg-muted/30 py-12">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Material Calculator</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Plan your project with precision using our material calculator. Estimate the amount of material needed and
            approximate costs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <Card className="border-2 hover:border-secondary/30 transition-all premium-product-card">
            <CardHeader>
              <CardTitle>Material Estimator</CardTitle>
              <CardDescription>Enter your project dimensions to calculate material requirements</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={calculatorType} onValueChange={setCalculatorType} className="mb-6">
                <TabsList className="grid grid-cols-2 mb-6">
                  <TabsTrigger
                    value="flooring"
                    className="data-[state=active]:bg-secondary data-[state=active]:text-white"
                  >
                    Flooring
                  </TabsTrigger>
                  <TabsTrigger
                    value="countertop"
                    className="data-[state=active]:bg-secondary data-[state=active]:text-white"
                  >
                    Countertop
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="flooring" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="length">Length (feet)</Label>
                      <Input
                        id="length"
                        type="number"
                        placeholder="Enter length"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="width">Width (feet)</Label>
                      <Input
                        id="width"
                        type="number"
                        placeholder="Enter width"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="countertop" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="counter-length">Length (feet)</Label>
                      <Input
                        id="counter-length"
                        type="number"
                        placeholder="Enter length"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="counter-width">Width (feet)</Label>
                      <Input
                        id="counter-width"
                        type="number"
                        placeholder="Enter width"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="counter-height">Height (feet)</Label>
                      <Input
                        id="counter-height"
                        type="number"
                        placeholder="Enter height (optional)"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="material">Material Type</Label>
                    <Select value={material} onValueChange={setMaterial}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select material" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="marble">Marble</SelectItem>
                        <SelectItem value="granite">Granite</SelectItem>
                        <SelectItem value="onyx">Onyx</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quality">Quality</Label>
                    <Select value={quality} onValueChange={setQuality}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select quality" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="premium">Premium</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="thickness">Thickness (mm)</Label>
                    <Select value={thickness} onValueChange={setThickness}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select thickness" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="16">16mm</SelectItem>
                        <SelectItem value="20">20mm (Standard)</SelectItem>
                        <SelectItem value="30">30mm (Premium)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-secondary hover:bg-secondary/90 text-white flex-1" onClick={calculateMaterial}>
                    <Calculator className="mr-2 h-4 w-4" />
                    Calculate
                  </Button>
                  <Button variant="outline" className="flex-1" onClick={resetCalculator}>
                    Reset
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div>
            {result ? (
              <Card className="border-2 hover:border-secondary/30 transition-all premium-product-card">
                <CardHeader className="bg-secondary/5">
                  <CardTitle>Calculation Results</CardTitle>
                  <CardDescription>Estimated material requirements and costs</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Total Area</p>
                        <p className="text-2xl font-bold">{result.area} sq ft</p>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Estimated Slabs</p>
                        <p className="text-2xl font-bold">{result.slabs}</p>
                      </div>
                      {result.volume && (
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <p className="text-sm text-muted-foreground">Volume</p>
                          <p className="text-2xl font-bold">{result.volume} cubic ft</p>
                        </div>
                      )}
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Wastage (10%)</p>
                        <p className="text-2xl font-bold">{result.wastage} sq ft</p>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-muted-foreground">Material Cost:</span>
                        <span>₨ {result.cost.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-muted-foreground">Wastage Cost:</span>
                        <span>₨ {(result.totalCost - result.cost).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t">
                        <span className="font-medium">Total Estimated Cost:</span>
                        <span className="text-xl font-bold">₨ {result.totalCost.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="bg-secondary/10 p-4 rounded-lg flex items-start gap-3">
                      <Info className="h-5 w-5 text-secondary mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Note</p>
                        <p className="text-xs text-muted-foreground">
                          This is an estimate only. Actual costs may vary based on specific material selection,
                          installation complexity, and other factors. Contact us for a precise quote.
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <Button className="bg-secondary hover:bg-secondary/90 text-white">Request Detailed Quote</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-muted/30 rounded-lg border-2 border-dashed">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Calculator className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Calculate Your Requirements</h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Enter your project dimensions on the left to get an estimate of material requirements and costs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-lg">
                  {[
                    { label: "Marble", price: "₨ 500-1,200 / sq ft" },
                    { label: "Granite", price: "₨ 700-1,500 / sq ft" },
                    { label: "Onyx", price: "₨ 1,000-2,000 / sq ft" },
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-3 rounded-lg shadow-sm text-center">
                      <p className="font-medium">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Why Choose Our Materials?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Premium Quality</p>
                    <p className="text-sm text-muted-foreground">
                      We source only the finest marble and granite from trusted quarries in Pakistan and around the
                      world.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Expert Installation</p>
                    <p className="text-sm text-muted-foreground">
                      Our skilled craftsmen ensure precise cutting and flawless installation for a perfect finish.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Competitive Pricing</p>
                    <p className="text-sm text-muted-foreground">
                      Direct sourcing allows us to offer premium materials at competitive prices.
                    </p>
                  </div>
                </li>
              </ul>
              <Button className="mt-6 bg-secondary hover:bg-secondary/90 text-white">View Our Materials</Button>
            </div>
            <div className="relative h-[300px] lg:h-auto">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Premium Marble Selection"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

