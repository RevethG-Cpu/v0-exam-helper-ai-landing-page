import { Button } from "@/components/ui/button"

export default function VideoSection() {
  return (
    <section className="px-4 py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-blue-50/20 to-white">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl md:text-5xl mb-4">
            Explore the Future of Learning with ExamHelper AI
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">See how AI + Web3 technology is transforming exam preparation and student success</p>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Video 1 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20">
              {/* Glassmorphism overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300 pointer-events-none" />
              
              {/* Video embed */}
              <div className="relative aspect-video bg-black overflow-hidden">
                <iframe
                  src="https://streamable.com/e/e52qrq?autoplay=0"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  title="ExamHelper AI - AI + Web3 transforming learning"
                />
              </div>
            </div>
            
            {/* Video Caption */}
            <div className="mt-4 px-2">
              <p className="text-center text-muted-foreground font-medium">
                AI + Web3 transforming how students learn.
              </p>
            </div>
          </div>

          {/* Video 2 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20">
              {/* Glassmorphism overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-300 pointer-events-none" />
              
              {/* Video embed */}
              <div className="relative aspect-video bg-black overflow-hidden">
                <iframe
                  src="https://streamable.com/e/pj48vu?autoplay=0"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  title="ExamHelper AI — smarter learning powered by blockchain"
                />
              </div>
            </div>
            
            {/* Video Caption */}
            <div className="mt-4 px-2">
              <p className="text-center text-muted-foreground font-medium">
                ExamHelper AI — smarter learning powered by blockchain.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-6">
          <p className="text-center text-foreground text-lg font-semibold max-w-xl">
            Ready to transform your exam preparation with AI + Web3?
          </p>
          <Button
            asChild
            size="lg"
            className="h-12 px-10 text-base font-semibold bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-200"
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
