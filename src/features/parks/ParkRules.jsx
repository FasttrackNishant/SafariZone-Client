export default function ParkRules({ rules, isVisible }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div
        id="rules"
        data-animate
        className={`transform transition-all duration-1500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
            Important Guidelines
          </h2>
          <p className="text-slate-400 text-xl">Please follow these rules for a safe and enjoyable safari</p>
        </div>

        <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-10">
          <div className="grid md:grid-cols-2 gap-6">
            {rules.map((rule, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-slate-700/30 rounded-xl border border-slate-600/30"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-white text-xs font-bold">!</span>
                </div>
                <p className="text-slate-300 leading-relaxed">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
