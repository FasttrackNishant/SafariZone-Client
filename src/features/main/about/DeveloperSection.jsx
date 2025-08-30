// components/DeveloperSection.jsx
export default function DeveloperSection({ visibleSections }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div 
        id="developer"
        data-animate
        className={`transform transition-all duration-1500 ${
          visibleSections.developer ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black mb-6 relative">
            <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              Behind SafariZone
            </span>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl"></div>
          </h2>
        </div>
        
        <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-10 lg:p-12 shadow-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-amber-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <span className="text-4xl">🐅</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-200 mb-4">Project Vision</h3>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                SafariZone represents a <span className="text-orange-400 font-semibold">full-stack demonstration</span> of modern web development, 
                cloud architecture, and enterprise-grade patterns - all wrapped in a beautiful tiger conservation story.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-slate-700/30 rounded-2xl p-6 border border-slate-600/30">
                <h4 className="text-xl font-bold text-emerald-300 mb-3">🛠️ Tech Excellence</h4>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>• React + Vite + TailwindCSS</li>
                  <li>• JWT + Azure AD Integration</li>
                  <li>• Microservices Architecture</li>
                  <li>• Cloud-Ready Deployment</li>
                </ul>
              </div>
              <div className="bg-slate-700/30 rounded-2xl p-6 border border-slate-600/30">
                <h4 className="text-xl font-bold text-orange-300 mb-3">🎯 Core Features</h4>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>• Modern Tiger-Themed UI/UX</li>
                  <li>• Responsive Wildlife Design</li>
                  <li>• Dual Authentication System</li>
                  <li>• Conservation-Focused Booking</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-slate-600/30 pt-8">
              <p className="text-xl font-bold text-slate-200 mb-2">
                Crafted with 🧡 and respect for tigers by{" "}
                <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent font-black">
                  DevNishant
                </span>
              </p>
              <p className="text-slate-400 text-sm">
                Demonstrating enterprise-level development skills through wildlife conservation storytelling
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
