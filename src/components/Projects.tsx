export default function Projects() {
  const projects = [
    {
      title: 'CRM Corporativo - CABS Computación',
      company: 'CABS Computación',
      role: 'Desarrollador Full Stack',
      description: 'Liderazgo técnico en el diseño y arquitectura de un CRM interno a medida para la optimización de flujos corporativos.',
      technologies: ['.NET 8', 'Angular', 'SQL Server', 'Entity Framework Core', 'Redis', 'JWT', 'Swagger'],
      gradient: 'from-blue-500 to-cyan-500',
      borderColor: 'border-cyan-400',
      icon: '🏢',
      achievements: [
        'Desarrollo Full Stack con .NET 8 y Angular',
        'Implementación de caché con Redis',
        'APIs RESTful escalables con JWT',
        'Modelado complejo con Entity Framework Core'
      ]
    },
    {
      title: 'Plataforma de Gestión - SNTI',
      company: 'Sindicato Nacional de Trabajadores Indígenas',
      role: 'Desarrollador Web Integral',
      description: 'Desarrollo de una plataforma web para la gestión automatizada de usuarios y digitalización de procesos administrativos internos.',
      technologies: ['Node.js', 'Angular', 'PostgreSQL', 'Google Cloud', 'REST APIs'],
      gradient: 'from-purple-500 to-pink-500',
      borderColor: 'border-pink-400',
      icon: '🌐',
      achievements: [
        'Arquitectura Full Stack en Google Cloud',
        'Backend con Node.js y PostgreSQL',
        'Interfaces dinámicas con Angular',
        'Automatización de procesos administrativos'
      ]
    },
  ]

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-slate-950">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Experiencia Profesional
              </span>
            </h2>
            <p className="text-slate-400 text-lg">
              Proyectos reales desarrollados en empresas
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-500`}></div>

                <div className={`relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border ${project.borderColor} overflow-hidden transform hover:scale-[1.02] transition-all duration-300`}>
                  <div className="p-8">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="text-5xl flex-shrink-0">
                        {project.icon}
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold mb-2 text-white">
                          {project.title}
                        </h3>
                        <p className="text-slate-400 mb-2">
                          <span className="text-blue-400 font-semibold">{project.company}</span> • {project.role}
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="mb-6 grid md:grid-cols-2 gap-3">
                      {project.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                          <span className="text-green-400 mt-1">✓</span>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-950 text-xs rounded-full border border-slate-700 text-slate-300 hover:border-blue-400 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              Educación
            </h3>
            <p className="text-slate-300 text-lg mb-2">
              Ingeniería en Informática
            </p>
            <p className="text-slate-400 mb-6">
              Instituto Tecnológico de Durango (2020-2025)
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-4 py-2 bg-slate-950 rounded-lg border border-slate-700">
                <span className="text-green-400 text-sm">Cybersecurity Foundations (Cisco)</span>
              </div>
              <div className="px-4 py-2 bg-slate-950 rounded-lg border border-slate-700">
                <span className="text-purple-400 text-sm">Machine Learning con Python (ITD)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
