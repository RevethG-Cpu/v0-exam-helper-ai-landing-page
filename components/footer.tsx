export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-950 via-slate-900 to-black border-t border-slate-800/50 px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl">
        {/* Footer Logo Section */}
        <div className="flex justify-center mb-12">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-300" />
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-full p-4 backdrop-blur-sm hover:border-blue-500/50 transition-colors animate-web3-float">
              <img
                src="https://i.ibb.co/mVTSY17h/file-00000000a88c71f49bd5ef3686e79bdf.png"
                alt="ExamHelper AI Logo"
                className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12 pb-12 border-b border-slate-800/50">
          {/* Brand section */}
          <div>
            <h3 className="font-bold text-white mb-4 text-lg">ExamHelper AI</h3>
            <p className="text-sm text-slate-400">
              AI-powered exam preparation with blockchain-verified credentials. Prepare smarter, study faster, succeed confidently.
            </p>
            <div className="mt-6 pt-6 border-t border-slate-800/50">
              <p className="text-xs text-slate-500 mb-2">Support Email</p>
              <a href="mailto:support@examhelperai.online" className="text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                support@examhelperai.online
              </a>
            </div>
          </div>

          {/* Exams section */}
          <div>
            <h4 className="font-semibold text-white mb-4">Exams Supported</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="hover:text-blue-400 transition-colors">WAEC</li>
              <li className="hover:text-blue-400 transition-colors">JAMB</li>
              <li className="hover:text-blue-400 transition-colors">NECO</li>
              <li className="hover:text-blue-400 transition-colors">IELTS</li>
              <li className="hover:text-blue-400 transition-colors">University Exams</li>
            </ul>
          </div>

          {/* Quick links section */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#pricing-section" className="hover:text-blue-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="https://wa.me/2348100710264" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  WhatsApp Chat
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="space-y-4 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-4 backdrop-blur-sm">
            <p className="text-slate-300 font-medium text-sm">ExamHelper AI by RevNet Network Family</p>
            <p className="text-slate-400 text-xs mt-1">
              Web3-powered education platform with Polygon blockchain integration
            </p>
          </div>
          
          <p className="text-slate-500 text-xs">
            This service provides study guidance, motivation, and exam preparation support only. It does NOT provide leaked or illegal exam content.
          </p>
          <p className="text-slate-600 text-xs pt-2">© 2026 ExamHelper AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
