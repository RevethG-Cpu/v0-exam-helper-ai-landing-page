"use client"

import { Card, CardContent } from "@/components/ui/card"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Chioma",
      exam: "JAMB",
      text: "ExamHelper AI helped me stay motivated during my exam prep. The daily tips and reminders kept me focused!",
    },
    {
      name: "Tunde",
      exam: "WAEC",
      text: "The WhatsApp integration makes it so easy to get study tips right on my phone. Can't imagine preparing without it now.",
    },
    {
      name: "Zainab",
      exam: "IELTS",
      text: "This service is exactly what I needed. Real study guidance without any shortcuts. Highly recommended!",
    },
  ]

  return (
    <section className="px-4 py-16 sm:py-20 md:py-24 bg-white">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl md:text-4xl mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-muted-foreground">Trusted by students across Nigeria</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-border hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.exam} Student</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
