export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      gradient: 'from-blue-500 to-cyan-500',
      borderColor: 'border-cyan-400',
      price: '💰 $2,500',
      discount: '25% OFF',
      badge: '🔥 HOT',
      icon: '🛒',
      features: ['Payment Gateway', 'Admin Panel', 'Real-time Updates']
    },
    {
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones y seguimiento de proyectos.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      gradient: 'from-purple-500 to-pink-500',
      borderColor: 'border-pink-400',
      price: '💰 $1,800',
      discount: null,
      badge: '⭐ NEW',
      icon: '📋',
      features: ['Real-time Collab', 'Notifications', 'Project Tracking']
    },
    {
      title: 'Weather Dashboard',
      description: 'Dashboard meteorológico interactivo con datos en tiempo real, gráficos y pronósticos extendidos.',
      technologies: ['React', 'API Integration', 'Chart.js', 'CSS'],
      gradient: 'from-green-500 to-emerald-500',
      borderColor: 'border-green-400',
      price: '💰 $1,200',
      discount: '30% OFF',
      badge: '💎 DEAL',
      icon: '🌤️',
      features: ['Live Weather', 'Charts & Graphs', 'Extended Forecast']
    },
    {
      title: 'Portfolio CMS',
      description: 'Sistema de gestión de contenido para portafolios con editor visual y generación de sitios estáticos.',
      technologies: ['React', 'Next.js', 'Prisma', 'PostgreSQL'],
      gradient: 'from-orange-500 to-red-500',
      borderColor: 'border-orange-400',
      price: '💰 $3,000',
      discount: null,
      badge: '👑 PREMIUM',
      icon: '🎨',
      features: ['Visual Editor', 'Static Site Gen', 'Database Integration']
    },
  ]

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-slate-950">
      {/* Retro Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(#ff00ff 1px, transparent 1px),
            linear-gradient(90deg, #00f6ff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-glitch">
              <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent retro-text-shadow">
                🎮 PROJECT CATALOG 🎮
              </span>
            </h2>
            <p className="text-cyan-400 text-lg mb-6 animate-fade-in">
              ▸ SELECT YOUR QUEST - PREMIUM PROJECTS FOR SALE
            </p>
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-lg border-4 border-white pixel-shadow animate-pulse-neon">
              <span className="text-2xl animate-bounce-pixel">💎</span>
              <span className="text-white font-bold text-lg">LIMITED TIME OFFERS!</span>
              <span className="text-2xl animate-bounce-pixel">💎</span>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative animate-pixel-pop"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000`}></div>

                {/* Card */}
                <div className={`relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border-4 ${project.borderColor} overflow-hidden pixel-shadow transform hover:scale-105 transition-all duration-300`}>
                  {/* Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold text-xs rounded-full border-2 border-white animate-bounce-pixel">
                      {project.badge}
                    </span>
                  </div>

                  {/* Discount Badge */}
                  {project.discount && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold text-xs rounded-full border-2 border-white animate-pulse-neon">
                        {project.discount}
                      </span>
                    </div>
                  )}

                  <div className="p-8">
                    {/* Icon */}
                    <div className="text-6xl mb-4 animate-float text-center">
                      {project.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-3 text-center text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 mb-6 leading-relaxed text-center text-sm">
                      {project.description}
                    </p>

                    {/* Features List */}
                    <div className="mb-6 space-y-2">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                          <span className="text-cyan-400">▸</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-950 text-sm rounded-full border-2 border-slate-700 text-slate-300 hover:border-cyan-400 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Price and CTA */}
                    <div className="border-t-2 border-slate-700 pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-xs text-slate-500 mb-1">PRICE</div>
                          <div className="text-2xl font-bold text-yellow-400 animate-pulse-neon">
                            {project.price}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-slate-500 mb-1">DELIVERY</div>
                          <div className="text-lg font-bold text-green-400">
                            2-3 weeks
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <button className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-lg border-2 border-white transition-all transform hover:scale-105 pixel-shadow text-sm">
                          <span>🎯</span>
                          <span>BUY NOW</span>
                        </button>
                        <button className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 text-white font-bold rounded-lg border-2 border-white transition-all transform hover:scale-105 pixel-shadow text-sm">
                          <span>👁️</span>
                          <span>PREVIEW</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Pixel Corners */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-white"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-white"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-white"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-white"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Special Offers Banner */}
          <div className="mt-16 bg-gradient-to-r from-purple-900 to-pink-900 border-4 border-yellow-400 rounded-lg p-8 text-center pixel-shadow relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 animate-pulse-neon" style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(255, 255, 255, 0.1) 10px,
                rgba(255, 255, 255, 0.1) 20px
              )`
            }}></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-yellow-400 mb-4 animate-glitch">
                🎁 CUSTOM PROJECT AVAILABLE! 🎁
              </h3>
              <p className="text-white text-lg mb-6">
                Need something unique? Let's build your dream project together!
              </p>
              <button className="px-12 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-red-500 text-white font-bold text-xl rounded-lg border-4 border-white transform hover:scale-110 transition-all duration-300 pixel-shadow animate-pulse-neon">
                💬 REQUEST CUSTOM QUOTE 💬
              </button>
            </div>
          </div>

          {/* Payment Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800 border-2 border-cyan-400 rounded-lg p-6 text-center pixel-shadow">
              <div className="text-4xl mb-3 animate-bounce-pixel">💳</div>
              <h4 className="text-cyan-400 font-bold mb-2">SECURE PAYMENT</h4>
              <p className="text-slate-400 text-sm">All transactions protected</p>
            </div>
            <div className="bg-slate-800 border-2 border-pink-400 rounded-lg p-6 text-center pixel-shadow">
              <div className="text-4xl mb-3 animate-bounce-pixel">⚡</div>
              <h4 className="text-pink-400 font-bold mb-2">FAST DELIVERY</h4>
              <p className="text-slate-400 text-sm">Quick turnaround time</p>
            </div>
            <div className="bg-slate-800 border-2 border-yellow-400 rounded-lg p-6 text-center pixel-shadow">
              <div className="text-4xl mb-3 animate-bounce-pixel">🛡️</div>
              <h4 className="text-yellow-400 font-bold mb-2">QUALITY GUARANTEE</h4>
              <p className="text-slate-400 text-sm">100% satisfaction guaranteed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Coins */}
      <div className="absolute top-20 right-10 text-4xl animate-float">💰</div>
      <div className="absolute bottom-20 left-10 text-4xl animate-bounce-pixel">💎</div>
    </section>
  )
}
