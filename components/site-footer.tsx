import Link from "next/link"
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Award,
  Clock,
  Shield,
  Truck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SiteFooter() {
  return (
    <footer className="relative mt-16 overflow-hidden bg-gradient-to-r from-neutral-900 to-neutral-800 text-white">
      {/* Gold line at top of footer */}
      <div className="h-1 w-full bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300" />

      <div className="container mx-auto">
        {/* Footer highlights section */}
        <div className="grid grid-cols-1 gap-8 border-b border-neutral-700 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-gradient-to-br from-amber-400 to-amber-600 p-3">
              <Truck className="h-6 w-6 text-neutral-900" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Free Shipping</h3>
              <p className="mt-1 text-sm text-neutral-300">On all orders above PKR 100,000</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="rounded-full bg-gradient-to-br from-amber-400 to-amber-600 p-3">
              <Shield className="h-6 w-6 text-neutral-900" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Quality Guarantee</h3>
              <p className="mt-1 text-sm text-neutral-300">Premium marble & granite materials</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="rounded-full bg-gradient-to-br from-amber-400 to-amber-600 p-3">
              <Award className="h-6 w-6 text-neutral-900" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Luxury Selection</h3>
              <p className="mt-1 text-sm text-neutral-300">Curated premium stone collection</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="rounded-full bg-gradient-to-br from-amber-400 to-amber-600 p-3">
              <Clock className="h-6 w-6 text-neutral-900" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Expert Support</h3>
              <p className="mt-1 text-sm text-neutral-300">Professional service at every step</p>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-16 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Company info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-amber-400">Rajput Marble's & Graynite</h2>
            <p className="text-sm leading-relaxed text-neutral-300">
              Premium supplier of luxury marble, granite and natural stone products. Serving Pakistan with the finest
              quality materials for your dream spaces.
            </p>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-amber-400" />
                <span className="text-sm">Punjab, Pakistan</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-400" />
                <span className="text-sm">+92 300 1234567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-400" />
                <span className="text-sm">info@rajputmarble.com</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="group flex items-center text-neutral-300 transition-colors hover:text-amber-400"
                >
                  <ArrowRight className="mr-2 h-4 w-4 text-amber-500 transition-transform group-hover:translate-x-1" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="group flex items-center text-neutral-300 transition-colors hover:text-amber-400"
                >
                  <ArrowRight className="mr-2 h-4 w-4 text-amber-500 transition-transform group-hover:translate-x-1" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="group flex items-center text-neutral-300 transition-colors hover:text-amber-400"
                >
                  <ArrowRight className="mr-2 h-4 w-4 text-amber-500 transition-transform group-hover:translate-x-1" />
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/collections"
                  className="group flex items-center text-neutral-300 transition-colors hover:text-amber-400"
                >
                  <ArrowRight className="mr-2 h-4 w-4 text-amber-500 transition-transform group-hover:translate-x-1" />
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  href="/room-ideas"
                  className="group flex items-center text-neutral-300 transition-colors hover:text-amber-400"
                >
                  <ArrowRight className="mr-2 h-4 w-4 text-amber-500 transition-transform group-hover:translate-x-1" />
                  Room Ideas
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="group flex items-center text-neutral-300 transition-colors hover:text-amber-400"
                >
                  <ArrowRight className="mr-2 h-4 w-4 text-amber-500 transition-transform group-hover:translate-x-1" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/products?category=italian-marble"
                  className="group flex items-center text-neutral-300 transition-colors hover:text-amber-400"
                >
                  <ArrowRight className="mr-2 h-4 w-4 text-amber-500 transition-transform group-hover:translate-x-1" />
                  Italian Marble
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=pakistani-marble"
                  className="group flex items-center text-neutral-300 transition-colors hover:text-amber-400"
                >
                  <ArrowRight className="mr-2 h-4 w-4 text-amber-500 transition-transform group-hover:translate-x-1" />
                  Pakistani Marble
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=granite"
                  className="group flex items-center text-neutral-300 transition-colors hover:text-amber-400"
                >
                  <ArrowRight className="mr-2 h-4 w-4 text-amber-500 transition-transform group-hover:translate-x-1" />
                  Granite
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=onyx"
                  className="group flex items-center text-neutral-300 transition-colors hover:text-amber-400"
                >
                  <ArrowRight className="mr-2 h-4 w-4 text-amber-500 transition-transform group-hover:translate-x-1" />
                  Onyx
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=travertine"
                  className="group flex items-center text-neutral-300 transition-colors hover:text-amber-400"
                >
                  <ArrowRight className="mr-2 h-4 w-4 text-amber-500 transition-transform group-hover:translate-x-1" />
                  Travertine
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Stay Updated</h3>
            <p className="text-sm text-neutral-300">
              Subscribe to our newsletter for the latest product updates, special offers, and design inspiration.
            </p>
            <div className="space-y-3">
              <form className="flex flex-col space-y-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-neutral-800 border-neutral-700 focus:border-amber-500 text-white"
                />
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-neutral-900">Subscribe</Button>
              </form>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="mb-3 font-medium">Follow Us</h4>
              <div className="flex space-x-4">
                <Link
                  href="https://facebook.com"
                  className="rounded-full bg-neutral-800 p-2 text-[#1877F2] hover:bg-neutral-700 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="https://instagram.com"
                  className="rounded-full bg-neutral-800 p-2 text-[#E4405F] hover:bg-neutral-700 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="https://twitter.com"
                  className="rounded-full bg-neutral-800 p-2 text-[#1DA1F2] hover:bg-neutral-700 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  className="rounded-full bg-neutral-800 p-2 text-[#0A66C2] hover:bg-neutral-700 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="https://youtube.com"
                  className="rounded-full bg-neutral-800 p-2 text-[#FF0000] hover:bg-neutral-700 transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Awards & certifications */}
        <div className="border-t border-neutral-700 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex flex-col items-center">
              <div className="mb-2 text-amber-400">
                <Award className="h-10 w-10" />
              </div>
              <div className="text-center">
                <h4 className="font-medium">Best Quality</h4>
                <p className="text-xs text-neutral-400">2023 Award</p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-2 text-amber-400">
                <Award className="h-10 w-10" />
              </div>
              <div className="text-center">
                <h4 className="font-medium">Customer Choice</h4>
                <p className="text-xs text-neutral-400">9 Years Running</p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-2 text-amber-400">
                <Award className="h-10 w-10" />
              </div>
              <div className="text-center">
                <h4 className="font-medium">Luxury Design</h4>
                <p className="text-xs text-neutral-400">Excellence Award</p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-2 text-amber-400">
                <Shield className="h-10 w-10" />
              </div>
              <div className="text-center">
                <h4 className="font-medium">Verified Quality</h4>
                <p className="text-xs text-neutral-400">ISO Certified</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-700 py-8 text-center">
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} Rajput Marble's & Graynite. All rights reserved.
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-4 text-xs text-neutral-500">
            <Link href="/privacy" className="hover:text-amber-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-amber-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-amber-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* Gold line at bottom of footer */}
      <div className="h-1 w-full bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300" />
    </footer>
  )
}

export default SiteFooter

