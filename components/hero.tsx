"use client"

import { Button } from "@/components/ui/button"

export default function Hero() {
  const handleSubscribeClick = () => {
    const pricingSection = document.getElementById("pricing-section")
    pricingSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white px-4 py-20 sm:py-32 md:py-40 scroll-mt-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-block rounded-full bg-green-100 px-4 py-2 w-fit border border-green-200">
              <p className="text-sm font-semibold text-green-700">✨ AI-Powered Study Help</p>
            </div>

            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-5xl mb-6 leading-tight">
              Pass Your Exams With Confidence
            </h1>

            <p className="text-balance text-lg text-muted-foreground mb-8 sm:text-xl leading-relaxed">
              Study tips, exam prayers, motivation & reminders delivered instantly on WhatsApp
            </p>

            <div className="flex flex-col gap-4 sm:flex-row mb-12">
              <Button
                onClick={handleSubscribeClick}
                size="lg"
                className="w-full sm:w-auto h-12 px-8 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-full transition-all duration-200 active:scale-95"
              >
                Subscribe Now
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-12 px-8 text-base font-semibold border-2 border-primary text-primary hover:bg-primary/5 rounded-full bg-transparent transition-all duration-200 active:scale-95"
              >
                <a
                  href="https://wa.me/2348100710264"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Header logo with Web3 animation */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-square">
              <img
                src="https://i.ibb.co/zT9RNr5h/file-00000000a7ec71f4a94a471b2f1d7b7a-1.png"
                alt="ExamHelper AI Logo"
                className="w-full h-full object-contain animate-web3-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
