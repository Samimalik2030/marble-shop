import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Home, Info, Shield, Sparkles, Droplet, AlertTriangle, Clock, CheckCircle } from "lucide-react"

export default function MarbleCarePage() {
  return (
    <div className="bg-muted/30 min-h-screen py-10">
      <div className="container px-4 md:px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            <Home className="h-4 w-4" />
          </Link>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span>Marble Care & Info</span>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-lg overflow-hidden mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
          <Image
            src="/placeholder.svg?height=500&width=1200"
            alt="Marble Care"
            width={1200}
            height={500}
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fade-up animate-once animate-duration-[800ms] animate-delay-100">
              Marble Care & Information
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl animate-fade-up animate-once animate-duration-[800ms] animate-delay-200">
              Learn how to maintain the beauty and longevity of your premium marble and granite surfaces
            </p>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="cleaning" className="mb-12">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="cleaning" className="data-[state=active]:bg-secondary data-[state=active]:text-white">
              <Sparkles className="mr-2 h-4 w-4" />
              Cleaning
            </TabsTrigger>
            <TabsTrigger
              value="maintenance"
              className="data-[state=active]:bg-secondary data-[state=active]:text-white"
            >
              <Shield className="mr-2 h-4 w-4" />
              Maintenance
            </TabsTrigger>
            <TabsTrigger
              value="stain-removal"
              className="data-[state=active]:bg-secondary data-[state=active]:text-white"
            >
              <Droplet className="mr-2 h-4 w-4" />
              Stain Removal
            </TabsTrigger>
            <TabsTrigger
              value="precautions"
              className="data-[state=active]:bg-secondary data-[state=active]:text-white"
            >
              <AlertTriangle className="mr-2 h-4 w-4" />
              Precautions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cleaning" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Daily Cleaning Tips</h2>
                <p className="text-muted-foreground mb-6">
                  Proper daily cleaning is essential to maintain the beauty of your marble surfaces. Follow these expert
                  recommendations for the best results.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Use pH Neutral Cleaners</h3>
                      <p className="text-sm text-muted-foreground">
                        Always use pH neutral, non-abrasive cleaners specifically designed for natural stone. Avoid
                        acidic cleaners like vinegar or lemon-based products.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Soft Cloth Cleaning</h3>
                      <p className="text-sm text-muted-foreground">
                        Use soft microfiber cloths for cleaning to avoid scratching the surface. Avoid rough sponges or
                        scrubbing pads.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Blot, Don't Wipe Spills</h3>
                      <p className="text-sm text-muted-foreground">
                        Immediately blot spills with a paper towel instead of wiping, which can spread the spill and
                        increase the affected area.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Regular Dusting</h3>
                      <p className="text-sm text-muted-foreground">
                        Dust marble surfaces regularly with a soft cloth to prevent scratching from dust particles.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative rounded-lg overflow-hidden h-[300px] md:h-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Marble Cleaning"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <Card className="border-2 hover:border-secondary/30 transition-all">
              <CardHeader>
                <CardTitle>Recommended Cleaning Products</CardTitle>
                <CardDescription>Pakistani brands that are safe for your marble surfaces</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="border rounded-lg p-4 flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-3">
                        <Sparkles className="h-8 w-8 text-secondary" />
                      </div>
                      <h3 className="font-medium mb-1">Premium Stone Cleaner {item}</h3>
                      <p className="text-sm text-muted-foreground mb-2">pH-neutral formula safe for all marble types</p>
                      <p className="text-sm font-medium">₨ 1,200 - ₨ 2,500</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="rounded-lg bg-secondary/5 p-6 border border-secondary/20">
              <div className="flex items-start gap-4">
                <Info className="h-6 w-6 text-secondary mt-1" />
                <div>
                  <h3 className="font-medium text-lg mb-2">Professional Cleaning Services</h3>
                  <p className="text-muted-foreground mb-4">
                    For deep cleaning and restoration, we recommend professional services every 12-18 months. Our
                    experts use specialized equipment and techniques to bring back the original shine of your marble
                    surfaces.
                  </p>
                  <Button className="bg-secondary hover:bg-secondary/90 text-white">Book Professional Cleaning</Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="maintenance" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Regular Maintenance Guide</h2>
                <p className="text-muted-foreground mb-6">
                  Proper maintenance is key to preserving the beauty and extending the life of your marble and granite
                  surfaces.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Sealing Schedule</h3>
                      <p className="text-sm text-muted-foreground">
                        Reseal your marble every 6-12 months depending on usage. High-traffic areas may need more
                        frequent sealing.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Use Coasters and Mats</h3>
                      <p className="text-sm text-muted-foreground">
                        Always use coasters under glasses and mats under hot dishes to prevent etching and heat damage.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Polish Regularly</h3>
                      <p className="text-sm text-muted-foreground">
                        Use a marble-safe polish monthly to maintain shine and provide additional protection.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative rounded-lg overflow-hidden h-[300px] md:h-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Marble Maintenance"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="aspect-video rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <Button className="bg-secondary hover:bg-secondary/90 text-white">Watch Maintenance Tutorial</Button>
              </div>
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="Marble Maintenance Video"
                width={1200}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </TabsContent>

          <TabsContent value="stain-removal" className="space-y-6">
            <Card className="border-2 hover:border-secondary/30 transition-all">
              <CardHeader>
                <CardTitle>Common Stains & Removal Techniques</CardTitle>
                <CardDescription>
                  Quick reference guide for removing different types of stains from marble
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      type: "Oil-based Stains",
                      description: "Grease, cooking oil, milk, cosmetics",
                      solution:
                        "Make a paste of baking soda and water. Apply to the stain, cover with plastic wrap, and let sit for 24-48 hours. Rinse with water and dry with a soft cloth.",
                      icon: Droplet,
                    },
                    {
                      type: "Organic Stains",
                      description: "Coffee, tea, fruit, food",
                      solution:
                        "Mix 12% hydrogen peroxide with a few drops of ammonia. Apply to the stain and let sit for 10-15 minutes. Rinse with water and dry with a soft cloth.",
                      icon: Droplet,
                    },
                    {
                      type: "Metal Stains",
                      description: "Iron, rust, copper, bronze",
                      solution:
                        "For rust stains, use a poultice made with a rust remover specifically formulated for marble. Follow product instructions carefully.",
                      icon: Droplet,
                    },
                    {
                      type: "Water Spots & Rings",
                      description: "Hard water deposits",
                      solution:
                        "Buff the surface with dry 0000 steel wool. For stubborn spots, use a marble polishing powder with a damp cloth.",
                      icon: Droplet,
                    },
                  ].map((stain, index) => (
                    <div key={index} className="border rounded-lg p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                          <stain.icon className="h-5 w-5 text-secondary" />
                        </div>
                        <h3 className="font-medium">{stain.type}</h3>
                      </div>
                      <p className="text-sm font-medium text-muted-foreground mb-2">{stain.description}</p>
                      <p className="text-sm">{stain.solution}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="bg-secondary/5 rounded-lg p-6 border border-secondary/20">
              <h3 className="font-medium text-lg mb-3">Important Note</h3>
              <p className="text-muted-foreground">
                Always test any stain removal solution on a small, inconspicuous area first. For valuable or antique
                marble surfaces, consult a professional before attempting stain removal.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="precautions" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Avoid Acidic Substances",
                  description:
                    "Never use vinegar, lemon juice, or other acidic cleaners on marble as they will etch the surface.",
                  icon: AlertTriangle,
                },
                {
                  title: "Prevent Heat Damage",
                  description:
                    "Always use trivets or mats under hot items. Direct heat can cause thermal shock and crack the stone.",
                  icon: AlertTriangle,
                },
                {
                  title: "Beware of Scratches",
                  description:
                    "Avoid dragging heavy or sharp objects across marble surfaces to prevent scratches and chips.",
                  icon: AlertTriangle,
                },
                {
                  title: "No Abrasive Cleaners",
                  description:
                    "Never use abrasive cleaners or rough cleaning tools that can scratch and dull the surface.",
                  icon: AlertTriangle,
                },
                {
                  title: "Protect from Stains",
                  description:
                    "Immediately clean spills, especially acidic liquids like wine, juice, or coffee to prevent staining.",
                  icon: AlertTriangle,
                },
                {
                  title: "Avoid Standing Water",
                  description:
                    "Don't let water stand on marble surfaces for extended periods as it can penetrate and cause staining.",
                  icon: AlertTriangle,
                },
              ].map((item, index) => (
                <Card key={index} className="border-2 hover:border-secondary/30 transition-all">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                        <item.icon className="h-6 w-6 text-red-500" />
                      </div>
                      <h3 className="font-medium mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="rounded-lg overflow-hidden">
              <div className="bg-secondary p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Need Expert Advice?</h3>
                <p className="mb-4">
                  Our marble care specialists are available to answer your questions and provide personalized advice.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" className="bg-white text-secondary hover:bg-white/90">
                    Contact an Expert
                  </Button>
                  <Button variant="outline" className="text-white border-white hover:bg-white/10">
                    Download Care Guide
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How often should I seal my marble countertops?",
                answer:
                  "For kitchen countertops, we recommend sealing every 6-12 months depending on usage. Bathroom surfaces may require less frequent sealing, typically once a year.",
              },
              {
                question: "Can I use regular household cleaners on marble?",
                answer:
                  "No, regular household cleaners are often too harsh or acidic for marble. Always use pH-neutral cleaners specifically designed for natural stone.",
              },
              {
                question: "How do I remove etching from my marble surface?",
                answer:
                  "Light etching can be removed with marble polishing powder. For deeper etching, professional restoration may be required.",
              },
              {
                question: "Is marble suitable for kitchen countertops?",
                answer:
                  "Yes, but it requires more maintenance than granite or quartz. With proper care and sealing, marble can be a beautiful option for kitchens.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-2 hover:border-secondary/30 transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-lg overflow-hidden bg-gradient-to-r from-secondary to-secondary/80 text-white p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Restore Your Marble's Beauty?</h2>
            <p className="text-white/90 mb-6 md:text-lg">
              Our professional restoration and maintenance services can bring back the original shine and elegance of
              your marble surfaces.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-secondary hover:bg-white/90">Schedule a Consultation</Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                View Our Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

