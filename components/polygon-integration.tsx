'use client'

import { Button } from "@/components/ui/button"
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
    <section className="px-4 py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-b from-background via-purple-50/30 to-background dark:from-background dark:via-purple-950/10 dark:to-background">
      {/* Animated Web3 background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-8 dark:opacity-4 animate-web3-float" />
        <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-gradient-to-tr from-purple-500 to-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-8 dark:opacity-4" style={{ animationDelay: "2s", animation: "web3-float 4s ease-in-out infinite" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-300 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 dark:opacity-2" />
      </div>

      <div className="mx-auto max-w-5xl relative z-10">
        {/* Header Section with Polygon Icon */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-600 rounded-full blur-xl opacity-30 dark:opacity-20 animate-web3-glow" />
              <div className="relative bg-gradient-to-br from-purple-500 to-indigo-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zm0 10L2 17l10 5 10-5-10-5z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 dark:from-purple-900/40 dark:to-indigo-900/40 dark:text-purple-300 text-sm font-semibold border border-purple-200 dark:border-purple-700/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
              </span>
              Coming Soon – Launching 2026
            </span>
          </div>

          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-5xl md:text-5xl mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
            Built on Polygon – Web3 Education Infrastructure
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ExamHelper AI is evolving into a Web3-powered education platform using the Polygon blockchain. Our goal is to provide decentralized, transparent, and verifiable learning experiences for students globally.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-2 border-purple-200/60 dark:border-purple-700/40 hover:border-purple-400 dark:hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/20 transition-all duration-300 group bg-gradient-to-br from-white to-purple-50/30 dark:from-slate-900/50 dark:to-purple-950/20 backdrop-blur-sm hover:scale-105"
            >
              <CardContent className="pt-6 h-full flex flex-col">
                <div className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{feature.title}</h3>
                <p className="text-sm text-muted-foreground flex-grow leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlighted CTA Box */}
        <div className="bg-gradient-to-br from-purple-500/15 via-indigo-500/10 to-purple-600/15 dark:from-purple-900/30 dark:via-indigo-900/20 dark:to-purple-900/30 border-2 border-purple-300/50 dark:border-purple-600/40 rounded-xl p-8 md:p-10 text-center backdrop-blur-sm hover:border-purple-400 dark:hover:border-purple-500 transition-colors">
          <h3 className="text-2xl font-bold text-foreground mb-3 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
            The Future of Verifiable Education
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed text-base">
            By leveraging the Polygon blockchain, we're creating an ecosystem where learning achievements are immutable, transferable, and globally recognized. Every student will have complete control over their educational credentials.
          </p>
          <Button
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold h-12 px-8 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/30"
          >
            View Web3 Roadmap – Coming Soon
          </Button>
        </div>
      </div>
    </section>
  )
}
