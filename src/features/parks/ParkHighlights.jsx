export default function ParkHighlights({ highlights, isVisible }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div
        id="highlights"
        data-animate
        className={`transform transition-all duration-1500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-6 relative">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-400 bg-clip-text text-transparent">
              Park Highlights
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 text-center hover:scale-105 hover:shadow-2xl transition-all duration-700 hover:border-emerald-500/50"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-lg font-bold text-emerald-300 mb-2">{highlight}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
