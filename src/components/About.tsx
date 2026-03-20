export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Perfil Profesional
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                Ingeniero Informático y desarrollador web con sólida formación técnica y experiencia práctica
                en el desarrollo de <span className="text-blue-400 font-semibold">aplicaciones Full Stack</span>.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Me considero un desarrollador <span className="text-purple-400 font-semibold">"de campo"</span>,
                enfocado en analizar procesos reales para mejorar y optimizar flujos de trabajo mediante tecnología.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Cuento con experiencia en el consumo de APIs, gestión de bases de datos, control de versiones
                y aplicación de buenas prácticas de desarrollo.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Sistemas Full Stack</h3>
                </div>
                <p className="text-slate-400">
                  Desarrollo de aplicaciones web completas con .NET, Angular y Node.js
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Landing Pages</h3>
                </div>
                <p className="text-slate-400">
                  Diseño y desarrollo de páginas de aterrizaje modernas y optimizadas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
