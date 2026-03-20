export default function Profile() {
  return (
    <section id="profile" className="py-20 relative overflow-hidden">
      {/* Retro Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(#00f6ff 1px, transparent 1px),
            linear-gradient(90deg, #00f6ff 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-bounce-pixel">
            <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent neon-glow">
              👾 PLAYER PROFILE 👾
            </span>
          </h2>
          <p className="text-center text-cyan-400 mb-12 text-lg animate-pulse-neon">
            ▸ LOADING CHARACTER DATA...
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Profile Image Card */}
            <div className="relative group animate-slide-in-left">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-yellow-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-neon"></div>
              <div className="relative bg-slate-900 rounded-lg p-8 border-4 border-cyan-400 pixel-shadow">
                {/* Profile Image Container */}
                <div className="aspect-square bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border-4 border-pink-500 overflow-hidden relative">
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900 to-cyan-900">
                    <img
                      src="/perfil.svg"
                      alt="Profile"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback if image doesn't exist yet
                        (e.target as HTMLImageElement).style.display = 'none';
                        const parent = (e.target as HTMLElement).parentElement;
                        if (parent && !parent.querySelector('.fallback-text')) {
                          const fallback = document.createElement('div');
                          fallback.className = 'fallback-text absolute inset-0 flex flex-col items-center justify-center text-cyan-400';
                          fallback.innerHTML = `
                            <svg class="w-24 h-24 mb-4 animate-bounce-pixel" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                            </svg>
                            <p class="text-xs text-center px-4">Upload perfil.svg to<br/><span class="text-yellow-400">/public/perfil.svg</span></p>
                          `;
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Pixel Art Corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-yellow-400"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-yellow-400"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-yellow-400"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-yellow-400"></div>
              </div>
            </div>

            {/* Stats Panel */}
            <div className="space-y-4 animate-slide-in-right">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border-4 border-cyan-400 rounded-lg p-6 pixel-shadow transform hover:scale-105 transition-transform">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-cyan-400 font-bold flex items-center gap-2">
                    ⚡ LEVEL
                  </span>
                  <span className="text-yellow-400 text-2xl font-bold animate-pulse-neon">99</span>
                </div>
                <div className="w-full bg-slate-950 rounded-full h-4 border-2 border-cyan-600 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-400 to-pink-500 animate-pulse-neon" style={{width: '99%'}}></div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border-4 border-pink-500 rounded-lg p-6 pixel-shadow transform hover:scale-105 transition-transform">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-pink-400 font-bold flex items-center gap-2">
                    💪 EXPERIENCE
                  </span>
                  <span className="text-yellow-400 text-xl font-bold">Senior Dev</span>
                </div>
                <div className="text-slate-300 text-sm">
                  <p className="flex justify-between">
                    <span>Projects:</span>
                    <span className="text-cyan-400">50+</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Skills:</span>
                    <span className="text-pink-400">15+</span>
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border-4 border-yellow-400 rounded-lg p-6 pixel-shadow transform hover:scale-105 transition-transform">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-yellow-400 font-bold flex items-center gap-2">
                    🎯 STATUS
                  </span>
                  <span className="text-green-400 text-sm font-bold animate-blink">● ONLINE</span>
                </div>
                <div className="text-slate-300 text-sm">
                  <p className="flex items-center gap-2">
                    <span className="text-cyan-400">▸</span>
                    Ready for new quests!
                  </p>
                </div>
              </div>

              {/* Retro Button */}
              <button className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-4 px-8 rounded-lg border-4 border-white transform hover:scale-105 transition-all duration-300 pixel-shadow animate-pulse-neon">
                🎮 START COLLABORATION 🎮
              </button>
            </div>
          </div>

          {/* Upload Info */}
          <div className="mt-12 bg-slate-800/50 border-2 border-dashed border-cyan-400 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="text-3xl animate-bounce-pixel">💾</div>
              <div>
                <h3 className="text-cyan-400 font-bold mb-2 flex items-center gap-2">
                  📁 IMAGE UPLOAD PATH
                </h3>
                <p className="text-slate-300 text-sm mb-2">
                  To display your profile picture, place your image at:
                </p>
                <code className="block bg-slate-900 text-yellow-400 px-4 py-2 rounded border-2 border-slate-700 text-xs">
                  /public/perfil.svg
                </code>
                <p className="text-slate-400 text-xs mt-2">
                  ⚠️ Supported formats: SVG, PNG, JPG, GIF (retro pixel art recommended!)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Pixel Elements */}
      <div className="absolute top-20 left-10 text-4xl animate-float">⭐</div>
      <div className="absolute top-40 right-20 text-4xl animate-bounce-pixel">💎</div>
      <div className="absolute bottom-20 left-20 text-4xl animate-float">🎮</div>
      <div className="absolute bottom-40 right-10 text-4xl animate-bounce-pixel">🏆</div>
    </section>
  )
}
