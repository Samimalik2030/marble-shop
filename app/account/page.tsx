"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Package, User, CreditCard, Heart, LogOut, Settings, ShoppingBag, Home, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"

export default function AccountPage() {
  const { data: session, status } = useSession({
    required: false,
    onUnauthenticated() {
      redirect("/auth/signin")
    },
  })
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("orders")

  // Loading state
  if (status === "loading") {
    return (
      <div className="min-h-screen bg-muted/30 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
      </div>
    )
  }

  // Mock data for orders
  const orders = [
    {
      id: "ORD-12345",
      date: "March 15, 2023",
      status: "Delivered",
      total: 599.99,
      items: [
        { name: "Carrara White Marble", quantity: 2, price: 259.98 },
        { name: "Black Galaxy Granite", quantity: 1, price: 89.99 },
      ],
    },
    {
      id: "ORD-12346",
      date: "February 28, 2023",
      status: "Processing",
      total: 249.99,
      items: [{ name: "Calacatta Gold Marble", quantity: 1, price: 249.99 }],
    },
  ]

  // Mock data for wishlist
  const wishlist = [
    {
      id: "1",
      name: "Honey Onyx",
      price: 199.99,
      image: "/placeholder.svg?height=200&width=200",
      category: "onyx",
      inStock: true,
    },
    {
      id: "2",
      name: "Ziarat White Marble",
      price: 119.99,
      image: "/placeholder.svg?height=200&width=200",
      category: "pakistani-marble",
      inStock: true,
    },
    {
      id: "3",
      name: "Blue Pearl Granite",
      price: 149.99,
      image: "/placeholder.svg?height=200&width=200",
      category: "granite",
      inStock: false,
    },
  ]

  return (
    <div className="bg-muted/30 min-h-screen py-10">
      <div className="container px-4 md:px-6">
        <div className="flex items-center gap-2 mb-6">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            <Home className="h-4 w-4" />
          </Link>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span>My Account</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <Card className="lg:col-span-1 border-2 hover:border-secondary/30 transition-all premium-product-card h-fit">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-muted">
                  <Image src="/placeholder.svg?height=100&width=100" alt="Profile" fill className="object-cover" />
                </div>
                <div>
                  <CardTitle>{session?.user?.name || "User"}</CardTitle>
                  <CardDescription>{session?.user?.email}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <nav className="space-y-1">
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${activeTab === "orders" ? "bg-muted" : ""}`}
                  onClick={() => setActiveTab("orders")}
                >
                  <Package className="mr-2 h-5 w-5" />
                  Orders
                </Button>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${activeTab === "wishlist" ? "bg-muted" : ""}`}
                  onClick={() => setActiveTab("wishlist")}
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Wishlist
                </Button>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${activeTab === "profile" ? "bg-muted" : ""}`}
                  onClick={() => setActiveTab("profile")}
                >
                  <User className="mr-2 h-5 w-5" />
                  Profile
                </Button>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${activeTab === "payment" ? "bg-muted" : ""}`}
                  onClick={() => setActiveTab("payment")}
                >
                  <CreditCard className="mr-2 h-5 w-5" />
                  Payment Methods
                </Button>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${activeTab === "settings" ? "bg-muted" : ""}`}
                  onClick={() => setActiveTab("settings")}
                >
                  <Settings className="mr-2 h-5 w-5" />
                  Settings
                </Button>
                <Separator className="my-2" />
                <Button
                  variant="ghost"
                  className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
                >
                  <LogOut className="mr-2 h-5 w-5" />
                  Sign Out
                </Button>
              </nav>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === "orders" && (
              <Card className="border-2 hover:border-secondary/30 transition-all premium-product-card">
                <CardHeader>
                  <CardTitle>My Orders</CardTitle>
                  <CardDescription>View and track your orders</CardDescription>
                </CardHeader>
                <CardContent>
                  {orders.length === 0 ? (
                    <div className="text-center py-8">
                      <ShoppingBag className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">No orders yet</h3>
                      <p className="text-muted-foreground mb-4">You haven't placed any orders yet.</p>
                      <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                        <Link href="/products">Start Shopping</Link>
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {orders.map((order) => (
                        <div key={order.id} className="border rounded-lg p-4">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="font-medium">{order.id}</h3>
                                <span
                                  className={`text-xs px-2 py-1 rounded-full ${
                                    order.status === "Delivered"
                                      ? "bg-green-100 text-green-800"
                                      : "bg-blue-100 text-blue-800"
                                  }`}
                                >
                                  {order.status}
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground">{order.date}</p>
                            </div>
                            <div className="mt-2 sm:mt-0">
                              <p className="font-medium">${order.total.toFixed(2)}</p>
                            </div>
                          </div>
                          <Separator className="my-3" />
                          <div className="space-y-2">
                            {order.items.map((item, index) => (
                              <div key={index} className="flex justify-between text-sm">
                                <span>
                                  {item.name} × {item.quantity}
                                </span>
                                <span>${item.price.toFixed(2)}</span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 flex justify-end">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {activeTab === "wishlist" && (
              <Card className="border-2 hover:border-secondary/30 transition-all premium-product-card">
                <CardHeader>
                  <CardTitle>My Wishlist</CardTitle>
                  <CardDescription>Items you've saved for later</CardDescription>
                </CardHeader>
                <CardContent>
                  {wishlist.length === 0 ? (
                    <div className="text-center py-8">
                      <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">Your wishlist is empty</h3>
                      <p className="text-muted-foreground mb-4">Save items you like for future reference.</p>
                      <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                        <Link href="/products">Browse Products</Link>
                      </Button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {wishlist.map((item) => (
                        <div key={item.id} className="border rounded-lg overflow-hidden group">
                          <div className="relative aspect-square">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            {!item.inStock && (
                              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                <span className="text-white font-medium">Out of Stock</span>
                              </div>
                            )}
                          </div>
                          <div className="p-3">
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{item.category.replace("-", " ")}</p>
                            <div className="flex items-center justify-between">
                              <span className="font-medium">${item.price.toFixed(2)}</span>
                              <div className="space-x-1">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-8 w-8 p-0"
                                  onClick={() => {
                                    toast({
                                      title: "Removed from wishlist",
                                      description: `${item.name} has been removed from your wishlist`,
                                    })
                                  }}
                                >
                                  <Heart className="h-4 w-4 fill-current" />
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-8 w-8 p-0"
                                  disabled={!item.inStock}
                                  onClick={() => {
                                    toast({
                                      title: "Added to cart",
                                      description: `${item.name} has been added to your cart`,
                                    })
                                  }}
                                >
                                  <ShoppingBag className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {activeTab === "profile" && (
              <Card className="border-2 hover:border-secondary/30 transition-all premium-product-card">
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Manage your personal information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name</label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded-md"
                        value={session?.user?.name || ""}
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email Address</label>
                      <input
                        type="email"
                        className="w-full p-2 border rounded-md"
                        value={session?.user?.email || ""}
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone Number</label>
                      <input type="tel" className="w-full p-2 border rounded-md" placeholder="Add your phone number" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Default Shipping Address</label>
                      <textarea
                        className="w-full p-2 border rounded-md"
                        rows={3}
                        placeholder="Add your shipping address"
                      ></textarea>
                    </div>
                    <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                      Update Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

