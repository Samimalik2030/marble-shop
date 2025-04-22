import { Shield, Truck, Clock, Award } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Premium Quality",
    description: "All our stones are carefully selected from the finest quarries worldwide and in Pakistan",
  },
  {
    icon: Truck,
    title: "Free Delivery in Punjab",
    description: "Free shipping on all orders over Rs. 100,000 within Punjab",
  },
  {
    icon: Clock,
    title: "Expert Consultation",
    description: "Get personalized advice from our stone specialists in Lahore",
  },
  {
    icon: Award,
    title: "Satisfaction Guarantee",
    description: "Not satisfied? We offer hassle-free returns within 30 days",
  },
]

export default function BenefitsSection() {
  return (
    <section className="py-12 bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4">
                <benefit.icon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-primary-foreground/80 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

