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
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const initialMessage: Message = {
        id: "initial",
        text: "Welcome to ExamHelper AI 😊\n\nWe help students prepare for WAEC, JAMB, NECO, IELTS & university exams via WhatsApp.",
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

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    // Welcome greeting
    if (lowerMessage.includes("hi") || lowerMessage.includes("hello") || lowerMessage.includes("hey")) {
      return "Welcome to ExamHelper AI 😊\nWhat exam are you preparing for? (WAEC, JAMB, NECO, IELTS)"
    }

    // Exam keywords - provide help
    if (
      lowerMessage.includes("waec") ||
      lowerMessage.includes("jamb") ||
      lowerMessage.includes("neco") ||
      lowerMessage.includes("ielts") ||
      lowerMessage.includes("university")
    ) {
      const exam = lowerMessage.includes("waec")
        ? "WAEC"
        : lowerMessage.includes("jamb")
          ? "JAMB"
          : lowerMessage.includes("neco")
            ? "NECO"
            : lowerMessage.includes("ielts")
              ? "IELTS"
              : "your exam"

      const tips: Record<string, string> = {
        WAEC: "For WAEC success:\n• Focus on past papers\n• Practice time management\n• Study weak subjects more\n• Review formulas before exam",
        JAMB: "For JAMB preparation:\n• Use CBT practice platforms\n• Know current affairs (for Gen Studies)\n• Master syllabus topics\n• Practice with past questions",
        NECO: "For NECO exams:\n• Study the official syllabus\n• Practice with recent past papers\n• Focus on practical topics\n• Join study groups",
        IELTS:
          "For IELTS success:\n• Practice listening with official materials\n• Read academic texts\n• Do timed writing practice\n• Speak English daily",
      }

      return tips[exam] || `Great choice! What specific topic in ${exam} would you like help with?`
    }

    // Stress/worry - provide motivation or prayer
    if (
      lowerMessage.includes("worried") ||
      lowerMessage.includes("stressed") ||
      lowerMessage.includes("scared") ||
      lowerMessage.includes("afraid") ||
      lowerMessage.includes("hard") ||
      lowerMessage.includes("difficult") ||
      lowerMessage.includes("pray")
    ) {
      const motivations = [
        "You've got this! Consistent effort + smart study = success. Stay focused 💪",
        "Remember, every student who passed was once where you are now. Keep pushing!",
        "Prayer: May your studies bear fruit. May confusion clear. May success be yours. Amen 🙏",
        "Your worries show you care about passing. Channel that into focused study. You'll succeed!",
      ]
      return motivations[Math.floor(Math.random() * motivations.length)]
    }

    // Help/tips request
    if (
      lowerMessage.includes("help") ||
      lowerMessage.includes("tip") ||
      lowerMessage.includes("how") ||
      lowerMessage.includes("explain")
    ) {
      return "Tell me which exam you're preparing for and I'll give you specific tips to succeed!"
    }

    // Off-topic questions
    if (
      lowerMessage.includes("business") ||
      lowerMessage.includes("crypto") ||
      lowerMessage.includes("coding") ||
      lowerMessage.includes("relationship") ||
      lowerMessage.includes("money") ||
      lowerMessage.includes("loan")
    ) {
      return "I'm here to help only with exam preparation 😊"
    }

    // Default fallback
    return "Which exam are you preparing for? (WAEC, JAMB, NECO, IELTS)"
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
          <h3 className="font-bold text-lg">ExamHelper AI</h3>
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
            placeholder="Ask about ExamHelper AI..."
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
