"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Send } from "lucide-react"
import { Card } from "@/components/ui/card"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

interface ChatAssistantProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export default function ChatAssistant({ isOpen, setIsOpen }: ChatAssistantProps) {
  const [conversationState, setConversationState] = useState<
    "new" | "awaiting_details" | "active" | "awaiting_subscription" | "subscribed"
  >("new")
  const [userDetails, setUserDetails] = useState<{ name?: string; school?: string }>({})
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const initialMessage: Message = {
        id: "initial",
        text: "👋 Hi there! Type a message to get started with ExamHelper AI.",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages([initialMessage])
    }
  }, [isOpen])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const extractNameAndSchool = (text: string): { name?: string; school?: string } => {
    const parts = text.split(/and|,|\n/)
    if (parts.length >= 2) {
      return {
        name: parts[0].trim(),
        school: parts[1].trim(),
      }
    }
    return {}
  }

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()
    const greetings = ["hi", "hello", "hey", "start", "begin", "help"]
    const isGreeting = greetings.some((g) => lowerMessage.includes(g))

    // First interaction - user greeting
    if (conversationState === "new" && isGreeting) {
      setConversationState("awaiting_details")
      return `Welcome to ExamHelper AI (EHA) 🎓
By RevNet Network Family

I help students prepare for:
WAEC • JAMB • NECO • IELTS • University Exams

Please tell me:
1️⃣ Your full name
2️⃣ Your school`
    }

    // Awaiting user details (name and school)
    if (conversationState === "awaiting_details") {
      const details = extractNameAndSchool(userMessage)
      if (details.name && details.school) {
        setUserDetails(details)
        setConversationState("active")
        return `Nice to meet you, ${details.name} 👋

What exam are you preparing for?
(Example: WAEC, JAMB, NECO, IELTS)`
      } else {
        return `I'd love to get your details! Please share:
- Your full name
- Your school name

You can type: "John Smith and Lagos State University"`
      }
    }

    // Active conversation - user mentions an exam
    if (conversationState === "active") {
      const examKeywords = ["waec", "jamb", "neco", "ielts", "exam", "prepare"]
      const isExamMention = examKeywords.some((keyword) => lowerMessage.includes(keyword))

      if (isExamMention) {
        setConversationState("awaiting_subscription")
        return `Great choice 👍

Before I give you detailed study tips, focus areas, and exam guidance, please confirm your access.

🔓 ExamHelper AI is a subscription-based service.

Choose a plan:
Weekly – ₦1,000 (7 days access)
Monthly – ₦3,500 (30 days access)

👇 Subscribe here:
Weekly: https://paystack.shop/pay/hrembxm-55
Monthly: https://paystack.shop/pay/17hhc-82l-

If you're just exploring, I can still share:
✔ How ExamHelper AI works
✔ General exam motivation
✔ Exam prayers
✔ How to use the platform

What would you like to do?`
      }

      // Off-topic redirect
      return `That's outside my scope. I'm here to help with exam preparation!
What exam are you preparing for? (WAEC, JAMB, NECO, IELTS) 📚`
    }

    // Awaiting subscription - user responds to subscription prompt
    if (conversationState === "awaiting_subscription") {
      const subscriptionKeywords = ["subscribed", "paid", "purchased", "confirmed", "done", "weekly", "monthly"]
      const isSubscriptionConfirmed = subscriptionKeywords.some((keyword) => lowerMessage.includes(keyword))

      if (isSubscriptionConfirmed) {
        setConversationState("subscribed")
        return `🎉 Welcome onboard, ${userDetails.name}!

I'm ready to help you succeed 💪

Tell me:
• Which subject you want help with
• Your exam date (if available)

Let's prepare step by step.`
      }

      // Non-subscription allowed responses
      const generalAllowedKeywords = [
        "how does it work",
        "explain",
        "prayer",
        "motivation",
        "encourage",
        "doubt",
        "scared",
        "worried",
        "nervous",
      ]
      const isGeneralRequest = generalAllowedKeywords.some((keyword) => lowerMessage.includes(keyword))

      if (isGeneralRequest) {
        if (lowerMessage.includes("prayer") || lowerMessage.includes("encourage")) {
          return `That's exactly the right mindset! Motivation combined with consistent action is the key to success 💪

Remember, you have the capability to succeed. Keep pushing forward! 🙏

When you're ready to unlock full exam-specific help, subscribe using the links above.`
        }

        return `ExamHelper AI helps students study smarter by:
✔ Daily study guidance
✔ Motivation & exam prayers
✔ WhatsApp delivery
✔ Nigerian-focused exam support

To unlock full exam-specific help (focus areas, detailed tips, study schedules), please subscribe using the links above.`
      }

      // Default redirect back to subscription
      return `To get detailed exam guidance, please subscribe:
Weekly: https://paystack.shop/pay/hrembxm-55
Monthly: https://paystack.shop/pay/17hhc-82l-

Or let me know if you'd like general motivation or exam prayers 🙏`
    }

    // Subscribed - user can access full content
    if (conversationState === "subscribed") {
      const examKeywords = [
        "waec",
        "jamb",
        "neco",
        "ielts",
        "study",
        "focus",
        "tip",
        "subject",
        "preparation",
        "strategy",
      ]
      const isExamRelated = examKeywords.some((keyword) => lowerMessage.includes(keyword))

      if (isExamRelated) {
        const examResponses = [
          `Excellent! 📚 For exam preparation, I recommend:
• Break your study into focused 45-minute sessions with 10-minute breaks
• Review likely exam focus areas regularly
• Practice with past papers
You've got this, ${userDetails.name}! 💪`,

          `That's the right approach! 🎯 Success comes from consistent preparation and smart study habits.

Key tips:
• Create a study schedule
• Focus on high-yield topics
• Take practice tests
• Review weak areas

What's your next focus area?`,

          `Perfect! Here's my guidance:
✔ Start with the syllabus and identify key topics
✔ Use active recall and spaced repetition
✔ Join study groups if possible
✔ Practice with past papers regularly

You're on the right track! 🚀`,

          `Great question! For ${userDetails.name}:
• Break complex topics into smaller chunks
• Teach concepts to someone else (improves retention)
• Use mnemonics for hard-to-remember facts
• Review regularly - don't cram the night before

Keep pushing! 💪`,
        ]
        return examResponses[Math.floor(Math.random() * examResponses.length)]
      }

      // Off-topic even when subscribed
      return `I'm here to help only with exam preparation and ExamHelper AI.
Please let me know how I can support your studies 📚`
    }

    // Default fallback
    return `I'm here to help with exam preparation! 
What exam are you preparing for? 📚`
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(input)

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
      setIsLoading(false)
    }, 500)
  }

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 rounded-full h-14 w-14 shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground z-40 flex items-center justify-center"
        size="icon"
      >
        <span className="text-xl">😊</span>
      </Button>
    )
  }

  return (
    <Card className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-2rem)] h-[600px] flex flex-col shadow-2xl z-50 border-2 border-border">
      <div className="bg-primary text-primary-foreground p-4 rounded-t-lg flex justify-between items-center">
        <div>
          <h3 className="font-bold text-lg">ExamHelper AI (EHA) 😊</h3>
          <p className="text-xs opacity-90">Online & ready to help</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(false)}
          className="text-primary-foreground hover:bg-primary/80 h-8 w-8"
        >
          <X className="w-5 h-5" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg text-sm whitespace-pre-wrap ${
                message.sender === "user"
                  ? "bg-primary text-primary-foreground rounded-br-none"
                  : "bg-muted text-foreground rounded-bl-none"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-muted text-foreground px-4 py-2 rounded-lg text-sm">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-100" />
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-200" />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="border-t border-border p-4 bg-background rounded-b-lg">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              conversationState === "awaiting_details" ? "Your name and school..." : "Ask about exam prep..."
            }
            className="flex-1 px-3 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
          />
          <Button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-primary hover:bg-primary/90 text-primary-foreground h-10 w-10 p-0 rounded-lg"
            size="icon"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </form>
    </Card>
  )
}
