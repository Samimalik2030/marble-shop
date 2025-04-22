"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data - in a real app, this would come from your cart state or API
const initialCartItems = [
  {
    id: "1",
    name: "Carrara White Marble",
    price: 129.99,
    image: "/placeholder.svg?height=200&width=200",
    color: "White",
    size: "24x24",
    thickness: "15mm",
    finish: "Polished",
    quantity: 10,
    slug: "carrara-white-marble",
  },
  {
    id: "2",
    name: "Black Galaxy Granite",
    price: 89.99,
    image: "/placeholder.svg?height=200&width=200",
    color: "Black",
    size: "24x24",
    thickness: "20mm",
    finish: "Polished",
    quantity: 15,
    slug: "black-galaxy-granite",
  },
]

export default function CartPage() {
  const { toast } = useToast()
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [promoCode, setPromoCode] = useState("")
  const [isApplyingPromo, setIsApplyingPromo] = useState(false)

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return

    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))

    toast({
      title: "Item removed",
      description: "The item has been removed from your cart",
      duration: 3000,
    })
  }

  const applyPromoCode = () => {
    if (!promoCode) return

    setIsApplyingPromo(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Invalid promo code",
        description: "The promo code you entered is invalid or expired",
        variant: "destructive",
        duration: 3000,
      })
      setIsApplyingPromo(false)
    }, 1000)
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 4.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <div className="bg-muted/30 min-h-screen py-10">
      <div className="container px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

        {cartItems.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent className="flex flex-col items-center justify-center">
              <div className="rounded-full bg-muted p-6 mb-4">
                <ShoppingBag className="h-10 w-10 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">Looks like you haven't added anything to your cart yet.</p>
              <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="/products">Continue Shopping</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Shopping Cart ({cartItems.length} items)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex flex-col sm:flex-row gap-4 pb-6 border-b">
                        <div className="relative h-24 w-24 rounded-md overflow-hidden bg-muted flex-shrink-0">
                          <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                        </div>

                        <div className="flex flex-1 flex-col justify-between">
                          <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                            <div>
                              <Link
                                href={`/products/${item.slug}`}
                                className="font-medium hover:text-secondary transition-colors"
                              >
                                {item.name}
                              </Link>
                              <div className="text-sm text-muted-foreground mt-1 space-y-1">
                                <div>Size: {item.size}</div>
                                <div>Thickness: {item.thickness}</div>
                                <div>Finish: {item.finish}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                              <div className="text-sm text-muted-foreground mt-1">
                                ${item.price.toFixed(2)} per sq ft
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center space-x-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="h-4 w-4" />
                                <span className="sr-only">Decrease quantity</span>
                              </Button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="h-4 w-4" />
                                <span className="sr-only">Increase quantity</span>
                              </Button>
                            </div>

                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-muted-foreground hover:text-destructive"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 className="h-4 w-4 mr-2" />
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="mt-6 flex justify-between">
                <Button variant="outline" asChild>
                  <Link href="/products">Continue Shopping</Link>
                </Button>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>

                    <Separator />

                    <div className="flex justify-between font-medium text-lg">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="border-input/50 focus-visible:ring-secondary"
                      />
                      <Button
                        variant="outline"
                        onClick={applyPromoCode}
                        disabled={isApplyingPromo || !promoCode}
                        className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                      >
                        {isApplyingPromo ? "Applying..." : "Apply"}
                      </Button>
                    </div>

                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground" asChild>
                      <Link href="/checkout" className="flex items-center justify-center">
                        Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

