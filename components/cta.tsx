import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="px-4 py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl md:text-4xl mb-6">
          Start Preparing Smarter Today
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Join thousands of students preparing for their exams with ExamHelper AI
        </p>
        <a href="https://paystack.shop/pay/9chimxa1yz" target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            className="h-12 px-10 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
          >
            Get Started on WhatsApp
          </Button>
        </a>
      </div>
    </section>
  )
}
