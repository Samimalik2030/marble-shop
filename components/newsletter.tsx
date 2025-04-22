"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      })
      return
    }

    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter",
      })
      setEmail("")
      setLoading(false)
    }, 1000)
  }

  return (
    <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=400')] bg-repeat opacity-20"></div>
      </div>
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <span className="text-secondary text-sm font-medium uppercase tracking-wider">Stay Updated</span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Subscribe to Our Newsletter</h2>
            <div className="w-20 h-1 bg-secondary rounded-full my-2"></div>
            <p className="max-w-[600px] text-primary-foreground/80 md:text-lg">
              Stay updated with our latest products, exclusive offers, and design inspiration
            </p>
          </div>

          <div className="mt-8 max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex w-full gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-secondary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                type="submit"
                disabled={loading}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                {loading ? (
                  <span className="animate-pulse">Subscribing...</span>
                ) : (
                  <>
                    Subscribe <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
            <p className="text-xs text-primary-foreground/60 mt-4 text-center">
              By subscribing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

