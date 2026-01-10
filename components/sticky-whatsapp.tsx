"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function StickyWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show the sticky button after 2 seconds on mobile
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden flex gap-3 items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white rounded-full shadow-lg">
        <Button
          size="lg"
          className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all duration-200 active:scale-95"
          asChild
        >
          <a
            href="https://wa.me/2348100710264"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.732 5.41 2.124 7.738L2.514 21.5l8.236-2.164c2.257 1.226 4.784 1.873 7.352 1.873 5.355 0 9.737-4.363 9.737-9.798 0-2.614-.636-5.08-1.84-7.37-1.203-2.29-2.916-4.34-4.959-5.749-2.042-1.41-4.405-2.226-6.831-2.226z" />
            </svg>
          </a>
        </Button>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
        aria-label="Close WhatsApp button"
      >
        <X className="w-4 h-4 text-gray-600" />
      </button>
    </div>
  )
}
