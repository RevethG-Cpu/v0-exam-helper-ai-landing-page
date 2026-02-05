import { Button } from "@/components/ui/button"

export default function VideoSection() {
  return (
    <section className="px-4 py-16 sm:py-20 md:py-24 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-14">
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl md:text-4xl mb-4">
            Watch How It Works
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">See ExamHelper AI in action and learn how to prepare smarter</p>
        </div>

        <div className="relative mx-auto max-w-2xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-muted mb-8">
          <div className="w-full h-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🎬</div>
              <p className="text-muted-foreground text-lg">Video placeholder</p>
              <p className="text-sm text-muted-foreground mt-2">Your video will appear here</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            asChild
            size="lg"
            className="h-12 px-8 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
          >
            <a href="https://wa.me/2348100710264" target="_blank" rel="noopener noreferrer">
              Start on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
