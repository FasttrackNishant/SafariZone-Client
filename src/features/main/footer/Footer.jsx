// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-slate-900 to-black border-t border-slate-700/50 py-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-6 group">
            {/* Bouncing Lion Logo */}
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-2xl animate-bounce">
                <span className="text-2xl transform group-hover:scale-125 transition-transform duration-300">
                  🦁
                </span>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
              {/* Pulse ring */}
              <div className="absolute inset-0 rounded-2xl border-2 border-orange-400/50 animate-ping opacity-75"></div>
            </div>
            
            <h3 className="text-3xl font-black bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              SafariZone
            </h3>
          </div>
          
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Creating unforgettable wildlife experiences in the heart of Maharashtra's pristine forests
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-700/50 pt-8">
          <p className="text-slate-400">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-orange-400 font-bold">SafariZone</span>.
            All rights reserved.
          </p>

          <div className="flex space-x-8 mt-6 md:mt-0">
            {[
              { name: 'Facebook', icon: '📘', color: 'hover:text-blue-400' },
              { name: 'Instagram', icon: '📷', color: 'hover:text-pink-400' },
              { name: 'Twitter', icon: '🐦', color: 'hover:text-sky-400' }
            ].map((social) => (
              <a
                key={social.name}
                href="#"
                className={`group flex items-center space-x-2 text-slate-400 ${social.color} transform hover:scale-110 transition-all duration-300 font-medium px-3 py-2 rounded-xl hover:bg-slate-800/30`}
              >
                <span className="text-xl group-hover:scale-125 group-hover:animate-pulse transition-transform duration-300">
                  {social.icon}
                </span>
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for additional animations */}
      <style jsx="true">{`
        @keyframes bounce {
          0%, 100% { 
            transform: translateY(0); 
          }
          50% { 
            transform: translateY(-10px); 
          }
        }
        
        .animate-bounce {
          animation: bounce 2s infinite ease-in-out;
        }
        
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </footer>
  );
}
