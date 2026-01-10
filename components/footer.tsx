export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-blue-50 border-t border-border px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 md:grid-cols-3 mb-8 pb-8 border-b border-border">
          <div>
            <h3 className="font-bold text-foreground mb-4">ExamHelper AI</h3>
            <p className="text-sm text-muted-foreground">
              Smart exam preparation with AI-powered tips, motivation, and reminders via WhatsApp.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Exams Supported</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>WAEC</li>
              <li>JAMB</li>
              <li>NECO</li>
              <li>IELTS</li>
              <li>University Exams</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center space-y-3 text-sm">
          <p className="text-foreground font-semibold">ExamHelper AI by RevNet Network Family</p>
          <p className="text-muted-foreground">
            This service provides study guidance, motivation, and exam preparation support only. It does NOT provide
            leaked or illegal exam content.
          </p>
          <p className="text-xs text-muted-foreground/60 pt-4">© 2026 ExamHelper AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
