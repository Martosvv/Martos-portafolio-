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
        </div>
      </div>
    </section>
  )
}
