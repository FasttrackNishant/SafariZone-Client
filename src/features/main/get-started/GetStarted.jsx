import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export default function GetStartedPage() {
  const navigate = useNavigate();
  const [authMode, setAuthMode] = useState('signup');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white relative">
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-4 left-4 z-50 bg-slate-800/80 backdrop-blur-md hover:bg-slate-700/90 text-orange-400 hover:text-orange-300 font-semibold px-4 py-2 rounded-xl shadow-lg transition-all duration-300 flex items-center space-x-2 border border-slate-600/30 hover:border-orange-400/30"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span>Back</span>
      </button>

      {/* Constrained Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Constrained Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main Content - Fit to Screen */}
      <div className="h-full flex items-center justify-center p-4 pt-16 pb-4">
        <div className={`max-w-5xl w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Compressed Header */}
          <div className="text-center mb-6 relative">
            <div className="flex items-center justify-center space-x-3 mb-4 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
                  <span className="text-2xl">🦁</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10"></div>
              </div>
              <h1 className="text-3xl font-black bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                SafariZone
              </h1>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-3 text-slate-100 relative">
              Start Your Safari Adventure
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent rounded-full"></div>
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Join thousands of nature enthusiasts exploring Maharashtra's magnificent wildlife reserves
            </p>
          </div>

          {/* Compact Two-Column Layout */}
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            {/* Features Column */}
            <div className="space-y-4">
              <div className="text-center lg:text-left">
                <div className="text-4xl mb-3 hover:scale-110 transition-transform duration-300 cursor-pointer">🌿</div>
                <h3 className="text-xl lg:text-2xl font-bold mb-3 text-slate-100 relative">
                  Book Your Safari Experience
                  <div className="absolute bottom-0 left-0 lg:left-0 w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-transparent"></div>
                </h3>
                <p className="text-slate-300 text-base leading-relaxed mb-4">
                  Create your account to access exclusive safari packages, real-time availability, and seamless booking
                </p>
              </div>

              {/* Compact Features Grid */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "🐅", title: "Tiger Safaris", desc: "Premium experiences", color: "from-orange-500/20 to-red-500/20" },
                  { icon: "📱", title: "Easy Booking", desc: "Quick reservations", color: "from-blue-500/20 to-cyan-500/20" },
                  { icon: "💳", title: "Secure Payments", desc: "Safe transactions", color: "from-green-500/20 to-emerald-500/20" },
                  { icon: "📋", title: "Track Bookings", desc: "Real-time updates", color: "from-purple-500/20 to-pink-500/20" }
                ].map((feature, index) => (
                  <div 
                    key={index} 
                    className={`group flex items-center space-x-2 p-3 bg-gradient-to-br ${feature.color} backdrop-blur-sm border border-slate-600/30 rounded-xl hover:scale-105 hover:border-slate-500/50 transition-all duration-300`}
                  >
                    <div className="text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-200 text-xs group-hover:text-white transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-slate-400 text-xs group-hover:text-slate-300 transition-colors">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Auth Form Column */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-3xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-600/40 rounded-3xl p-6 shadow-2xl">
                
                {/* Auth Mode Toggle */}
                <div className="relative bg-slate-800/50 rounded-2xl p-1 mb-6 border border-slate-600/30">
                  <div 
                    className={`absolute top-1 bottom-1 rounded-xl bg-gradient-to-r transition-all duration-500 ${
                      authMode === 'signup' 
                        ? 'left-1 right-1/2 from-emerald-600 to-teal-700' 
                        : 'left-1/2 right-1 from-emerald-600 to-teal-700'
                    }`}
                  ></div>
                  <div className="relative flex">
                    <button
                      onClick={() => setAuthMode('signup')}
                      className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 text-sm relative z-10 ${
                        authMode === 'signup' ? 'text-white' : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      Create Account
                    </button>
                    <button
                      onClick={() => setAuthMode('signin')}
                      className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 text-sm relative z-10 ${
                        authMode === 'signin' ? 'text-white' : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      Sign In
                    </button>
                  </div>
                </div>

                {/* Compact Benefits */}
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-slate-200 text-center mb-3">
                    {authMode === 'signup' ? '🎯 Get Started With:' : '🔓 Access Your:'}
                  </h4>
                  <div className="space-y-2">
                    {[
                      authMode === 'signup' ? 'Free account creation' : 'Safari bookings',
                      authMode === 'signup' ? 'Instant access to all parks' : 'Payment history',
                      authMode === 'signup' ? 'Best price guarantees' : 'Booking preferences'
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center text-slate-300 text-sm group hover:text-white transition-colors duration-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"></div>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => navigate(`/auth/tourist?mode=${authMode}`)}
                  className="group relative w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-bold text-base rounded-2xl shadow-2xl hover:shadow-emerald-500/25 hover:scale-105 transform transition-all duration-300 flex items-center justify-center space-x-3 mb-6 overflow-hidden"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">🌿</span>
                  <span className="relative z-10">{authMode === 'signup' ? 'Create My Account' : 'Sign In to Continue'}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </button>

                {/* Enhanced Staff Login */}
                <div className="text-center pt-4 border-t border-slate-600/40 relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
                  <p className="text-slate-400 mb-3 text-sm font-medium">SafariZone Employee?</p>
                  <button
                    onClick={() => navigate('/auth/staff')}
                    className="group w-full text-slate-300 hover:text-blue-400 font-semibold transition-all duration-300 flex items-center justify-center space-x-3 text-base bg-slate-700/40 hover:bg-slate-600/50 px-6 py-3 rounded-2xl border border-slate-600/40 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10 hover:scale-105"
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform duration-300">👥</span>
                    <span>Staff Login Portal</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
