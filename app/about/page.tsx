import Image from "next/image"
import Link from "next/link"
import { Award, CheckCircle, Users, Star, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AboutPage() {
  return (
    <div className="bg-muted/30">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/placeholder.svg?height=800&width=1600" alt="Marble texture" fill className="object-cover" />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              About Rajput Marble's & Granite
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8">
              Bringing luxury and elegance to homes across Punjab since 2005
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Link href="#our-story">Our Journey</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-background relative z-10 -mt-8">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: "18+", label: "Years of Experience" },
              { number: "5,000+", label: "Projects Completed" },
              { number: "200+", label: "Stone Varieties" },
              { number: "98%", label: "Customer Satisfaction" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-6 text-center border-2 border-muted hover:border-secondary/30 transition-all premium-product-card"
              >
                <p className="text-3xl md:text-4xl font-bold text-secondary mb-2">{stat.number}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="our-story" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-secondary text-sm font-medium uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-2 mb-6">A Legacy of Excellence</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2005 by the Rajput family in Lahore, Punjab, our company began as a small marble supplier
                  with a vision to bring the world's finest natural stones to Pakistan.
                </p>
                <p>
                  What started as a modest showroom has grown into one of Punjab's premier destinations for luxury
                  marble, granite, and natural stone products. Our commitment to quality, craftsmanship, and customer
                  satisfaction has been the cornerstone of our success.
                </p>
                <p>
                  Today, Rajput Marble's & Granite is proud to serve homeowners, architects, designers, and contractors
                  throughout Pakistan with an extensive collection of premium natural stones sourced from the finest
                  quarries around the world and within Pakistan.
                </p>
                <p>
                  Our state-of-the-art facility in Lahore houses a vast inventory of marble, granite, onyx, and other
                  natural stones, allowing customers to view full slabs before making their selection. Our expert
                  craftsmen use the latest technology to cut, polish, and finish each piece to perfection.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden premium-product-card">
              <Image src="/placeholder.svg?height=1000&width=800" alt="Our showroom" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white font-medium">Our flagship showroom in Lahore, Punjab</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-primary-foreground/5 p-8 rounded-lg border border-primary-foreground/10 hover:border-secondary/30 transition-all premium-product-card">
              <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center mb-6">
                <Star className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-primary-foreground/80 mb-6">
                To provide the highest quality natural stone products and exceptional service, transforming spaces into
                works of art that reflect our clients' unique style and vision.
              </p>
              <ul className="space-y-2">
                {[
                  "Source the finest materials from around the world",
                  "Deliver unmatched craftsmanship in every project",
                  "Provide personalized service and expert guidance",
                  "Exceed customer expectations in quality and value",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary-foreground/5 p-8 rounded-lg border border-primary-foreground/10 hover:border-secondary/30 transition-all premium-product-card">
              <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-primary-foreground/80 mb-6">
                To be Pakistan's leading provider of premium natural stone, recognized for our innovation,
                sustainability, and commitment to excellence in every aspect of our business.
              </p>
              <ul className="space-y-2">
                {[
                  "Lead the industry in quality and innovation",
                  "Promote sustainable practices in stone sourcing and processing",
                  "Expand our presence across Pakistan and beyond",
                  "Continuously evolve to meet changing market needs",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="text-secondary text-sm font-medium uppercase tracking-wider">Our Core Values</span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-2">The Principles That Guide Us</h2>
            <div className="w-20 h-1 bg-secondary rounded-full my-2 mx-auto"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These values form the foundation of everything we do at Rajput Marble's & Granite
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-muted/50 p-8 rounded-lg border-2 hover:border-secondary/30 transition-all premium-product-card">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-muted-foreground">
                We never compromise on the quality of our products. Each stone is carefully selected, inspected, and
                processed to ensure it meets our exacting standards.
              </p>
            </div>

            <div className="bg-muted/50 p-8 rounded-lg border-2 hover:border-secondary/30 transition-all premium-product-card">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Service</h3>
              <p className="text-muted-foreground">
                We believe in building lasting relationships with our clients through exceptional service, expert
                guidance, and support throughout your project.
              </p>
            </div>

            <div className="bg-muted/50 p-8 rounded-lg border-2 hover:border-secondary/30 transition-all premium-product-card">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously seek new products, technologies, and techniques to offer our customers the latest trends
                and solutions in natural stone applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="text-secondary text-sm font-medium uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-2">How We Work</h2>
            <div className="w-20 h-1 bg-secondary rounded-full my-2 mx-auto"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From selection to installation, we ensure a seamless experience at every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "We begin with a thorough consultation to understand your vision, requirements, and budget.",
              },
              {
                step: "02",
                title: "Material Selection",
                description: "Browse our extensive collection and select the perfect stone for your project.",
              },
              {
                step: "03",
                title: "Measurement & Fabrication",
                description: "Our experts take precise measurements and fabricate your stone to exact specifications.",
              },
              {
                step: "04",
                title: "Installation",
                description:
                  "Our skilled installation team ensures your stone is perfectly installed with meticulous attention to detail.",
              },
            ].map((process, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-lg border-2 hover:border-secondary/30 transition-all premium-product-card"
              >
                <div className="text-3xl font-bold text-secondary mb-4">{process.step}</div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="text-secondary text-sm font-medium uppercase tracking-wider">Leadership</span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-2">Meet Our Leadership</h2>
            <div className="w-20 h-1 bg-secondary rounded-full my-2 mx-auto"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">The visionaries behind Rajput Marble's & Granite</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Farhan Rajput",
                role: "Founder & CEO",
                image: "/placeholder.svg?height=400&width=400",
                bio: "With over 20 years of experience in the natural stone industry, Farhan leads our company with passion and expertise.",
                linkedin: "#",
              },
              {
                name: "Aisha Khan",
                role: "Managing Director",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Aisha oversees our day-to-day operations, ensuring we maintain the highest standards in every aspect of our business.",
                linkedin: "#",
              },
              {
                name: "Imran Ali",
                role: "Chief Financial Officer",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Imran manages our financial strategy, helping us grow sustainably while delivering value to our customers.",
                linkedin: "#",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-background border-2 border-muted hover:border-secondary/30 transition-all premium-product-card"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      href={member.linkedin}
                      className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-secondary font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="text-secondary text-sm font-medium uppercase tracking-wider">Client Testimonials</span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-2">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-secondary rounded-full my-2 mx-auto"></div>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Hear from our satisfied customers about their experience with Rajput Marble's & Granite
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The quality of marble from Rajput's is exceptional. My home renovation in Lahore looks stunning with their Italian marble.",
                author: "Ayesha Khan",
                role: "Homeowner, Lahore",
                rating: 5,
              },
              {
                quote:
                  "As an architect, I need reliable suppliers. Rajput Marble's & Granite has been my go-to for years. Their selection and service are unmatched in Punjab.",
                author: "Usman Ali",
                role: "Architect, Islamabad",
                rating: 5,
              },
              {
                quote:
                  "We used Rajput's for our hotel lobby renovation. The Black Galaxy granite they supplied has become a conversation piece among our guests.",
                author: "Faisal Ahmed",
                role: "Hotel Manager, Faisalabad",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-primary-foreground/5 p-8 rounded-lg border border-primary-foreground/10 hover:border-secondary/30 transition-all premium-product-card h-full flex flex-col"
              >
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-secondary fill-secondary" />
                  ))}
                </div>

                <div className="flex-1">
                  <p className="italic text-primary-foreground/90 text-lg mb-6">"{testimonial.quote}"</p>
                </div>

                <div>
                  <div className="w-12 h-1 bg-secondary rounded-full mb-4"></div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-primary-foreground/70">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "The Ziarat White marble we chose for our bathroom renovation exceeded our expectations. The team at Rajput's was professional and helpful throughout the process.",
                author: "Sana Malik",
                role: "Homeowner, Karachi",
                rating: 5,
              },
              {
                quote:
                  "I've worked with many stone suppliers across Pakistan, but Rajput Marble's & Granite stands out for their quality and customer service. Highly recommended!",
                author: "Ahmed Hassan",
                role: "Interior Designer, Lahore",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-primary-foreground/5 p-8 rounded-lg border border-primary-foreground/10 hover:border-secondary/30 transition-all premium-product-card h-full flex flex-col"
              >
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-secondary fill-secondary" />
                  ))}
                </div>

                <div className="flex-1">
                  <p className="italic text-primary-foreground/90 text-lg mb-6">"{testimonial.quote}"</p>
                </div>

                <div>
                  <div className="w-12 h-1 bg-secondary rounded-full mb-4"></div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-primary-foreground/70">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="text-secondary text-sm font-medium uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-2">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-secondary rounded-full my-2 mx-auto"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our products and services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "What types of natural stone do you offer?",
                  answer:
                    "We offer a wide range of natural stones including marble, granite, onyx, travertine, limestone, and engineered quartz. Our collection includes both imported stones from Italy, Spain, Turkey, and India, as well as premium Pakistani marble varieties.",
                },
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
                {
                  question: "What is the difference between marble and granite?",
                  answer:
                    "Marble is a metamorphic rock composed primarily of calcium carbonate, known for its elegant veining and classic beauty. It's softer and more porous than granite. Granite is an igneous rock composed mainly of quartz and feldspar, known for its durability, resistance to scratches and heat, and speckled appearance.",
                },
                {
                  question: "How much does natural stone cost?",
                  answer:
                    "The cost of natural stone varies widely depending on the type, quality, rarity, origin, and dimensions. Basic granites might start around Rs. 250 per square foot, while premium marbles and exotic onyx can cost Rs. 1,500 or more per square foot. We offer options for every budget.",
                },
                {
                  question: "Do you offer warranties on your products?",
                  answer:
                    "Yes, we offer warranties on both our products and installation services. The specific warranty terms vary by product type. Our sales team will provide detailed warranty information for your specific purchase.",
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

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Transform Your Space?</h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Visit our showroom or contact us today to explore our premium collection of marble and granite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/products">Explore Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

