export default function Profile() {
  return (
    <section id="profile" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Servicios
            </span>
          </h2>
          <p className="text-center text-slate-400 mb-12 text-lg">
            Desarrollo de soluciones tecnológicas a medida
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="text-4xl mb-4 text-center">💻</div>
              <h3 className="text-xl font-bold text-blue-400 mb-3 text-center">
                Sistemas Full Stack
              </h3>
              <p className="text-slate-400 text-sm text-center mb-4">
                Desarrollo de aplicaciones web completas y CRMs personalizados
              </p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Backend con .NET o Node.js</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Frontend con Angular o React</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Bases de datos y APIs RESTful</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="text-4xl mb-4 text-center">🎨</div>
              <h3 className="text-xl font-bold text-purple-400 mb-3 text-center">
                Landing Pages
              </h3>
              <p className="text-slate-400 text-sm text-center mb-4">
                Páginas de aterrizaje modernas y optimizadas para conversión
              </p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Diseño responsive y moderno</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Optimización SEO</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Integración con formularios</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
              <div className="text-4xl mb-4 text-center">🔧</div>
              <h3 className="text-xl font-bold text-green-400 mb-3 text-center">
                Optimización
              </h3>
              <p className="text-slate-400 text-sm text-center mb-4">
                Mejora de rendimiento y flujos de trabajo
              </p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Implementación de caché (Redis)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Optimización de bases de datos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Automatización de procesos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
