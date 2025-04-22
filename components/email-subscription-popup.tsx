"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export default function EmailSubscriptionPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    // Check if the popup has been closed before
    const hasClosedPopup = localStorage.getItem("hasClosedPopup")

    if (!hasClosedPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 5000) // Show popup after 5 seconds

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem("hasClosedPopup", "true")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast({
        title: "Please enter your email",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive our latest updates and exclusive offers.",
      })
      setIsSubmitting(false)
      setIsOpen(false)
      localStorage.setItem("hasClosedPopup", "true")
    }, 1000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={handleClose} />

      <div className="relative bg-background rounded-lg shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 h-8 w-8 rounded-full text-muted-foreground hover:text-foreground"
          onClick={handleClose}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>

        <div className="p-6">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground">Get the latest updates and exclusive offers straight to your inbox</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="border-input/50 focus-visible:ring-secondary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              By subscribing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </form>
        </div>

        <div className="bg-muted p-4 text-center">
          <p className="text-sm font-medium">Subscribers get 10% off their first order in Punjab!</p>
        </div>
      </div>
    </div>
  )
}

