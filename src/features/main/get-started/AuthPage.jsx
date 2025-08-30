import { useState, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router";

export default function AuthPage() {
  const navigate = useNavigate();
  const { userType } = useParams(); // 'tourist' or 'staff'
  const [searchParams] = useSearchParams();
  const [authMode, setAuthMode] = useState('signin');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    phone: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const mode = searchParams.get('mode');
    if (mode === 'signup') {
      setAuthMode('signup');
    }
  }, [searchParams]);

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleTouristAuth = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // JWT-based authentication logic
      console.log(`Tourist ${authMode}:`, formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Navigate to tourist dashboard
      navigate('/dashboard/tourist');
    } catch (error) {
      console.error('Authentication failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStaffLogin = async () => {
    setIsLoading(true);
    
    try {
      // Azure AD authentication logic
      console.log('Redirecting to Azure AD...');
      
      // Simulate Azure AD redirect
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Navigate to staff dashboard
      navigate('/dashboard/staff');
    } catch (error) {
      console.error('Azure AD authentication failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8 animate-[fadeInUp_0.6s_ease-out]">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-2xl">🦁</span>
            </div>
            <h1 className="text-2xl font-black bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              SafariZone
            </h1>
          </div>
          
          <h2 className="text-3xl font-bold mb-2 text-slate-100">
            {userType === 'staff' ? 'Staff Portal' : 'Welcome Back'}
          </h2>
          <p className="text-slate-300">
            {userType === 'staff' 
              ? 'Access your organizational dashboard' 
              : 'Sign in to your account to continue'
            }
          </p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
          {userType === 'staff' ? (
            /* Staff Azure AD Login Only */
            <div className="text-center">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Staff Login</h3>
                <p className="text-slate-300 mb-6">
                  Use your organizational Microsoft account to access the staff dashboard
                </p>
              </div>

              <button
                onClick={handleStaffLogin}
                disabled={isLoading}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z"/>
                    </svg>
                    <span>Continue with Microsoft</span>
                  </>
                )}
              </button>

              <div className="mt-6 text-sm text-slate-400">
                <p>• Only authorized staff can access this portal</p>
                <p>• Contact IT support if you need access</p>
              </div>
            </div>
          ) : (
            /* Tourist Login/Signup */
            <div>
              {/* Auth Mode Toggle for Tourists */}
              <div className="flex bg-slate-700/50 rounded-xl p-1 mb-6">
                <button
                  onClick={() => setAuthMode('signin')}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                    authMode === 'signin'
                      ? 'bg-emerald-600 text-white'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => setAuthMode('signup')}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                    authMode === 'signup'
                      ? 'bg-emerald-600 text-white'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Sign Up
                </button>
              </div>

              <form onSubmit={handleTouristAuth} className="space-y-4">
                {authMode === 'signup' && (
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                {authMode === 'signup' && (
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                    placeholder="Enter your password"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>🌿</span>
                      <span>{authMode === 'signin' ? 'Sign In' : 'Create Account'}</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Navigation Links */}
        <div className="text-center mt-6 space-y-2">
          {userType === 'tourist' && (
            <p className="text-slate-400">
              SafariZone Employee?{' '}
              <button 
                onClick={() => navigate('/auth/staff')}
                className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                Staff Login
              </button>
            </p>
          )}
          
          <button
            onClick={() => navigate('/')}
            className="text-slate-400 hover:text-orange-400 font-medium transition-colors duration-300 block mx-auto"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
