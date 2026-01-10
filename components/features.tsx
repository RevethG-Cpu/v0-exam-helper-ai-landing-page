import { Card, CardContent } from "@/components/ui/card"

export default function Features() {
  const features = [
    {
      icon: "📚",
      title: "Daily Exam Tips",
      description: "Get expert study strategies tailored to your exam",
    },
    {
      icon: "🎯",
      title: "Likely Exam Focus Areas",
      description: "Discover what topics are likely to appear on your exam",
    },
    {
      icon: "💪",
      title: "Study Motivation & Reminders",
      description: "Stay motivated with daily encouragement and study reminders",
    },
    {
      icon: "🙏",
      title: "Exam-Day Prayers & Encouragement",
      description: "Get inspired with exam prayers and positive affirmations",
    },
    {
      icon: "📱",
      title: "Works on Any Phone",
      description: "No app install needed, just use WhatsApp",
    },
    {
      icon: "⚡",
      title: "Instant Delivery",
      description: "Messages delivered instantly to your phone",
    },
  ]

  return (
    <section className="px-4 py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl md:text-4xl mb-4">
            Powerful Features for Your Success
          </h2>
          <p className="text-lg text-muted-foreground">Everything you need to prepare for your exam with confidence</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 border-border hover:shadow-lg transition-all hover:border-primary/30">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="text-4xl flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
