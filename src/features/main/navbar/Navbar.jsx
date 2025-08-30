import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", path: "/", color: "hover:text-orange-400" },
    { label: "About", path: "/about", color: "hover:text-emerald-400" },
    { label: "Contact", path: "/contact", color: "hover:text-blue-400" }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-black/20 border-b border-slate-700/50' 
          : 'bg-black/30 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <div
            className="group cursor-pointer flex items-center space-x-3"
            onClick={() => navigate("/")}
          >
            {/* Safari Icon */}
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <span className="text-xl font-bold text-white">🦁</span>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
            </div>
            
            <h1 className="text-2xl font-black bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent tracking-wide group-hover:scale-105 transition-transform duration-300">
              SafariZone
            </h1>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className={`relative px-4 py-2 text-slate-200 font-medium transition-all duration-300 ${link.color} hover:scale-105 group`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{link.label}</span>
                {/* Hover underline effect */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-amber-500 group-hover:w-full transition-all duration-300"></div>
                {/* Hover background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-amber-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </button>
            ))}
          </div>

          {/* Single Primary CTA + Sign In Link */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Sign In Link */}
            {/* <button
              onClick={() => navigate("/auth")}
              className="text-slate-300 hover:text-orange-400 font-medium transition-all duration-300 hover:scale-105 relative group"
            >
              <span className="relative z-10">Sign In</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-amber-500 group-hover:w-full transition-all duration-300"></div>
            </button> */}
            
            {/* Primary CTA Button */}
            <button
              onClick={() => navigate("/get-started")}
              className="group relative px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-emerald-500/25 hover:scale-105 transform transition-all duration-300 hover:from-emerald-500 hover:to-teal-600 overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>🌿</span>
                <span>Get Started</span>
              </span>
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-slate-200 hover:text-orange-400 transition-colors duration-300"
          >
            <div className="space-y-1.5">
              <div className={`w-6 h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-6 space-y-4 border-t border-slate-700/50 mt-4">
            {/* Mobile Navigation Links */}
            {navLinks.map((link, index) => (
              <button
                key={link.path}
                onClick={() => {
                  navigate(link.path);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 text-slate-200 font-medium rounded-lg transition-all duration-300 ${link.color} hover:bg-slate-800/50`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.label}
              </button>
            ))}
            
            {/* Mobile Auth Section */}
            <div className="space-y-3 pt-4 border-t border-slate-700/50">
              {/* Mobile Primary CTA */}
              <button
                onClick={() => {
                  navigate("/get-started");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-semibold rounded-xl shadow-lg hover:from-emerald-500 hover:to-teal-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>🌿</span>
                <span>Get Started</span>
              </button>
              
              {/* Mobile Sign In */}
              {/* <button
                onClick={() => {
                  navigate("/auth");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full px-6 py-3 text-slate-300 font-medium rounded-xl border border-slate-600 hover:border-orange-400 hover:text-orange-400 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>🔐</span>
                <span>Sign In</span>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
