// sections/FeaturesSection.jsx
const features = [
  {
    icon: "🦁",
    title: "Wildlife Safaris",
    desc: "Encounter majestic tigers, leopards, and rare wildlife in their natural habitats.",
    gradient: "from-emerald-500 to-teal-600",
    delay: "0ms",
    stats: "500+ Species"
  },
  {
    icon: "📱",
    title: "Easy Booking",
    desc: "Secure and hassle-free online booking system for tourists worldwide.",
    gradient: "from-orange-500 to-amber-600", 
    delay: "200ms",
    stats: "1-Click Booking"
  },
  {
    icon: "👨‍🏫",
    title: "Expert Guides",
    desc: "Professional guides ensure your safari is safe, exciting, and unforgettable.",
    gradient: "from-blue-500 to-indigo-600",
    delay: "400ms",
    stats: "Certified Experts"
  }
];

export default function FeaturesSection({ isVisible }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 relative">
      <div 
        id="features"
        data-animate
        className={`transform transition-all duration-1500 ${
          isVisible.features ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-6 relative">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-400 bg-clip-text text-transparent">
              Why Choose SafariZone?
            </span>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl"></div>
          </h2>
          <p className="text-center text-slate-400 text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
            Embark on extraordinary adventures with our world-class safari experiences
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 text-center hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-700 hover:border-emerald-500/40 overflow-hidden"
              style={{ animationDelay: feature.delay }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-700 rounded-3xl`}></div>
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 rounded-full blur-2xl transition-opacity duration-700`}></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-emerald-300 group-hover:text-emerald-200 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-300 leading-relaxed text-base mb-6 group-hover:text-slate-200 transition-colors">
                  {feature.desc}
                </p>
                <div className="inline-flex items-center px-4 py-2 bg-slate-700/50 rounded-full text-emerald-400 text-sm font-semibold">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
                  {feature.stats}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
