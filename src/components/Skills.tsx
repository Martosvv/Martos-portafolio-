export default function Skills() {
  const skillCategories = [
    {
      title: 'Lenguajes',
      skills: [
        { name: 'C#', level: 90 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Python', level: 75 },
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Frameworks & Backend',
      skills: [
        { name: '.NET 8 / ASP.NET Core', level: 90 },
        { name: 'Angular', level: 85 },
        { name: 'Node.js / Express.js', level: 85 },
        { name: 'Entity Framework Core', level: 80 },
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Bases de Datos & Cache',
      skills: [
        { name: 'SQL Server', level: 85 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'Redis', level: 75 },
      ],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Herramientas & DevOps',
      skills: [
        { name: 'Git / GitHub', level: 90 },
        { name: 'Linux', level: 80 },
        { name: 'Google Cloud', level: 75 },
        { name: 'JWT / Swagger', level: 85 },
      ],
      gradient: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Habilidades Técnicas
            </span>
          </h2>
          <p className="text-center text-slate-400 mb-12 text-lg">
            Tecnologías y herramientas con las que trabajo profesionalmente
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
              >
                <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300 font-medium text-sm">{skill.name}</span>
                        <span className="text-slate-400 text-xs">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t border-slate-800">
            <p className="text-center text-slate-400 mb-8">
              Experiencia adicional con
            </p>
            <div className="flex flex-wrap justify-center gap-4 items-center">
              {['Git Copilot Pro', 'Jira', 'REST APIs', 'Cybersecurity', 'Machine Learning', 'Swagger'].map((tech) => (
                <div
                  key={tech}
                  className="px-4 py-2 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500 transition-all hover:scale-105"
                >
                  <span className="text-slate-300 text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-slate-800">
            <h3 className="text-3xl font-bold mb-4 text-center">
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Certificaciones
              </span>
            </h3>
            <p className="text-center text-slate-400 mb-8">
              Certificaciones profesionales obtenidas
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 max-w-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-400">GitHub Foundations</h4>
                    <p className="text-slate-400 text-sm">GitHub</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm">
                  Certificación que valida conocimientos fundamentales sobre Git, GitHub, y flujos de trabajo colaborativos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
