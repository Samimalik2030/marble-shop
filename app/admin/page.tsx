"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import {
  LayoutDashboard,
  Package,
  Users,
  ShoppingCart,
  FileText,
  Settings,
  BarChart3,
  LogOut,
  Plus,
  Search,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AdminDashboard() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/auth/signin")
    },
  })

  const [activeTab, setActiveTab] = useState("dashboard")

  // Mock data for dashboard
  const dashboardStats = [
    { title: "Total Sales", value: "₨ 1,245,600", change: "+12.5%", icon: BarChart3 },
    { title: "Orders", value: "156", change: "+8.2%", icon: ShoppingCart },
    { title: "Customers", value: "2,450", change: "+5.3%", icon: Users },
    { title: "Products", value: "124", change: "+2.1%", icon: Package },
  ]

  // Mock data for products
  const products = [
    {
      id: "PRD001",
      name: "Carrara White Marble",
      category: "Marble",
      price: 12500,
      stock: 45,
      quality: "Premium",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: "PRD002",
      name: "Black Galaxy Granite",
      category: "Granite",
      price: 9800,
      stock: 32,
      quality: "Premium",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: "PRD003",
      name: "Ziarat White Marble",
      category: "Pakistani Marble",
      price: 7500,
      stock: 60,
      quality: "Medium",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: "PRD004",
      name: "Honey Onyx",
      category: "Onyx",
      price: 15000,
      stock: 18,
      quality: "Premium",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: "PRD005",
      name: "Thar Beige Marble",
      category: "Pakistani Marble",
      price: 5500,
      stock: 75,
      quality: "Low",
      image: "/placeholder.svg?height=50&width=50",
    },
  ]

  // Mock data for orders
  const orders = [
    {
      id: "ORD12345",
      customer: "Ahmed Khan",
      date: "2023-03-15",
      status: "Delivered",
      total: 25600,
    },
    {
      id: "ORD12346",
      customer: "Fatima Ali",
      date: "2023-03-18",
      status: "Processing",
      total: 18900,
    },
    {
      id: "ORD12347",
      customer: "Muhammad Raza",
      date: "2023-03-20",
      status: "Pending",
      total: 32400,
    },
    {
      id: "ORD12348",
      customer: "Ayesha Malik",
      date: "2023-03-22",
      status: "Shipped",
      total: 45000,
    },
    {
      id: "ORD12349",
      customer: "Zain Abbas",
      date: "2023-03-25",
      status: "Delivered",
      total: 12800,
    },
  ]

  // Loading state
  if (status === "loading") {
    return (
      <div className="min-h-screen bg-muted/30 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-muted/30">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col bg-white border-r shadow-sm">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold">Admin Panel</h2>
          <p className="text-sm text-muted-foreground">Rajput Marble's & Granite</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <Button
            variant={activeTab === "dashboard" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("dashboard")}
          >
            <LayoutDashboard className="mr-2 h-5 w-5" />
            Dashboard
          </Button>
          <Button
            variant={activeTab === "products" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("products")}
          >
            <Package className="mr-2 h-5 w-5" />
            Products
          </Button>
          <Button
            variant={activeTab === "orders" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("orders")}
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Orders
          </Button>
          <Button
            variant={activeTab === "customers" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("customers")}
          >
            <Users className="mr-2 h-5 w-5" />
            Customers
          </Button>
          <Button
            variant={activeTab === "reports" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("reports")}
          >
            <FileText className="mr-2 h-5 w-5" />
            Reports
          </Button>
          <Button
            variant={activeTab === "settings" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("settings")}
          >
            <Settings className="mr-2 h-5 w-5" />
            Settings
          </Button>
        </nav>
        <div className="p-4 border-t">
          <Button variant="outline" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50">
            <LogOut className="mr-2 h-5 w-5" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Mobile Header */}
        <div className="md:hidden p-4 border-b bg-white flex items-center justify-between">
          <h2 className="text-xl font-bold">Admin Panel</h2>
          <Button variant="outline" size="icon">
            <LayoutDashboard className="h-5 w-5" />
          </Button>
        </div>

        {/* Content Area */}
        <div className="p-6">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-muted-foreground mb-6">
            <Link href="/admin" className="hover:text-foreground">
              Admin
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-foreground capitalize">{activeTab}</span>
          </div>

          {/* Dashboard Tab */}
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              <h1 className="text-2xl font-bold">Dashboard Overview</h1>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dashboardStats.map((stat, index) => (
                  <Card key={index} className="border-2 hover:border-secondary/30 transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                          <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                          <p
                            className={`text-xs mt-1 ${stat.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}
                          >
                            {stat.change} from last month
                          </p>
                        </div>
                        <div className="h-12 w-12 bg-secondary/10 rounded-full flex items-center justify-center">
                          <stat.icon className="h-6 w-6 text-secondary" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Recent Orders */}
              <Card className="border-2 hover:border-secondary/30 transition-all">
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>Overview of the latest customer orders</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {orders.slice(0, 5).map((order) => (
                        <TableRow key={order.id}>
                          <TableCell className="font-medium">{order.id}</TableCell>
                          <TableCell>{order.customer}</TableCell>
                          <TableCell>{order.date}</TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={
                                order.status === "Delivered"
                                  ? "bg-green-100 text-green-800 hover:bg-green-100"
                                  : order.status === "Shipped"
                                    ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                    : order.status === "Processing"
                                      ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                                      : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                              }
                            >
                              {order.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">₨ {order.total.toLocaleString()}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <div className="flex justify-end mt-4">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#orders">View All Orders</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Products Tab */}
          {activeTab === "products" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h1 className="text-2xl font-bold">Products Management</h1>
                <Button className="bg-secondary hover:bg-secondary/90 text-white">
                  <Plus className="mr-2 h-4 w-4" /> Add New Product
                </Button>
              </div>

              <Card className="border-2 hover:border-secondary/30 transition-all">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle>Product Inventory</CardTitle>
                      <CardDescription>Manage your product catalog</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input
                        placeholder="Search products..."
                        className="w-full sm:w-[250px]"
                        icon={<Search className="h-4 w-4 opacity-50" />}
                      />
                      <Select defaultValue="all">
                        <SelectTrigger className="w-[130px]">
                          <SelectValue placeholder="Filter by" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Categories</SelectItem>
                          <SelectItem value="marble">Marble</SelectItem>
                          <SelectItem value="granite">Granite</SelectItem>
                          <SelectItem value="onyx">Onyx</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Quality</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Stock</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {products.map((product) => (
                        <TableRow key={product.id}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded overflow-hidden bg-muted">
                                <Image
                                  src={product.image || "/placeholder.svg"}
                                  alt={product.name}
                                  width={40}
                                  height={40}
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <p className="font-medium">{product.name}</p>
                                <p className="text-xs text-muted-foreground">{product.id}</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{product.category}</TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={
                                product.quality === "Premium"
                                  ? "bg-purple-100 text-purple-800 hover:bg-purple-100"
                                  : product.quality === "Medium"
                                    ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                    : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                              }
                            >
                              {product.quality}
                            </Badge>
                          </TableCell>
                          <TableCell>₨ {product.price.toLocaleString()}</TableCell>
                          <TableCell>
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                product.stock > 50
                                  ? "bg-green-100 text-green-800"
                                  : product.stock > 20
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-red-100 text-red-800"
                              }`}
                            >
                              {product.stock} units
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="outline" size="icon" className="h-8 w-8">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <div className="flex items-center justify-between mt-4">
                    <p className="text-sm text-muted-foreground">Showing 5 of 124 products</p>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 bg-secondary text-white hover:bg-secondary/90"
                      >
                        1
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        2
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        3
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === "orders" && (
            <div className="space-y-6">
              <h1 className="text-2xl font-bold">Orders Management</h1>

              <Card className="border-2 hover:border-secondary/30 transition-all">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle>Order History</CardTitle>
                      <CardDescription>View and manage customer orders</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input
                        placeholder="Search orders..."
                        className="w-full sm:w-[250px]"
                        icon={<Search className="h-4 w-4 opacity-50" />}
                      />
                      <Select defaultValue="all">
                        <SelectTrigger className="w-[130px]">
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Status</SelectItem>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="processing">Processing</SelectItem>
                          <SelectItem value="shipped">Shipped</SelectItem>
                          <SelectItem value="delivered">Delivered</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {orders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell className="font-medium">{order.id}</TableCell>
                          <TableCell>{order.customer}</TableCell>
                          <TableCell>{order.date}</TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={
                                order.status === "Delivered"
                                  ? "bg-green-100 text-green-800 hover:bg-green-100"
                                  : order.status === "Shipped"
                                    ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                    : order.status === "Processing"
                                      ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                                      : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                              }
                            >
                              {order.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">₨ {order.total.toLocaleString()}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="outline" size="sm">
                                View
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-red-500 hover:text-red-600 hover:bg-red-50"
                              >
                                Cancel
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <div className="flex items-center justify-between mt-4">
                    <p className="text-sm text-muted-foreground">Showing 5 of 156 orders</p>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 bg-secondary text-white hover:bg-secondary/90"
                      >
                        1
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        2
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        3
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

