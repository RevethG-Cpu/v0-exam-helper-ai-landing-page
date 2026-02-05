import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="px-4 py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background to-blue-50/50 dark:to-background/50">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl md:text-4xl mb-4">
          Start Preparing Smarter Today
        </h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Join thousands of students preparing for their exams with ExamHelper AI. Subscribe now and get instant access to personalized study tips, exam strategies, and daily motivation.
        </p>
        <Button
          asChild
          size="lg"
          className="h-12 px-10 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-primary/30"
        >
          <a href="https://paystack.shop/pay/9chimxa1yz" target="_blank" rel="noopener noreferrer">
            Get Started on WhatsApp
          </a>
        </Button>
      </div>
    </section>
  )
}
