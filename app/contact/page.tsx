"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone, Clock, ArrowRight, MessageSquare, Calendar, Users, Check, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
    preferredContact: "email",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you shortly.",
      })
      setIsSubmitting(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        inquiryType: "general",
        preferredContact: "email",
        preferredContact: "email",
      })
    }, 1500)
  }

  return (
    <div className="bg-muted/30 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/placeholder.svg?height=800&width=1600" alt="Marble texture" fill className="object-cover" />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Get In Touch</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80">
              We'd love to hear from you. Reach out for any questions or to start your project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 bg-background relative z-10 -mt-8">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <MessageSquare className="h-8 w-8 text-secondary" />,
                title: "Send a Message",
                description: "Fill out our contact form and we'll get back to you as soon as possible.",
                cta: "Contact Form",
                link: "#contact-form",
              },
              {
                icon: <Calendar className="h-8 w-8 text-secondary" />,
                title: "Book a Consultation",
                description: "Schedule a free consultation with our design experts.",
                cta: "Book Now",
                link: "#consultation",
              },
              {
                icon: <Users className="h-8 w-8 text-secondary" />,
                title: "Visit Our Showroom",
                description: "See our products in person at our Lahore showroom.",
                cta: "Get Directions",
                link: "#location",
              },
            ].map((option, index) => (
              <Card key={index} className="border-2 hover:border-secondary/30 transition-all premium-product-card">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">{option.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                  <p className="text-muted-foreground mb-6">{option.description}</p>
                  <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    <Link href={option.link}>{option.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section id="contact-form" className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-2 hover:border-secondary/30 transition-all premium-product-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Reach Out To Us</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <Tabs defaultValue="contact" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-8">
                      <TabsTrigger
                        value="contact"
                        className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
                      >
                        Contact Us
                      </TabsTrigger>
                      <TabsTrigger
                        value="consultation"
                        id="consultation"
                        className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
                      >
                        Book Consultation
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="contact" className="mt-6">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                              id="name"
                              name="name"
                              placeholder="Your name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              className="border-input/50 focus-visible:ring-secondary"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="Your email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              className="border-input/50 focus-visible:ring-secondary"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              name="phone"
                              placeholder="Your phone number"
                              value={formData.phone}
                              onChange={handleChange}
                              className="border-input/50 focus-visible:ring-secondary"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="inquiryType">Inquiry Type</Label>
                            <Select
                              onValueChange={(value) => handleSelectChange("inquiryType", value)}
                              value={formData.inquiryType}
                            >
                              <SelectTrigger className="border-input/50 focus-visible:ring-secondary">
                                <SelectValue placeholder="Select inquiry type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="general">General Inquiry</SelectItem>
                                <SelectItem value="quote">Request a Quote</SelectItem>
                                <SelectItem value="product">Product Information</SelectItem>
                                <SelectItem value="support">Customer Support</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Input
                            id="subject"
                            name="subject"
                            placeholder="How can we help you?"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            className="border-input/50 focus-visible:ring-secondary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Your message"
                            rows={6}
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="border-input/50 focus-visible:ring-secondary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Preferred Contact Method</Label>
                          <RadioGroup
                            defaultValue="email"
                            value={formData.preferredContact}
                            onValueChange={(value) => handleRadioChange("preferredContact", value)}
                            className="flex flex-wrap gap-4"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="email" id="email-contact" />
                              <Label htmlFor="email-contact">Email</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="phone" id="phone-contact" />
                              <Label htmlFor="phone-contact">Phone</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="whatsapp" id="whatsapp-contact" />
                              <Label htmlFor="whatsapp-contact">WhatsApp</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </form>
                    </TabsContent>

                    <TabsContent value="consultation" className="mt-6">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="consult-name">Full Name</Label>
                            <Input
                              id="consult-name"
                              name="name"
                              placeholder="Your name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              className="border-input/50 focus-visible:ring-secondary"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="consult-email">Email</Label>
                            <Input
                              id="consult-email"
                              name="email"
                              type="email"
                              placeholder="Your email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              className="border-input/50 focus-visible:ring-secondary"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="consult-phone">Phone Number</Label>
                            <Input
                              id="consult-phone"
                              name="phone"
                              placeholder="Your phone number"
                              required
                              value={formData.phone}
                              onChange={handleChange}
                              className="border-input/50 focus-visible:ring-secondary"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="project-type">Project Type</Label>
                            <Select onValueChange={(value) => handleSelectChange("projectType", value)}>
                              <SelectTrigger className="border-input/50 focus-visible:ring-secondary">
                                <SelectValue placeholder="Select project type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="kitchen">Kitchen</SelectItem>
                                <SelectItem value="bathroom">Bathroom</SelectItem>
                                <SelectItem value="flooring">Flooring</SelectItem>
                                <SelectItem value="outdoor">Outdoor</SelectItem>
                                <SelectItem value="commercial">Commercial</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="consult-message">Project Details</Label>
                          <Textarea
                            id="consult-message"
                            name="message"
                            placeholder="Tell us about your project"
                            rows={6}
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="border-input/50 focus-visible:ring-secondary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Preferred Consultation Type</Label>
                          <RadioGroup defaultValue="in-person" className="flex flex-wrap gap-4">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="in-person" id="in-person" />
                              <Label htmlFor="in-person">In-Person (Showroom)</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="virtual" id="virtual" />
                              <Label htmlFor="virtual">Virtual Meeting</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="site-visit" id="site-visit" />
                              <Label htmlFor="site-visit">Site Visit</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Booking..." : "Book Consultation"}
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-2 hover:border-secondary/30 transition-all premium-product-card">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-secondary" />
                      </div>
                      <div id="location">
                        <h3 className="font-semibold mb-1">Our Location</h3>
                        <p className="text-muted-foreground">123 Marble Avenue, Gulberg III</p>
                        <p className="text-muted-foreground">Lahore, Punjab, Pakistan</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone Number</h3>
                        <p className="text-muted-foreground">+92 300 123 4567</p>
                        <p className="text-muted-foreground">+92 42 3456 7890</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email Address</h3>
                        <p className="text-muted-foreground">info@rajputmarble.pk</p>
                        <p className="text-muted-foreground">sales@rajputmarble.pk</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Business Hours</h3>
                        <div className="space-y-1 text-muted-foreground">
                          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                          <p>Saturday: 9:00 AM - 4:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-6">
                <div className="relative h-[300px] w-full rounded-lg overflow-hidden border-2 hover:border-secondary/30 transition-all premium-product-card">
                  <Image src="/placeholder.svg?height=600&width=600" alt="Map location" fill className="object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                      View on Google Maps
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our products and services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Do you offer installation services?",
                  answer:
                    "Yes, we provide professional installation services for all our marble and granite products. Our experienced team ensures precise and efficient installation with meticulous attention to detail.",
                },
                {
                  question: "How do I maintain marble countertops?",
                  answer:
                    "Marble countertops should be sealed regularly and cleaned with pH-neutral cleaners. Avoid acidic substances like vinegar, lemon juice, or harsh chemicals, and wipe spills immediately to prevent staining. We provide detailed care instructions with all our products.",
                },
                {
                  question: "Can I see the actual stone before purchasing?",
                  answer:
                    "We encourage customers to visit our showroom in Lahore to view our extensive collection of stone slabs before making a purchase decision. This allows you to see the natural variations and select the exact piece for your project.",
                },
                {
                  question: "Do you deliver outside of Punjab?",
                  answer:
                    "Yes, we deliver throughout Pakistan. Delivery fees may vary based on location and order size. Please contact us for specific delivery information and timelines for your area.",
                },
                {
                  question: "What is the lead time for custom orders?",
                  answer:
                    "Lead times for custom orders typically range from 2-4 weeks depending on the complexity of the project, material availability, and current workload. We'll provide you with a specific timeline during your consultation.",
                },
                {
                  question: "Do you offer samples of your materials?",
                  answer:
                    "Yes, we provide samples of our materials to help you make the right choice for your project. Visit our showroom or contact us to request samples of specific stones you're interested in.",
                },
              ].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-2 border-muted hover:border-secondary/30 transition-all rounded-lg overflow-hidden bg-background"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="text-secondary text-sm font-medium uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-2">The Rajput Advantage</h2>
            <div className="w-20 h-1 bg-secondary rounded-full my-2 mx-auto"></div>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              What sets us apart from other natural stone providers in Pakistan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Selection",
                description: "We source only the finest marble and granite from around the world and within Pakistan",
                icon: <Star className="h-10 w-10 text-secondary" />,
              },
              {
                title: "Expert Craftsmanship",
                description: "Our skilled artisans bring decades of experience to every project we undertake",
                icon: <Check className="h-10 w-10 text-secondary" />,
              },
              {
                title: "Personalized Service",
                description: "We provide tailored solutions and dedicated support throughout your project",
                icon: <Users className="h-10 w-10 text-secondary" />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-primary-foreground/5 p-8 rounded-lg border border-primary-foreground/10 hover:border-secondary/30 transition-all premium-product-card"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-primary-foreground/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact us today to discuss your requirements and get a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="#contact-form">Contact Us Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/products" className="flex items-center gap-2">
                  Browse Products <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

