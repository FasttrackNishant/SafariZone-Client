// components/StatsSection.jsx
export default function StatsSection({ visibleSections }) {
  const stats = [
    { 
      number: "50K+", 
      label: "Wildlife Enthusiasts", 
      icon: "🐅", 
      color: "from-orange-500 to-amber-600",
      description: "Connected with tigers"
    },
    { 
      number: "500+", 
      label: "Tiger Encounters", 
      icon: "👁️", 
      color: "from-emerald-500 to-teal-600",
      description: "Respectful sightings"
    },
    { 
      number: "3", 
      label: "Sacred Reserves", 
      icon: "🌲", 
      color: "from-blue-500 to-indigo-600",
      description: "Tiger sanctuaries"
    }
  ];

  return (
   <section className="bg-gradient-to-b from-slate-900/50 to-slate-800/50 py-24 border-y border-slate-700/30">
        <div className="max-w-7xl mx-auto px-6">
          <div 
            id="stats"
            data-animate
            className={`transform transition-all duration-1500 ${
              visibleSections.stats ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                Wildlife Impact
              </h2>
              <p className="text-slate-400 text-xl">Creating meaningful connections with nature</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 text-center hover:scale-105 hover:shadow-2xl transition-all duration-700 hover:border-emerald-500/50 overflow-hidden"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                  
                  <div className="relative z-10">
                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <h3 className={`text-4xl font-black ${stat.color} mb-2 group-hover:text-white transition-colors`}>
                      {stat.number}
                    </h3>
                    <p className="text-slate-400 font-medium group-hover:text-slate-300 transition-colors">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

  );
}
