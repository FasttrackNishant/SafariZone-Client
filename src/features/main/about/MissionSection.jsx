// components/MissionSection.jsx
export default function MissionSection({ visibleSections }) {
  return (
 <section className="max-w-7xl mx-auto px-6 py-24">
        <div 
          id="mission"
          data-animate
          className={`transform transition-all duration-1500 ${
            visibleSections.mission ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6 relative">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-400 bg-clip-text text-transparent">
                Our Mission
              </span>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl"></div>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto rounded-full mb-8"></div>
          </div>
          
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-10 lg:p-12 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-orange-400 mb-6">🌿 Wildlife Conservation</h3>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  SafariZone was created with a <span className="text-orange-400 font-semibold">vision to make Maharashtra's wildlife sanctuaries</span> and national parks accessible to everyone. 
                  From booking safaris online to providing seamless digital experiences, our mission is to blend <span className="text-emerald-400 font-semibold">adventure with conservation</span>.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  We ensure nature is preserved while creating <span className="text-amber-400 font-semibold">unforgettable memories</span> for generations to come.
                </p>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-2xl p-6 border border-emerald-500/30">
                  <h4 className="text-2xl font-bold text-slate-200 mb-4">🎯 Our Values</h4>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-emerald-500 rounded-full mr-3 flex-shrink-0"></span>
                      Sustainable wildlife tourism practices
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                      Supporting local conservation efforts
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-amber-500 rounded-full mr-3 flex-shrink-0"></span>
                      Educational wildlife encounters
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-teal-500 rounded-full mr-3 flex-shrink-0"></span>
                      Preserving biodiversity for future generations
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
