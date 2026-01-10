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

CONVERSATION FLOW:
1. On first greeting (hi, hello, start, etc.), respond with:
"👋 Welcome to ExamHelper AI (EHA)!
I'm your personal exam support assistant, here to help you with study tips, exam focus areas, prayers, motivation & reminders.

Let's get started 😊
What is your FULL NAME and the NAME of your SCHOOL?"

2. After user provides name and school, respond with:
"Nice to meet you, [Name]! 🎓
How can ExamHelper AI help you today?
You can ask for WAEC, JAMB, NECO, IELTS tips, motivation, or exam prayers."

3. For subsequent exam-related questions:
- Provide study tips, exam strategies, and motivation
- Be encouraging and supportive
- Only show motivational messages when contextually relevant to the conversation

RESTRICTIONS:
- Do NOT assume user emotions on first message
- Do NOT answer non-exam-related questions
- Politely redirect off-topic questions with: "That's outside my scope. I'm here to help with exam preparation! What exam are you preparing for?"
- Maintain friendly Nigerian student tone
- Do NOT provide leaked exam content

You help students with:
- Study tips and exam preparation strategies
- Motivation and encouragement for studying
- Exam prayers and positive affirmations
- Guidance for WAEC, JAMB, NECO, IELTS, and university exams
- How to use ExamHelper AI

Always remind users that success comes from learning and consistent effort, not shortcuts.`

export default function ChatAssistant({ isOpen, setIsOpen }: ChatAssistantProps) {
  const [conversationState, setConversationState] = useState<"new" | "awaiting_details" | "active">("new")
  const [userDetails, setUserDetails] = useState<{ name?: string; school?: string }>({})

  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Initialize with first message on mount
  useEffect(() => {
    if (messages.length === 0 && conversationState === "new") {
      const initialMessage: Message = {
        id: "1",
        text: "Hey there! 😊 I'm ExamHelper AI. I'm here to help you prepare for your exams with study tips, motivation, and guidance. How can I assist you today?",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages([initialMessage])
    }
  }, [])

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

    // First interaction - user greeting
    if (conversationState === "new") {
      setConversationState("awaiting_details")
      return `👋 Welcome to ExamHelper AI (EHA)!
I'm your personal exam support assistant, here to help you with study tips, exam focus areas, prayers, motivation & reminders.

Let's get started 😊
What is your FULL NAME and the NAME of your SCHOOL?`
    }

    // Awaiting user details (name and school)
    if (conversationState === "awaiting_details") {
      const details = extractNameAndSchool(userMessage)
      if (details.name && details.school) {
        setUserDetails(details)
        setConversationState("active")
        return `Nice to meet you, ${details.name}! 🎓
How can ExamHelper AI help you today?
You can ask for WAEC, JAMB, NECO, IELTS tips, motivation, or exam prayers.`
      } else {
        return `I'd love to get your details! Please share:
- Your full name
- Your school name

You can type them like: "John Smith and Lagos State University" or on separate lines.`
      }
    }

    // Active conversation - handle exam-related and off-topic questions
    const examKeywords = [
      "waec",
      "jamb",
      "neco",
      "ielts",
      "exam",
      "study",
      "test",
      "preparation",
      "prepare",
      "tips",
      "motivation",
      "prayer",
      "focus",
      "revision",
      "subject",
      "grade",
      "score",
      "syllabus",
      "past papers",
    ]

    const isExamRelated = examKeywords.some((keyword) => lowerMessage.includes(keyword))

    if (!isExamRelated && conversationState === "active") {
      return `That's outside my scope. I'm here to help with exam preparation! What exam are you preparing for? I can help with WAEC, JAMB, NECO, IELTS, or any other exam you're studying for. 📚`
    }

    // Exam-related responses
    const examResponses = [
      `Great question! 📚 For exam preparation, I recommend breaking your study into focused 45-minute sessions with short 10-minute breaks. This helps improve concentration and retention.${userDetails.name ? ` You've got this, ${userDetails.name}!` : ""}`,
      `I love your commitment to studying! 💪 Here's a quick tip: Review the likely exam focus areas regularly and practice with past papers. This builds confidence! 🎯`,
      `That's the right approach! Success comes from consistent preparation and smart study habits. What specific topic or exam are you focusing on?`,
      `Don't worry, you can do this! 🙏 Stay focused, trust your preparation, and remember to take care of yourself. Sleep, nutrition, and exercise are just as important as studying.`,
      `You're on the right track! 🚀 Remember, every study session brings you closer to your goal. Keep pushing forward!`,
      `Perfect! Whether it's WAEC, JAMB, NECO, IELTS, or university exams, consistent effort and smart strategies are your keys to success. What would you like to focus on?`,
    ]

    return examResponses[Math.floor(Math.random() * examResponses.length)]
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
            placeholder={
              conversationState === "new"
                ? "Type 'hi' or 'hello' to start..."
                : conversationState === "awaiting_details"
                  ? "Share your name and school..."
                  : "Ask me anything about exam prep..."
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
