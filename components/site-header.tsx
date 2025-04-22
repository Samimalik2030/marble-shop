"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Heart, Menu, Search, ShoppingBag, User, X, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

export default function SiteHeader() {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const navigationItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Collection", href: "/categories" },
    { title: "Products", href: "/products" },
    { title: "Room Ideas", href: "/room-ideas" },
    { title: "Gallery", href: "/gallery" },
    { title: "Marble Care & Info", href: "/marble-care" },
    { title: "Contact", href: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-background",
      )}
    >
      {/* Top bar with contact info */}
      <div className="hidden md:block bg-primary text-primary-foreground py-2">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-secondary" />
              <span>+92 300 123 4567</span>
            </div>
            <span>|</span>
            <span>Free shipping on orders over $1000</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/track-order" className="hover:text-secondary transition-colors">
              Track Order
            </Link>
            <Link href="/store-locator" className="hover:text-secondary transition-colors">
              Store Locator
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="border-b border-border/40">
        <div className="container flex h-20 items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="py-6 border-b">
                  <Link href="/" className="flex items-center gap-2">
                    <span className="font-bold text-xl">RAJPUT MARBLE'S & GRANITE</span>
                  </Link>
                </div>
                <nav className="flex flex-col gap-6 mt-8">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-secondary",
                        pathname === item.href ? "text-secondary" : "text-foreground",
                      )}
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto py-6 border-t">
                  <div className="flex flex-col gap-4">
                    <Link
                      href="/account"
                      className="flex items-center gap-2 text-foreground hover:text-secondary transition-colors"
                    >
                      <User className="h-5 w-5" />
                      <span>Account</span>
                    </Link>
                    <Link
                      href="/wishlist"
                      className="flex items-center gap-2 text-foreground hover:text-secondary transition-colors"
                    >
                      <Heart className="h-5 w-5" />
                      <span>Wishlist</span>
                    </Link>
                    <Link
                      href="/cart"
                      className="flex items-center gap-2 text-foreground hover:text-secondary transition-colors"
                    >
                      <ShoppingBag className="h-5 w-5" />
                      <span>Cart</span>
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl">RAJPUT MARBLE'S & GRANITE</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8 ml-8 text-sm font-medium">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-secondary relative py-2",
                  pathname === item.href
                    ? "text-secondary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-secondary"
                    : "text-foreground",
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4 ml-auto">
            {isSearchOpen && !isMobile ? (
              <div className="relative flex items-center">
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-[200px] sm:w-[300px] h-10 pr-10 border-secondary/50 focus-visible:ring-secondary"
                  autoFocus
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 text-muted-foreground hover:text-secondary"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close search</span>
                </Button>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
                className="text-foreground hover:text-secondary hover:bg-transparent"
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            )}

            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-foreground hover:text-secondary hover:bg-transparent"
            >
              <Link href="/wishlist">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Wishlist</span>
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-foreground hover:text-secondary hover:bg-transparent"
            >
              <Link href="/account">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="relative text-foreground hover:text-secondary hover:bg-transparent"
              asChild
            >
              <Link href="/cart">
                <ShoppingBag className="h-5 w-5" />
                <span className="sr-only">Cart</span>
                <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-secondary text-[10px] font-medium text-secondary-foreground flex items-center justify-center">
                  3
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

