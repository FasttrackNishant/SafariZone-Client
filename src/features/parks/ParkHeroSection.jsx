export default function ParkHeroSection({ park, currentImageIndex, setCurrentImageIndex }) {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {park.images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-2000 ease-in-out ${
              index === currentImageIndex
                ? 'opacity-100 scale-105'
                : 'opacity-0 scale-100'
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-slate-900/70 to-emerald-900/50"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="animate-[fadeInUp_1s_ease-out]">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-none">
            <span className="relative">
              <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                {park.name}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 blur-lg opacity-20 -z-10"></div>
            </span>
          </h1>

          <div className="flex items-center justify-center space-x-2 mb-6">
            <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="text-xl text-emerald-400 font-semibold">{park.location}</span>
          </div>

          <p className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto text-slate-200 mb-8 font-light leading-relaxed">
            {park.description}
          </p>

          {/* Quick Park Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/30">
              <div className="text-2xl font-bold text-emerald-400">Est. {park.established}</div>
              <div className="text-slate-400 text-sm">Established</div>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/30">
              <div className="text-2xl font-bold text-orange-400">{park.area}</div>
              <div className="text-slate-400 text-sm">Total Area</div>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/30">
              <div className="text-2xl font-bold text-amber-400">{park.zones.length}</div>
              <div className="text-slate-400 text-sm">Safari Zones</div>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/30">
              <div className="text-2xl font-bold text-teal-400">{park.bestTime}</div>
              <div className="text-slate-400 text-sm">Best Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {park.images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? 'bg-orange-400 scale-125'
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
