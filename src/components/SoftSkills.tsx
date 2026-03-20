export default function SoftSkills() {
  const softSkills = [
    {
      name: 'Análisis y Resolución',
      icon: '🧩',
      description: 'Capacidad para analizar y resolver problemas complejos'
    },
    {
      name: 'Comunicación Efectiva',
      icon: '💬',
      description: 'Comunicación clara con equipos técnicos y clientes'
    },
    {
      name: 'Trabajo en Equipo',
      icon: '🤝',
      description: 'Colaboración efectiva en entornos multidisciplinarios'
    },
    {
      name: 'Aprendizaje Continuo',
      icon: '📚',
      description: 'Adaptación constante a nuevas tecnologías'
    }
  ]

  return (
    <section id="soft-skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Aptitudes Profesionales
              </span>
            </h2>
            <p className="text-slate-400 text-lg">
              Habilidades blandas y competencias profesionales
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <div className="text-4xl mb-4 text-center">
                  {skill.icon}
                </div>
                <h3 className="text-white font-bold text-center mb-3 text-lg">
                  {skill.name}
                </h3>
                <p className="text-slate-400 text-sm text-center">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              Idiomas
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="text-center">
                <p className="text-slate-300 text-lg font-semibold mb-1">Español</p>
                <p className="text-slate-400 text-sm">Nativo</p>
              </div>
              <div className="text-center">
                <p className="text-slate-300 text-lg font-semibold mb-1">Inglés</p>
                <p className="text-slate-400 text-sm">Competencia Profesional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
