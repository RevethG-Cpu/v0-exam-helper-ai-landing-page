"use client"

import { useState } from "react"
import Hero from "@/components/hero"
import HowItWorks from "@/components/how-it-works"
import Features from "@/components/features"
import VideoSection from "@/components/video-section"
import Pricing from "@/components/pricing"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import ChatAssistant from "@/components/chat-assistant"
import StickyWhatsApp from "@/components/sticky-whatsapp"

export default function Home() {
  const [showChat, setShowChat] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <HowItWorks />
      <Features />
      <VideoSection />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
      <ChatAssistant isOpen={showChat} setIsOpen={setShowChat} />
      <StickyWhatsApp />
    </main>
  )
}
