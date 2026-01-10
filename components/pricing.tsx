"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function Pricing() {
  const plans = [
    {
      name: "Weekly Plan",
      price: "₦1,000",
      period: "7 days",
      description: "Perfect for quick preparation",
      features: ["7 days access", "Unlimited tips & messages", "Daily exam motivation", "Study reminders"],
      cta: "Subscribe Weekly",
      paystackLink: "https://paystack.shop/pay/hrembxm-55",
    },
    {
      name: "Monthly Plan",
      price: "₦3,500",
      period: "30 days",
      description: "Our most popular plan",
      features: [
        "30 days access",
        "Unlimited access to all features",
        "Priority support",
        "Daily tips & prayers",
        "Study motivation & reminders",
        "Focus area guidance",
      ],
      cta: "Subscribe Monthly",
      highlighted: true,
      paystackLink: "https://paystack.shop/pay/17hhc-82l-",
    },
  ]

  return (
    <section
      id="pricing-section"
      className="px-4 py-16 sm:py-20 md:py-24 bg-gradient-to-b from-blue-50 to-white scroll-mt-20"
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl md:text-4xl mb-4">
            Simple, Affordable Pricing
          </h2>
          <p className="text-lg text-muted-foreground">Choose the plan that works for you</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`border-2 transition-all ${
                plan.highlighted ? "border-primary ring-2 ring-primary/20 md:scale-105 shadow-xl" : "border-border"
              }`}
            >
              <CardHeader>
                {plan.highlighted && (
                  <div className="mb-4 inline-block bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full w-fit">
                    Best Value
                  </div>
                )}
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/ {plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href={plan.paystackLink} target="_blank" rel="noopener noreferrer" className="block">
                  <Button
                    className={`w-full h-11 text-base font-semibold rounded-full transition-all duration-200 active:scale-95 ${
                      plan.highlighted
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : "bg-muted hover:bg-muted/80 text-foreground border border-border"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-sm text-muted-foreground">
            Trusted by Nigerian students preparing for WAEC, JAMB, NECO & IELTS 🇳🇬
          </p>
          <p className="text-xs text-muted-foreground">Secure one-time payment via Paystack (Nigeria 🇳🇬)</p>
        </div>
      </div>
    </section>
  )
}
