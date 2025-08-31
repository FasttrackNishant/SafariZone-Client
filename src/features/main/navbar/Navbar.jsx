import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { useAuth } from "../../auth/context/AuthContext";
import toast from "react-hot-toast";

export default function Navbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    console.log("in navbar",user)
    const mockUser = {
      id: 1,
      name: "Nishant Kumar",
      email: "nishant@example.com",
      profilePicture: "https://randomuser.me/api/portraits/men/75.jpg",
      role: "tourist", // or "employee"
      membershipTier: "Premium"
    };
    
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isProfileDropdownOpen && !event.target.closest('.profile-dropdown')) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isProfileDropdownOpen]);

  const navLinks = [
    { label: "Home", path: "/", color: "hover:text-orange-400" },
    { label: "Parks", path: "/parks", color: "hover:text-emerald-400" },
    { label: "About", path: "/about", color: "hover:text-purple-400" },
    { label: "Contact", path: "/contact", color: "hover:text-pink-400" }
  ];

  const handleLogout = () => {
      logout();    
  };

  const getDashboardPath = () => {
    if (user?.role === 'employee') {
      return '/dashboard/employee';
    }
    return '/dashboard/tourist';
  };

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
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <span className="text-xl font-bold text-white">🦁</span>
              </div>
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
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-amber-500 group-hover:w-full transition-all duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-amber-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </button>
            ))}
          </div>

          {/* Authentication Section */}
          <div className="hidden md:flex items-center space-x-6">
            {user ? (
              /* Authenticated User UI */
              <div className="flex items-center space-x-4">
                {/* Dashboard Button */}
                {/* <button
                  onClick={() => navigate(getDashboardPath())}
                  className="group relative px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-emerald-500/25 hover:scale-105 transform transition-all duration-300 hover:from-emerald-500 hover:to-teal-600 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>📊</span>
                    <span>Dashboard</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </button> */}

                {/* Profile Dropdown */}
                <div className="relative profile-dropdown">
                  <button
                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                    className="flex items-center space-x-3 p-2 rounded-xl hover:bg-slate-800/50 transition-all duration-300 group"
                  >
                    <div className="relative">
                      <img
                        src={user.profilePicture}
                        alt={user.name}
                        className="w-10 h-10 rounded-full border-2 border-emerald-500 group-hover:border-emerald-400 transition-all duration-300"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-slate-900"></div>
                    </div>
                    <div className="hidden lg:block text-left">
                      <p className="text-slate-200 font-semibold text-sm">{user.name}</p>
                      <p className="text-emerald-400 text-xs">{user.membershipTier}</p>
                    </div>
                    <div className={`transform transition-transform duration-300 ${isProfileDropdownOpen ? 'rotate-180' : ''}`}>
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Dropdown Menu */}
                  {isProfileDropdownOpen && (
                    <div className="absolute right-0 top-full mt-2 w-64 bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl py-2 animate-in slide-in-from-top-5 duration-200">
                      {/* User Info Header */}
                      <div className="px-4 py-3 border-b border-slate-700/50">
                        <div className="flex items-center space-x-3">
                          <img
                            src={user.profilePicture}
                            alt={user.name}
                            className="w-12 h-12 rounded-full border-2 border-emerald-500"
                          />
                          <div>
                            <p className="text-slate-200 font-semibold">{user.name}</p>
                            <p className="text-slate-400 text-sm">{user.email}</p>
                            <p className="text-emerald-400 text-xs">{user.membershipTier} Member</p>
                          </div>
                        </div>
                      </div>

                      {/* Menu Items */}
                      <div className="py-2">
                        <button
                          onClick={() => {
                            navigate(getDashboardPath());
                            setIsProfileDropdownOpen(false);
                          }}
                          className="w-full flex items-center space-x-3 px-4 py-3 text-slate-200 hover:bg-slate-700/50 hover:text-emerald-400 transition-all duration-300"
                        >
                          <span className="text-lg">📊</span>
                          <span>Dashboard</span>
                        </button>
                        
                        <button
                          onClick={() => {
                            navigate('/dashboard/profile');
                            setIsProfileDropdownOpen(false);
                          }}
                          className="w-full flex items-center space-x-3 px-4 py-3 text-slate-200 hover:bg-slate-700/50 hover:text-blue-400 transition-all duration-300"
                        >
                          <span className="text-lg">👤</span>
                          <span>Profile Settings</span>
                        </button>
                        
                        <button
                          onClick={() => {
                            navigate('/dashboard/bookings');
                            setIsProfileDropdownOpen(false);
                          }}
                          className="w-full flex items-center space-x-3 px-4 py-3 text-slate-200 hover:bg-slate-700/50 hover:text-purple-400 transition-all duration-300"
                        >
                          <span className="text-lg">📋</span>
                          <span>My Bookings</span>
                        </button>
                        
                        <button
                          onClick={() => {
                            navigate('/dashboard/notifications');
                            setIsProfileDropdownOpen(false);
                          }}
                          className="w-full flex items-center space-x-3 px-4 py-3 text-slate-200 hover:bg-slate-700/50 hover:text-amber-400 transition-all duration-300"
                        >
                          <span className="text-lg">🔔</span>
                          <span>Notifications</span>
                          {/* Notification badge */}
                          <span className="ml-auto w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                      </div>

                      {/* Logout Section */}
                      <div className="border-t border-slate-700/50 pt-2">
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center space-x-3 px-4 py-3 text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all duration-300"
                        >
                          <span className="text-lg">🚪</span>
                          <span>Sign Out</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              /* Non-authenticated User UI */
              <div className="flex items-center space-x-4">
                {/* Sign In Link */}
                {/* <button
                  onClick={() => navigate("/auth/tourist?mode=login")}
                  className="text-slate-300 hover:text-orange-400 font-medium transition-all duration-300 hover:scale-105 relative group"
                >
                  <span className="relative z-10">Sign In</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-amber-500 group-hover:w-full transition-all duration-300"></div>
                </button> */}
                
                {/* Sign Up Button */}
                <button
                  onClick={() => navigate("/get-started")}
                  className="group relative px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-emerald-500/25 hover:scale-105 transform transition-all duration-300 hover:from-emerald-500 hover:to-teal-600 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>🌿</span>
                    <span>Get Started</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </button>
              </div>
            )}
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
              {user ? (
                /* Mobile Authenticated User */
                <>
                  <div className="flex items-center space-x-3 px-4 py-3 bg-slate-800/50 rounded-xl">
                    <img
                      src={user.profilePicture}
                      alt={user.name}
                      className="w-10 h-10 rounded-full border-2 border-emerald-500"
                    />
                    <div>
                      <p className="text-slate-200 font-semibold text-sm">{user.name}</p>
                      <p className="text-emerald-400 text-xs">{user.membershipTier}</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => {
                      navigate(getDashboardPath());
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-semibold rounded-xl shadow-lg hover:from-emerald-500 hover:to-teal-600 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>📊</span>
                    <span>Dashboard</span>
                  </button>
                  
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full px-6 py-3 text-red-400 font-medium rounded-xl border border-red-500/30 hover:border-red-400 hover:bg-red-500/10 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>🚪</span>
                    <span>Sign Out</span>
                  </button>
                </>
              ) : (
                /* Mobile Non-authenticated User */
                <>
                  <button
                    onClick={() => {
                      navigate("/auth/tourist?mode=signup");
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-semibold rounded-xl shadow-lg hover:from-emerald-500 hover:to-teal-600 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>🌿</span>
                    <span>Get Started</span>
                  </button>
                  
                  {/* <button
                    onClick={() => {
                      navigate("/auth/tourist?mode=login");
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full px-6 py-3 text-slate-300 font-medium rounded-xl border border-slate-600 hover:border-orange-400 hover:text-orange-400 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>🔐</span>
                    <span>Sign In</span>
                  </button> */}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}