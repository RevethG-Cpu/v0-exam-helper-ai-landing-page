import { Card, CardContent } from "@/components/ui/card"

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Subscribe via Paystack",
      description: "Choose your plan and subscribe securely via Paystack",
      icon: "💳",
    },
    {
      number: "2",
      title: "Open WhatsApp",
      description: "No app install needed, just use WhatsApp on your phone",
      icon: "💬",
    },
    {
      number: "3",
      title: "Send a Keyword",
      description: "Send WAEC, JAMB, NECO, IELTS, or MOTIVATION to get started",
      icon: "⌨️",
    },
  ]

  return (
    <section className="px-4 py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl md:text-4xl mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground">Get started in just 3 simple steps</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <Card key={step.number} className="border-2 border-border hover:border-primary/30 transition-colors">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="text-5xl mb-4">{step.icon}</div>
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
