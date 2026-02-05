"use client"

import { Button } from "@/components/ui/button"

export default function Hero() {
  const handleSubscribeClick = () => {
    const pricingSection = document.getElementById("pricing-section")
    pricingSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-slate-900 to-slate-950 px-4 py-20 sm:py-32 md:py-48 scroll-mt-20 border-b border-slate-800/50">
      {/* Animated gradient background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500 via-purple-500 to-transparent rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-web3-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-600 via-indigo-500 to-transparent rounded-full mix-blend-screen filter blur-3xl opacity-8" style={{ animationDelay: "2s", animation: "web3-float 4s ease-in-out infinite" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-5" />
        
        {/* Grid pattern overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center lg:gap-16">
          {/* Left side - Text content */}
          <div className="flex flex-col justify-center">
            {/* Top badge */}
            <div className="mb-6 inline-block rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 px-4 py-2 w-fit backdrop-blur-sm hover:border-blue-500/50 transition-colors">
              <p className="text-sm font-semibold text-blue-300 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                </span>
                AI + Web3 Education Platform
              </p>
            </div>

            {/* Main headline */}
            <h1 className="text-balance text-4xl font-black tracking-tight text-white sm:text-6xl md:text-6xl lg:text-7xl mb-6 leading-tight bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
              Master Exams With AI Intelligence
            </h1>

            {/* Subheadline */}
            <p className="text-balance text-lg text-slate-300 mb-8 sm:text-xl leading-relaxed max-w-xl">
              Personalized study strategies, blockchain-verified credentials, and Web3-powered learning. Get instant AI-driven exam preparation on WhatsApp with transparent, decentralized credentials.
            </p>

            {/* Key features list */}
            <div className="space-y-3 mb-10">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-200">AI-powered personalized study paths</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-200">Instant WhatsApp delivery & support</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-200">Web3 credentials on Polygon blockchain</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-3 sm:flex-row mb-12">
              <Button
                onClick={handleSubscribeClick}
                size="lg"
                className="w-full sm:w-auto h-12 px-8 text-base font-bold bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg transition-all duration-200 active:scale-95 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
              >
                Get Started Now
              </Button>
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto h-12 px-8 text-base font-bold border-2 border-slate-600 text-white hover:bg-slate-800/50 rounded-lg bg-slate-900/50 backdrop-blur-sm transition-all duration-200 active:scale-95"
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

            {/* Contact email */}
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Support: </span>
              <a href="mailto:support@examhelperai.online" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                support@examhelperai.online
              </a>
            </div>
          </div>

          {/* Right side - Visual showcase */}
          <div className="relative hidden md:flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent rounded-2xl blur-3xl opacity-40" />
              
              {/* Card container */}
              <div className="relative bg-gradient-to-br from-slate-800/40 via-slate-900/60 to-slate-950/80 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-xl">
                <div className="space-y-6">
                  {/* Logo */}
                  <div className="flex items-center justify-center group">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full blur-2xl opacity-50 group-hover:opacity-75 animate-web3-glow transition-opacity duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-30 group-hover:opacity-40 animate-pulse" />
                      <img
                        src="https://i.ibb.co/zT9RNr5h/file-00000000a7ec71f4a94a471b2f1d7b7a-1.png"
                        alt="ExamHelper AI"
                        className="relative w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-300 animate-web3-float"
                      />
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800/40 border border-slate-700/30 rounded-lg p-4 text-center hover:border-blue-600/50 transition-colors">
                      <div className="text-2xl font-bold text-blue-400">2K+</div>
                      <div className="text-xs text-slate-400 mt-1">Active Students</div>
                    </div>
                    <div className="bg-slate-800/40 border border-slate-700/30 rounded-lg p-4 text-center hover:border-blue-600/50 transition-colors">
                      <div className="text-2xl font-bold text-purple-400">98%</div>
                      <div className="text-xs text-slate-400 mt-1">Success Rate</div>
                    </div>
                  </div>

                  {/* Feature highlight */}
                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-400 font-bold text-sm">⚡</span>
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm">Real-time AI Assistance</div>
                        <div className="text-xs text-slate-300 mt-1">24/7 personalized study support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
