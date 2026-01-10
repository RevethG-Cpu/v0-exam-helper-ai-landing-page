"use client"

import { Button } from "@/components/ui/button"

export default function Hero() {
  const handleSubscribeClick = () => {
    const pricingSection = document.getElementById("pricing-section")
    pricingSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white px-4 py-20 sm:py-32 md:py-40">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-block rounded-full bg-green-100 px-4 py-2">
          <p className="text-sm font-medium text-green-700">✨ AI-Powered Study Help</p>
        </div>

        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6">
          Pass Your Exams With Confidence
        </h1>

        <p className="text-balance text-lg text-muted-foreground mb-8 sm:text-xl md:text-xl">
          Smart exam help, tips & motivation via WhatsApp
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center mb-16">
          <button onClick={handleSubscribeClick}>
            <Button
              size="lg"
              className="h-12 px-8 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-full transition-all duration-200 active:scale-95"
            >
              Subscribe Now
            </Button>
          </button>
          <a href="https://wa.me/2348100710264" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-base font-semibold border-2 border-primary text-primary hover:bg-primary/5 rounded-full bg-transparent transition-all duration-200 active:scale-95"
            >
              Chat on WhatsApp
            </Button>
          </a>
        </div>

        <div className="relative mx-auto max-w-2xl aspect-video rounded-xl overflow-hidden shadow-2xl bg-muted">
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl mb-4">📱</div>
              <p className="text-muted-foreground">WhatsApp Integration Preview</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
