// sections/HeroSection.jsx
import { useNavigate } from "react-router";

const heroImages = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1695367255234-2cb7fbc6425b?q=80&w=2070&auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1592784201029-bdb351d47eff?q=80&w=2234&auto=format&fit=crop&w=1600&q=80",
];

export default function     HeroSection({ currentImage, setCurrentImage }) {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-2000 ease-in-out transform ${
              index === currentImage 
                ? 'opacity-100 scale-110' 
                : 'opacity-0 scale-105'
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-slate-900/70 to-emerald-900/50"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse opacity-40"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: i % 3 === 0 ? '#fb923c' : i % 3 === 1 ? '#10b981' : '#fbbf24',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="animate-[fadeInUp_1.2s_ease-out]">
          {/* Hero Title */}
          <div className="relative mb-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-4 tracking-tight leading-none">
              Discover{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent animate-pulse">
                  SafariZone
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 blur-xl opacity-30 -z-10"></div>
              </span>
            </h1>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 text-3xl opacity-60 animate-bounce delay-1000">🌿</div>
            <div className="absolute -top-4 -right-10 text-2xl opacity-60 animate-bounce delay-1500">🦅</div>
          </div>
          
          {/* Hero Description - Reduced size */}
          <p className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto text-slate-200 mb-8 font-light leading-relaxed">
            Experience the <span className="text-emerald-400 font-bold relative">
              untamed beauty
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full"></div>
            </span> of Maharashtra's jungles.
            <br className="hidden sm:block" />
            Tigers, leopards, and <span className="text-amber-400 font-semibold">epic adventures</span> await.
          </p>
          
          {/* CTA Buttons - Fixed sizing */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => navigate('/book-safari')}
              className="group relative px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-semibold text-base rounded-2xl shadow-xl hover:shadow-emerald-500/25 hover:scale-105 transform transition-all duration-300 hover:from-emerald-500 hover:to-teal-600 overflow-hidden border border-emerald-500/20 min-w-[180px]"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>🌿</span>
                <span>Book Safari</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/10 to-transparent transform translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            </button>
            
            <button 
              onClick={() => navigate('/packages')}
              className="group px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold text-base rounded-2xl shadow-xl hover:shadow-orange-500/25 hover:scale-105 transform transition-all duration-300 hover:from-orange-400 hover:to-amber-500 border border-orange-500/20 min-w-[180px]"
            >
              <span className="flex items-center space-x-2">
                <span>🗺️</span>
                <span>Explore Packages</span>
                <svg className="w-4 h-4 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Image Indicators */}
        <div className="flex justify-center space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`group relative transition-all duration-500 ${
                index === currentImage 
                  ? 'w-10 h-3' 
                  : 'w-3 h-3 hover:w-6'
              }`}
            >
              <div className={`w-full h-full rounded-full transition-all duration-500 ${
                index === currentImage 
                  ? 'bg-gradient-to-r from-orange-400 to-amber-500' 
                  : 'bg-white/30 hover:bg-white/50'
              }`} />
              {index === currentImage && (
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full blur-sm animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
