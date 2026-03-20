export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Next.js', level: 80 },
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'MongoDB', level: 80 },
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Herramientas',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'Vite', level: 85 },
      ],
      gradient: 'from-green-500 to-emerald-500',
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
            Tecnologías y herramientas con las que trabajo
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700 p-8 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
              >
                <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                        <span className="text-slate-400 text-sm">{skill.level}%</span>
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

          {/* Tech logos section */}
          <div className="mt-16 pt-12 border-t border-slate-800">
            <p className="text-center text-slate-400 mb-8">
              Experiencia trabajando con
            </p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
              {['React', 'TypeScript', 'Node.js', 'Tailwind', 'Vite', 'MongoDB', 'PostgreSQL', 'Git'].map((tech) => (
                <div
                  key={tech}
                  className="px-6 py-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500 transition-all hover:scale-110"
                >
                  <span className="text-slate-300 font-mono text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
