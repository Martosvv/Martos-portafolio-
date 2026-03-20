export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Sobre Mí
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                Soy un <span className="text-blue-400 font-semibold">Ingeniero Informático</span> apasionado
                por el desarrollo web y la creación de soluciones tecnológicas innovadoras.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Mi especialización es el <span className="text-purple-400 font-semibold">desarrollo web full stack</span>,
                con enfoque en crear aplicaciones web modernas, escalables y de alto rendimiento.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Me encanta trabajar con las últimas tecnologías y frameworks, siempre buscando
                la mejor solución para cada proyecto.
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
                  <h3 className="text-xl font-semibold">Desarrollo Web</h3>
                </div>
                <p className="text-slate-400">
                  Experiencia en React, TypeScript, Node.js y frameworks modernos
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Ingeniería</h3>
                </div>
                <p className="text-slate-400">
                  Sólida formación en ingeniería informática y resolución de problemas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
