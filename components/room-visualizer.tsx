"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

const roomTypes = [
  { id: "bathroom", name: "Bathroom" },
  { id: "kitchen", name: "Kitchen" },
  { id: "living", name: "Living Room" },
  { id: "floor", name: "Flooring" },
]

const materials = {
  bathroom: [
    { id: "carrara", name: "Carrara White", image: "/placeholder.svg?height=100&width=100" },
    { id: "calacatta", name: "Calacatta Gold", image: "/placeholder.svg?height=100&width=100" },
    { id: "statuario", name: "Statuario", image: "/placeholder.svg?height=100&width=100" },
    { id: "emperador", name: "Emperador Dark", image: "/placeholder.svg?height=100&width=100" },
  ],
  kitchen: [
    { id: "black-galaxy", name: "Black Galaxy", image: "/placeholder.svg?height=100&width=100" },
    { id: "kashmir-white", name: "Kashmir White", image: "/placeholder.svg?height=100&width=100" },
    { id: "blue-pearl", name: "Blue Pearl", image: "/placeholder.svg?height=100&width=100" },
    { id: "tan-brown", name: "Tan Brown", image: "/placeholder.svg?height=100&width=100" },
  ],
  living: [
    { id: "crema-marfil", name: "Crema Marfil", image: "/placeholder.svg?height=100&width=100" },
    { id: "botticino", name: "Botticino", image: "/placeholder.svg?height=100&width=100" },
    { id: "travertine", name: "Travertine", image: "/placeholder.svg?height=100&width=100" },
    { id: "limestone", name: "Limestone", image: "/placeholder.svg?height=100&width=100" },
  ],
  floor: [
    { id: "marble-floor", name: "Marble Flooring", image: "/placeholder.svg?height=100&width=100" },
    { id: "granite-floor", name: "Granite Flooring", image: "/placeholder.svg?height=100&width=100" },
    { id: "onyx-floor", name: "Onyx Flooring", image: "/placeholder.svg?height=100&width=100" },
    { id: "quartz-floor", name: "Quartz Flooring", image: "/placeholder.svg?height=100&width=100" },
  ],
}

const roomImages = {
  bathroom: {
    default: "/placeholder.svg?height=600&width=800",
    carrara: "/placeholder.svg?height=600&width=800",
    calacatta: "/placeholder.svg?height=600&width=800",
    statuario: "/placeholder.svg?height=600&width=800",
    emperador: "/placeholder.svg?height=600&width=800",
  },
  kitchen: {
    default: "/placeholder.svg?height=600&width=800",
    "black-galaxy": "/placeholder.svg?height=600&width=800",
    "kashmir-white": "/placeholder.svg?height=600&width=800",
    "blue-pearl": "/placeholder.svg?height=600&width=800",
    "tan-brown": "/placeholder.svg?height=600&width=800",
  },
  living: {
    default: "/placeholder.svg?height=600&width=800",
    "crema-marfil": "/placeholder.svg?height=600&width=800",
    botticino: "/placeholder.svg?height=600&width=800",
    travertine: "/placeholder.svg?height=600&width=800",
    limestone: "/placeholder.svg?height=600&width=800",
  },
  floor: {
    default: "/placeholder.svg?height=600&width=800",
    "marble-floor": "/placeholder.svg?height=600&width=800",
    "granite-floor": "/placeholder.svg?height=600&width=800",
    "onyx-floor": "/placeholder.svg?height=600&width=800",
    "quartz-floor": "/placeholder.svg?height=600&width=800",
  },
}

export default function RoomVisualizer() {
  const [selectedRoom, setSelectedRoom] = useState("bathroom")
  const [selectedMaterial, setSelectedMaterial] = useState("")

  const handleRoomChange = (room: string) => {
    setSelectedRoom(room)
    setSelectedMaterial("")
  }

  const handleMaterialSelect = (materialId: string) => {
    setSelectedMaterial(materialId)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted">
          <Image
            src={
              selectedMaterial
                ? roomImages[selectedRoom as keyof typeof roomImages][
                    selectedMaterial as keyof (typeof roomImages)[keyof typeof roomImages]
                  ]
                : roomImages[selectedRoom as keyof typeof roomImages].default
            }
            alt={`${selectedRoom} visualization`}
            fill
            className="object-cover"
          />
          {!selectedMaterial && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="text-center text-white p-6 max-w-md">
                <h3 className="text-2xl font-bold mb-2">Select a Material</h3>
                <p>Choose from our premium materials to visualize how they would look in your space</p>
              </div>
            </div>
          )}
        </div>

        {selectedMaterial && (
          <div className="mt-4 flex justify-end">
            <Button>
              Shop This Look <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      <div>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Room Visualizer</h3>
            <p className="text-muted-foreground mb-6">
              Select a room type and material to visualize how our premium marble and granite products will look in your
              space.
            </p>

            <Tabs defaultValue="bathroom" value={selectedRoom} onValueChange={handleRoomChange} className="w-full">
              <TabsList className="grid grid-cols-4 w-full">
                {roomTypes.map((room) => (
                  <TabsTrigger key={room.id} value={room.id}>
                    {room.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {roomTypes.map((room) => (
                <TabsContent key={room.id} value={room.id} className="mt-6">
                  <div className="grid grid-cols-2 gap-4">
                    {materials[room.id as keyof typeof materials].map((material) => (
                      <div
                        key={material.id}
                        className={`cursor-pointer rounded-lg p-2 border transition-all ${selectedMaterial === material.id ? "border-primary ring-2 ring-primary/20" : "border-muted hover:border-primary/50"}`}
                        onClick={() => handleMaterialSelect(material.id)}
                      >
                        <div className="relative aspect-square rounded-md overflow-hidden mb-2">
                          <Image
                            src={material.image || "/placeholder.svg"}
                            alt={material.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p className="text-sm font-medium text-center">{material.name}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

