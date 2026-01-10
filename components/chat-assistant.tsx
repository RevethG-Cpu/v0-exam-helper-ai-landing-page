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

type ConversationStage =
  | "WELCOME"
  | "COLLECT_NAME_SCHOOL"
  | "CHECK_SUBSCRIPTION"
  | "LIMITED_HELP"
  | "SUBSCRIBED_HELP"
  | "OUT_OF_SCOPE"

interface ChatAssistantProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export default function ChatAssistant({ isOpen, setIsOpen }: ChatAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [conversationStage, setConversationStage] = useState<ConversationStage>("WELCOME")
  const [userName, setUserName] = useState("")
  const [userSchool, setUserSchool] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const initialMessage: Message = {
        id: "initial",
        text: 'Welcome to ExamHelper AI (EHA) 😊\nI help students prepare for WAEC, JAMB, NECO, IELTS, and university exams.\n\nBefore we begin, please tell me:\n• Your full name\n• Your school\n\nExample:\n"Blessing Okafor, University of Benin"',
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages([initialMessage])
      setConversationStage("COLLECT_NAME_SCHOOL")
    }
  }, [isOpen])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const parseNameAndSchool = (input: string): { name: string; school: string } | null => {
    if (input.includes(",")) {
      const [name, school] = input.split(",").map((s) => s.trim())
      if (name && school) return { name, school }
    }

    const andSplit = input.split(/\s+and\s+/i)
    if (andSplit.length === 2 && andSplit[0].trim() && andSplit[1].trim()) {
      return { name: andSplit[0].trim(), school: andSplit[1].trim() }
    }

    const lineSplit = input.trim().split("\n")
    if (lineSplit.length >= 2 && lineSplit[0].trim() && lineSplit[1].trim()) {
      return { name: lineSplit[0].trim(), school: lineSplit[1].trim() }
    }

    return null
  }

  const generateBotResponse = (userMessage: string): { response: string; newStage: ConversationStage } => {
    const lowerMessage = userMessage.toLowerCase()

    if (conversationStage === "COLLECT_NAME_SCHOOL") {
      const parsed = parseNameAndSchool(userMessage)
      if (parsed) {
        setUserName(parsed.name)
        setUserSchool(parsed.school)
        return {
          response: `Nice to meet you, ${parsed.name}! 🎓\n${parsed.school} — great choice.\n\nHow can ExamHelper AI help you today?\nYou can ask about:\nWAEC, JAMB, NECO, IELTS, study tips, or exam motivation.`,
          newStage: "CHECK_SUBSCRIPTION",
        }
      }
      return {
        response: `Please provide your name and school together. Example: "Blessing Okafor, University of Benin"`,
        newStage: "COLLECT_NAME_SCHOOL",
      }
    }

    const isGreeting =
      lowerMessage.includes("hi") ||
      lowerMessage.includes("hello") ||
      lowerMessage.includes("hey") ||
      lowerMessage.includes("good morning")

    const isDeepHelpRequest =
      lowerMessage.includes("study plan") ||
      lowerMessage.includes("focus area") ||
      lowerMessage.includes("strategy") ||
      lowerMessage.includes("subject") ||
      lowerMessage.includes("explain") ||
      lowerMessage.includes("tips for") ||
      lowerMessage.includes("how to study")

    const isExamQuestion =
      lowerMessage.includes("waec") ||
      lowerMessage.includes("jamb") ||
      lowerMessage.includes("neco") ||
      lowerMessage.includes("ielts") ||
      lowerMessage.includes("university") ||
      lowerMessage.includes("exam")

    const isStressMessage =
      lowerMessage.includes("worried") ||
      lowerMessage.includes("stressed") ||
      lowerMessage.includes("scared") ||
      lowerMessage.includes("afraid") ||
      lowerMessage.includes("hard") ||
      lowerMessage.includes("difficult") ||
      lowerMessage.includes("pray") ||
      lowerMessage.includes("anxious") ||
      lowerMessage.includes("nervous")

    const isPaidConfirmation =
      lowerMessage.includes("i've paid") || lowerMessage.includes("i paid") || lowerMessage.includes("paid")

    const isOutOfScope =
      lowerMessage.includes("business") ||
      lowerMessage.includes("crypto") ||
      lowerMessage.includes("coding") ||
      lowerMessage.includes("relationship") ||
      lowerMessage.includes("money") ||
      lowerMessage.includes("politics") ||
      lowerMessage.includes("loan")

    if (isPaidConfirmation && !isSubscribed && conversationStage !== "SUBSCRIBED_HELP") {
      setIsSubscribed(true)
      return {
        response: `🎉 Welcome to ExamHelper AI Premium!\n\nWhat exam are you preparing for?\n(WAEC, JAMB, NECO, IELTS, or University exams)`,
        newStage: "SUBSCRIBED_HELP",
      }
    }

    if (
      (conversationStage === "CHECK_SUBSCRIPTION" || conversationStage === "LIMITED_HELP") &&
      isDeepHelpRequest &&
      !isSubscribed
    ) {
      return {
        response: `To access full exam tips and personalized guidance, you need an active subscription.\n\n📌 Plans:\n• Weekly: ₦1,000 (7 days)\n• Monthly: ₦3,500 (30 days)\n\n👉 Weekly:\nhttps://paystack.shop/pay/hrembxm-55\n\n👉 Monthly:\nhttps://paystack.shop/pay/17hhc-82l-\n\nAfter payment, come back and say:\n"I've paid" 😊`,
        newStage: "LIMITED_HELP",
      }
    }

    if (isStressMessage) {
      const motivations = [
        "That's exactly the right mindset! Motivation combined with consistent action is the key to success. 💪\nWhat exam are you preparing for?",
        `I understand you're worried about the exam. Remember, success comes from consistent preparation and smart study habits 🌱\nWhat specific topic would you like help with?`,
        `Prayer: May your studies bear fruit. May confusion clear. May success be yours. Amen 🙏\n\nYou've got this! Stay focused and consistent.`,
        `Every successful student once felt what you're feeling now. Channel that energy into focused study. You'll make it! 💪`,
      ]
      return {
        response: motivations[Math.floor(Math.random() * motivations.length)],
        newStage: conversationStage === "LIMITED_HELP" ? "LIMITED_HELP" : conversationStage,
      }
    }

    if (isSubscribed && conversationStage === "SUBSCRIBED_HELP") {
      if (isExamQuestion) {
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
          WAEC: "For WAEC success:\n• Focus on past papers - they repeat topics\n• Practice time management during exams\n• Study weak subjects more intensively\n• Review formulas and key concepts before exam day\n• Join study groups for peer learning",
          JAMB: "For JAMB preparation:\n• Use CBT practice platforms daily\n• Master current affairs (for General Studies)\n• Know the syllabus inside out\n• Practice with past questions under timed conditions\n• Focus on likely questions from each topic",
          NECO: "For NECO exams:\n• Study the official NECO syllabus thoroughly\n• Practice with recent past papers\n• Focus on practical and theory topics equally\n• Join study groups for discussions\n• Take mock exams seriously",
          IELTS:
            "For IELTS success:\n• Practice listening with official IELTS materials\n• Read academic texts regularly\n• Do timed writing practice (essays and reports)\n• Speak English daily - record yourself\n• Take full practice tests monthly",
        }

        return {
          response: tips[exam] || `What specific topic in ${exam} would you like detailed help with?`,
          newStage: "SUBSCRIBED_HELP",
        }
      }
      return {
        response: `What exam are you preparing for? I can help with WAEC, JAMB, NECO, IELTS, or university exams.`,
        newStage: "SUBSCRIBED_HELP",
      }
    }

    if (!isSubscribed && (conversationStage === "CHECK_SUBSCRIPTION" || conversationStage === "LIMITED_HELP")) {
      if (isExamQuestion) {
        return {
          response: `ExamHelper AI helps students prepare for WAEC, JAMB, NECO, IELTS, and university exams through personalized study tips, motivation, and exam guidance.\n\nTo unlock full exam-specific help, please subscribe:\n• Weekly: ₦1,000 (7 days)\n• Monthly: ₦3,500 (30 days)\n\n👉 Subscribe: https://paystack.shop/pay/hrembxm-55 (Weekly) or https://paystack.shop/pay/17hhc-82l- (Monthly)`,
          newStage: "LIMITED_HELP",
        }
      }
    }

    if (isOutOfScope) {
      return {
        response: `I'm here specifically to help with exam preparation and student support 😊\nPlease let me know how I can assist you with your studies.`,
        newStage: "OUT_OF_SCOPE",
      }
    }

    if (conversationStage === "COLLECT_NAME_SCHOOL") {
      return {
        response: `Please tell me your full name and school. Example: "Blessing Okafor, University of Benin"`,
        newStage: "COLLECT_NAME_SCHOOL",
      }
    }

    return {
      response: `Which exam are you preparing for? (WAEC, JAMB, NECO, IELTS, or University exams)`,
      newStage: conversationStage,
    }
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
      const { response, newStage } = generateBotResponse(input)

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
      setConversationStage(newStage)
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
