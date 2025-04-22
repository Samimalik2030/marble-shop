"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CreditCard, LockIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"

// Mock data - in a real app, this would come from your cart state or API
const cartItems = [
  {
    id: "1",
    name: "Premium Cotton T-Shirt",
    price: 29.99,
    image: "/placeholder.svg?height=80&width=80",
    color: "Black",
    size: "M",
    quantity: 2,
  },
  {
    id: "2",
    name: "Classic Denim Jeans",
    price: 59.99,
    image: "/placeholder.svg?height=80&width=80",
    color: "Blue",
    size: "32",
    quantity: 1,
  },
]

export default function CheckoutPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 4.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Order placed successfully!",
        description: "Thank you for your purchase. Your order has been placed.",
        duration: 5000,
      })
      setIsSubmitting(false)
      // In a real app, you would redirect to a success page
    }, 2000)
  }

  return (
    <div className="container px-4 md:px-6 py-6 md:py-10">
      <div className="mb-6">
        <Button variant="ghost" asChild className="p-0">
          <Link href="/cart" className="flex items-center text-muted-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to cart
          </Link>
        </Button>
      </div>

      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Tabs defaultValue="guest" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="guest">Guest Checkout</TabsTrigger>
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="guest" className="mt-6">
              <form onSubmit={handleSubmit}>
                <div className="space-y-8">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <Input id="first-name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input id="last-name" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" required />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
                        <Input id="apartment" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input id="city" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">State</Label>
                          <Input id="state" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="zip">ZIP Code</Label>
                          <Input id="zip" required />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                    <RadioGroup defaultValue="card" className="space-y-4">
                      <div className="flex items-center space-x-2 rounded-md border p-4">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex-1 cursor-pointer">
                          <div className="flex items-center">
                            <CreditCard className="mr-2 h-5 w-5" />
                            Credit / Debit Card
                          </div>
                        </Label>
                        <div className="flex items-center space-x-1">
                          <Image src="/placeholder.svg?height=30&width=40" alt="Visa" width={40} height={30} />
                          <Image src="/placeholder.svg?height=30&width=40" alt="Mastercard" width={40} height={30} />
                          <Image src="/placeholder.svg?height=30&width=40" alt="Amex" width={40} height={30} />
                        </div>
                      </div>

                      <div className="rounded-md border p-4">
                        <div className="grid grid-cols-1 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="card-number">Card Number</Label>
                            <Input id="card-number" placeholder="1234 5678 9012 3456" required />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="expiry">Expiry Date</Label>
                              <Input id="expiry" placeholder="MM/YY" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="cvc">CVC</Label>
                              <Input id="cvc" placeholder="123" required />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="name-on-card">Name on Card</Label>
                            <Input id="name-on-card" required />
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 rounded-md border p-4">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                          <div className="flex items-center">
                            <Image src="/placeholder.svg?height=20&width=80" alt="PayPal" width={80} height={20} />
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="flex items-center space-x-2 text-sm">
                    <LockIcon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Your payment information is secure and encrypted</span>
                  </div>

                  <div className="lg:hidden">
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Processing..." : `Pay $${total.toFixed(2)}`}
                    </Button>
                  </div>
                </div>
              </form>
            </TabsContent>
            <TabsContent value="login" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">Email</Label>
                      <Input id="login-email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="login-password">Password</Label>
                        <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      <Input id="login-password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full">
                      Sign In
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="signup" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="signup-first-name">First Name</Label>
                        <Input id="signup-first-name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-last-name">Last Name</Label>
                        <Input id="signup-last-name" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <Input id="signup-email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <Input id="signup-password" type="password" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-confirm-password">Confirm Password</Label>
                      <Input id="signup-confirm-password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full">
                      Create Account
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <div className="rounded-lg border shadow-sm">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative h-16 w-16 rounded-md overflow-hidden bg-muted flex-shrink-0">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        {item.quantity}
                      </div>
                    </div>

                    <div className="flex-1">
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.color} • Size: {item.size}
                      </p>
                      <p className="text-sm font-medium mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>

                <Separator className="my-2" />

                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6 hidden lg:block">
                <Button type="submit" className="w-full" form="checkout-form" disabled={isSubmitting}>
                  {isSubmitting ? "Processing..." : `Pay $${total.toFixed(2)}`}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

