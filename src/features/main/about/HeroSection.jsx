// components/HeroSection.jsx
export default function HeroSection({ visibleSections }) {
  return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-slate-900/70 to-emerald-900/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-pulse opacity-40"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                backgroundColor: i % 3 === 0 ? '#fb923c' : i % 3 === 1 ? '#10b981' : '#fbbf24',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="animate-[fadeInUp_1s_ease-out]">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-none">
              About{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                  SafariZone
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 blur-lg opacity-20 -z-10"></div>
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto text-slate-200 font-light leading-relaxed">
              Connecting people with <span className="text-emerald-400 font-bold">nature</span>, 
              adventure, and conservation in the heart of Maharashtra's pristine wilderness.
            </p>
          </div>
        </div>
      </section>
  );
}
