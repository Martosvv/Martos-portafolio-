export default function SoftSkills() {
  const softSkills = [
    {
      name: 'Team Leadership',
      icon: '👥',
      level: 95,
      color: 'from-cyan-400 to-blue-500',
      borderColor: 'border-cyan-400',
      description: 'Guild Master'
    },
    {
      name: 'Communication',
      icon: '💬',
      level: 92,
      color: 'from-pink-400 to-purple-500',
      borderColor: 'border-pink-400',
      description: 'Charisma +99'
    },
    {
      name: 'Problem Solving',
      icon: '🧩',
      level: 98,
      color: 'from-yellow-400 to-orange-500',
      borderColor: 'border-yellow-400',
      description: 'Quest Solver'
    },
    {
      name: 'Creativity',
      icon: '🎨',
      level: 90,
      color: 'from-green-400 to-teal-500',
      borderColor: 'border-green-400',
      description: 'Art Wizard'
    },
    {
      name: 'Time Management',
      icon: '⏰',
      level: 88,
      color: 'from-purple-400 to-pink-500',
      borderColor: 'border-purple-400',
      description: 'Speed Runner'
    },
    {
      name: 'Adaptability',
      icon: '🔄',
      level: 94,
      color: 'from-orange-400 to-red-500',
      borderColor: 'border-orange-400',
      description: 'Shapeshifter'
    },
    {
      name: 'Critical Thinking',
      icon: '🧠',
      level: 96,
      color: 'from-blue-400 to-cyan-500',
      borderColor: 'border-blue-400',
      description: 'Logic Master'
    },
    {
      name: 'Collaboration',
      icon: '🤝',
      level: 93,
      color: 'from-red-400 to-pink-500',
      borderColor: 'border-red-400',
      description: 'Team Player'
    }
  ]

  return (
    <section id="soft-skills" className="py-20 relative overflow-hidden bg-slate-950">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 animate-pulse-neon" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, #00f6ff 1px, transparent 1px),
            radial-gradient(circle at 80% 50%, #ff00ff 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-glitch">
              <span className="bg-gradient-to-r from-pink-400 via-cyan-400 to-yellow-400 bg-clip-text text-transparent">
                💫 SOFT SKILLS 💫
              </span>
            </h2>
            <p className="text-cyan-400 text-lg animate-fade-in">
              ▸ CHARACTER ATTRIBUTES & SPECIAL ABILITIES
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-slate-800 border-4 border-pink-500 rounded-lg pixel-shadow">
              <span className="text-yellow-400 text-2xl animate-bounce-pixel">★</span>
              <span className="text-white font-bold">POWER LEVEL: 9000+</span>
              <span className="text-yellow-400 text-2xl animate-bounce-pixel">★</span>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="group relative animate-pixel-pop"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${skill.color} rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000`}></div>

                {/* Card */}
                <div className={`relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border-4 ${skill.borderColor} p-6 transform hover:scale-105 transition-all duration-300 pixel-shadow hover:shadow-lg`}>
                  {/* Icon */}
                  <div className="text-6xl mb-4 text-center animate-bounce-pixel group-hover:animate-float">
                    {skill.icon}
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-white font-bold text-center mb-2 text-sm">
                    {skill.name}
                  </h3>

                  {/* Level Badge */}
                  <div className="text-center mb-3">
                    <span className={`inline-block px-3 py-1 bg-gradient-to-r ${skill.color} text-white text-xs font-bold rounded-full border-2 border-white`}>
                      {skill.description}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">LV</span>
                      <span className="text-yellow-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-950 rounded-full h-3 border-2 border-slate-700 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out animate-pulse-neon`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Pixel Corners */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Summary */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border-4 border-cyan-400 rounded-lg p-6 text-center pixel-shadow transform hover:scale-105 transition-all">
              <div className="text-4xl mb-2 animate-bounce-pixel">🏆</div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
              <div className="text-slate-400 text-sm">Achievements Unlocked</div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border-4 border-pink-400 rounded-lg p-6 text-center pixel-shadow transform hover:scale-105 transition-all">
              <div className="text-4xl mb-2 animate-bounce-pixel">⚡</div>
              <div className="text-3xl font-bold text-pink-400 mb-2">92%</div>
              <div className="text-slate-400 text-sm">Average Skill Level</div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border-4 border-yellow-400 rounded-lg p-6 text-center pixel-shadow transform hover:scale-105 transition-all">
              <div className="text-4xl mb-2 animate-bounce-pixel">🎯</div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-slate-400 text-sm">Team Player Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-5 text-3xl animate-float opacity-50">✨</div>
      <div className="absolute top-1/4 right-10 text-3xl animate-bounce-pixel opacity-50">💫</div>
      <div className="absolute bottom-1/4 left-10 text-3xl animate-float opacity-50">⚡</div>
      <div className="absolute bottom-10 right-5 text-3xl animate-bounce-pixel opacity-50">🌟</div>
    </section>
  )
}
