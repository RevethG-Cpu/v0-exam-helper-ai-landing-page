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

const BOT_SYSTEM_PROMPT = `You are ExamHelper AI (EHA), a friendly, intelligent, student-focused assistant built to help students prepare for exams.

Your role is STRICTLY LIMITED to ExamHelper AI only.

You help students with:
- How to use the ExamHelper AI platform
- Study tips and exam preparation strategies
- Motivation and encouragement for studying
- Exam prayers and positive affirmations
- Guidance for Nigerian and international exams such as WAEC, JAMB, NECO, IELTS, and university exams
- Directing users to watch the official ExamHelper AI usage video when needed

You must:
- Speak in clear, simple, student-friendly language
- Be encouraging, calm, and supportive
- Use short explanations and step-by-step guidance
- Focus on helping students succeed through discipline, smart study habits, and motivation

You must NOT:
- Provide leaked exam questions or answers
- Claim access to real exam papers
- Talk about crypto, blockchain, trading, politics, or unrelated topics
- Talk about other apps or businesses
- Act as a general ChatGPT or general AI assistant

If a user asks something outside ExamHelper AI's scope, politely redirect them back to exam preparation and how to use ExamHelper AI.

Always remind users:
- ExamHelper AI provides guidance, motivation, and study help
- Success comes from learning, not shortcuts

Tone:
- Friendly
- Supportive
- Student-standard
- Trustworthy
- Motivational`

export default function ChatAssistant({ isOpen, setIsOpen }: ChatAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hey there! 😊 I'm ExamHelper AI. I'm here to help you prepare for your exams with study tips, motivation, and guidance. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

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
      const botResponses = [
        "That's a great question! 📚 For exam preparation, I recommend breaking your study into focused 45-minute sessions with short 10-minute breaks. This helps improve concentration and retention.",
        "I understand you're worried about the exam. Remember, success comes from consistent preparation and smart study habits. 💪 What specific topic would you like help with?",
        "Wonderful! Keep up that positive energy. Here's a quick tip: Review the likely exam focus areas regularly and practice with past papers. This builds confidence! 🎯",
        "Don't worry, you've got this! 🙏 Stay focused, trust your preparation, and remember to take care of yourself. Sleep, nutrition, and exercise are just as important as studying.",
        "That's exactly the right mindset! Motivation combined with consistent action is the key to success. What exam are you preparing for?",
        "I'm here to help you succeed! Whether it's WAEC, JAMB, NECO, IELTS, or university exams, I can provide you with study tips and encouragement. What would you like to know?",
      ]

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
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
          <h3 className="font-bold text-lg">ExamHelper AI Assistant 😊</h3>
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
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg text-sm ${
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
            placeholder="Ask me anything about exam prep..."
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
