'use client'

import { Card, CardContent } from "@/components/ui/card"

export default function PolygonIntegration() {
  const features = [
    {
      icon: "🔐",
      title: "On-chain Learning Credentials",
      description: "Store student achievements securely on the Polygon blockchain.",
    },
    {
      icon: "🎖️",
      title: "NFT Certificates",
      description: "Mint exam certificates as NFTs for verifiable academic proof.",
    },
    {
      icon: "👤",
      title: "Decentralized Student Identity",
      description: "Wallet-based student profiles for secure access.",
    },
    {
      icon: "📊",
      title: "Transparent Learning Records",
      description: "Enable schools, donors, and institutions to verify learning progress on-chain.",
    },
    {
      icon: "🪙",
      title: "Future Token & Governance",
      description: "Introduce a utility token for rewards, scholarships, and community governance.",
    },
  ]

  return (
    <section className="px-4 py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Gradient background with Web3 vibes */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 via-background to-background dark:from-purple-950/20 dark:to-background pointer-events-none" />

      {/* Subtle animated Web3 elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-web3-float" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5" style={{ animationDelay: "1s" }} />

      <div className="mx-auto max-w-5xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 text-sm font-semibold">
              <span className="animate-pulse">●</span>
              Coming Soon
            </span>
          </div>
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl md:text-4xl mb-4">
            Built on Polygon – Web3 Education Infrastructure
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ExamHelper AI is evolving into a Web3-powered education platform using the Polygon blockchain. Our goal is to provide decentralized, transparent, and verifiable learning experiences for students globally.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-2 border-purple-200 dark:border-purple-800 hover:shadow-lg hover:border-purple-400 dark:hover:border-purple-600 transition-all group bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
            >
              <CardContent className="pt-6 h-full flex flex-col">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-base font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground flex-grow">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlighted info box */}
        <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 dark:from-purple-900/20 dark:to-purple-800/20 border-2 border-purple-200 dark:border-purple-800 rounded-lg p-6 md:p-8 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-3">
            The Future of Verifiable Education
          </h3>
          <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
            By leveraging the Polygon blockchain, we're creating an ecosystem where learning achievements are immutable, transferable, and globally recognized. Every student will have complete control over their educational credentials.
          </p>
          <div className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
            🔮 More details coming soon
          </div>
        </div>
      </div>
    </section>
  )
}
