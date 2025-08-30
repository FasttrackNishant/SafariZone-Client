import SafariCard from './SafariCard.jsx';

export default function SafariZonesSection({ 
  zones, 
  selectedZone, 
  setSelectedZone, 
  currentZone, 
  isVisible, 
  onBookSafari 
}) {
  return (
    <section className="bg-gradient-to-b from-slate-900/50 to-slate-800/50 py-24 border-y border-slate-700/30">
      <div className="max-w-7xl mx-auto px-6">
        <div
          id="safaris"
          data-animate
          className={`transform transition-all duration-1500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
              Available Safaris
            </h2>
            <p className="text-slate-400 text-xl">Choose your zone and book your wildlife adventure</p>
          </div>

          {/* Zone Selection */}
          <div className="flex justify-center mb-12">
            <div className="bg-slate-800/50 rounded-2xl p-1 border border-slate-700/30">
              {zones.map((zone) => (
                <button
                  key={zone.zoneId}
                  onClick={() => setSelectedZone(zone.zoneId)}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedZone === zone.zoneId
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-lg'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  {zone.name}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Zone Info */}
          {currentZone && (
            <div className="mb-12">
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 text-center">
                <h3 className="text-3xl font-bold text-orange-400 mb-4">{currentZone.name}</h3>
                <p className="text-slate-300 text-lg max-w-3xl mx-auto">{currentZone.description}</p>
              </div>
            </div>
          )}

          {/* Safari Sessions */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {currentZone?.safaris.map((safari, index) => (
              <SafariCard
                key={safari.sessionId}
                safari={safari}
                index={index}
                selectedZone={selectedZone}
                onBookSafari={onBookSafari}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
