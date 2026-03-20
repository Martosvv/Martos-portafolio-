import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Animated Pixel Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 animate-pulse-neon" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #00f6ff 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, #ff00ff 2px, transparent 2px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-glitch">
              <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent neon-glow">
                📞 CONTACT ZONE 📞
              </span>
            </h2>
            <p className="text-cyan-400 text-lg mb-4 animate-fade-in">
              ▸ READY TO START YOUR NEXT PROJECT?
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg border-4 border-yellow-400 animate-pulse-neon">
              <span className="text-2xl animate-bounce-pixel">⚡</span>
              <span className="text-white font-bold">LEVEL UP YOUR BUSINESS!</span>
              <span className="text-2xl animate-bounce-pixel">⚡</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Cards */}
            <div className="space-y-6 animate-slide-in-left">
              {/* Email Card */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border-4 border-cyan-400 rounded-lg p-6 pixel-shadow transform hover:scale-105 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl animate-bounce-pixel">
                      📧
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-cyan-400 mb-1">EMAIL QUEST</h3>
                      <p className="text-white">martos@ejemplo.com</p>
                      <p className="text-slate-400 text-xs mt-1">⏰ Response time: 24h</p>
                    </div>
                  </div>
                  {/* Pixel Corners */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-yellow-400"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-yellow-400"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-yellow-400"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-yellow-400"></div>
                </div>
              </div>

              {/* GitHub Card */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border-4 border-purple-400 rounded-lg p-6 pixel-shadow transform hover:scale-105 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl animate-float">
                      🐙
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-purple-400 mb-1">GITHUB HUB</h3>
                      <p className="text-white">github.com/martos</p>
                      <p className="text-slate-400 text-xs mt-1">💻 Check out my code!</p>
                    </div>
                  </div>
                  {/* Pixel Corners */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-yellow-400"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-yellow-400"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-yellow-400"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-yellow-400"></div>
                </div>
              </div>

              {/* LinkedIn Card */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border-4 border-green-400 rounded-lg p-6 pixel-shadow transform hover:scale-105 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl animate-bounce-pixel">
                      💼
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-green-400 mb-1">LINKEDIN LINK</h3>
                      <p className="text-white">linkedin.com/in/martos</p>
                      <p className="text-slate-400 text-xs mt-1">🤝 Let's connect!</p>
                    </div>
                  </div>
                  {/* Pixel Corners */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-yellow-400"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-yellow-400"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-yellow-400"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-yellow-400"></div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border-4 border-yellow-400 rounded-lg p-6 pixel-shadow">
                <h3 className="font-bold text-xl text-yellow-400 mb-4 text-center">
                  📊 QUICK STATS
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300 text-sm">✅ Projects Completed</span>
                    <span className="text-cyan-400 font-bold">50+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300 text-sm">😊 Happy Clients</span>
                    <span className="text-pink-400 font-bold">40+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300 text-sm">⏱️ Avg Response</span>
                    <span className="text-green-400 font-bold">&lt;24h</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border-4 border-pink-500 rounded-lg p-8 pixel-shadow">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-pink-400 mb-2">
                      🎯 START YOUR QUEST! 🎯
                    </h3>
                    <p className="text-slate-400 text-sm">
                      Fill the form to unlock collaboration
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-cyan-400 mb-2">
                        ▸ PLAYER NAME
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-950 border-2 border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 text-white transition-all font-semibold"
                        placeholder="Enter your name..."
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-pink-400 mb-2">
                        ▸ EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-950 border-2 border-slate-700 rounded-lg focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 text-white transition-all font-semibold"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-yellow-400 mb-2">
                        ▸ YOUR MESSAGE
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-slate-950 border-2 border-slate-700 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 text-white transition-all resize-none font-semibold"
                        placeholder="Describe your project idea..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 via-pink-500 to-yellow-500 hover:from-yellow-500 hover:via-pink-500 hover:to-cyan-500 text-white rounded-lg font-bold text-lg border-4 border-white transform hover:scale-105 transition-all duration-300 pixel-shadow animate-pulse-neon"
                    >
                      🚀 SEND MESSAGE 🚀
                    </button>

                    {isSubmitted && (
                      <div className="text-center p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg border-4 border-white animate-pixel-pop">
                        <div className="text-white font-bold flex items-center justify-center gap-2">
                          <span className="text-2xl animate-bounce-pixel">✅</span>
                          <span>MESSAGE SENT! QUEST ACCEPTED!</span>
                          <span className="text-2xl animate-bounce-pixel">✅</span>
                        </div>
                      </div>
                    )}
                  </form>

                  {/* Pixel Corners */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-white"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-white"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-white"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-white"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Special Promotion Banner */}
          <div className="mt-12 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 border-4 border-white rounded-lg p-8 text-center pixel-shadow relative overflow-hidden animate-pulse-neon">
            <div className="absolute inset-0 opacity-30 animate-float" style={{
              backgroundImage: `repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 20px,
                rgba(255, 255, 255, 0.2) 20px,
                rgba(255, 255, 255, 0.2) 40px
              )`
            }}></div>
            <div className="relative z-10">
              <div className="text-5xl mb-4 animate-bounce-pixel">🎁💰🎁</div>
              <h3 className="text-3xl font-bold text-white mb-3">
                🔥 SPECIAL LAUNCH OFFER! 🔥
              </h3>
              <p className="text-white text-xl font-bold mb-2">
                First 5 clients get <span className="text-yellow-300 text-3xl animate-glitch">30% OFF</span>
              </p>
              <p className="text-white/90 text-sm">
                + FREE maintenance for 3 months + Priority support
              </p>
            </div>
          </div>

          {/* Why Choose Me Section */}
          <div className="mt-12 grid md:grid-cols-4 gap-4">
            <div className="bg-slate-800 border-4 border-cyan-400 rounded-lg p-4 text-center pixel-shadow transform hover:scale-105 transition-all">
              <div className="text-3xl mb-2 animate-bounce-pixel">⚡</div>
              <h4 className="text-cyan-400 font-bold text-sm mb-1">FAST</h4>
              <p className="text-slate-400 text-xs">Quick delivery</p>
            </div>
            <div className="bg-slate-800 border-4 border-pink-400 rounded-lg p-4 text-center pixel-shadow transform hover:scale-105 transition-all">
              <div className="text-3xl mb-2 animate-float">💎</div>
              <h4 className="text-pink-400 font-bold text-sm mb-1">QUALITY</h4>
              <p className="text-slate-400 text-xs">Premium code</p>
            </div>
            <div className="bg-slate-800 border-4 border-yellow-400 rounded-lg p-4 text-center pixel-shadow transform hover:scale-105 transition-all">
              <div className="text-3xl mb-2 animate-bounce-pixel">🛡️</div>
              <h4 className="text-yellow-400 font-bold text-sm mb-1">SUPPORT</h4>
              <p className="text-slate-400 text-xs">Always available</p>
            </div>
            <div className="bg-slate-800 border-4 border-green-400 rounded-lg p-4 text-center pixel-shadow transform hover:scale-105 transition-all">
              <div className="text-3xl mb-2 animate-float">🏆</div>
              <h4 className="text-green-400 font-bold text-sm mb-1">PROVEN</h4>
              <p className="text-slate-400 text-xs">50+ projects</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-5 text-4xl animate-float">💫</div>
      <div className="absolute top-1/3 right-5 text-4xl animate-bounce-pixel">⭐</div>
      <div className="absolute bottom-1/3 left-5 text-4xl animate-float">✨</div>
      <div className="absolute bottom-10 right-5 text-4xl animate-bounce-pixel">🌟</div>
    </section>
  )
}
