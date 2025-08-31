import { useState, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router";

export default function AuthPage() {
  const navigate = useNavigate();
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
						Welcome Back
					</h2>
					<p className="text-slate-300">
						Sign in to your account to continue
					</p>
				</div>

				<div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
					<div>
						{/* Auth Mode Toggle for Tourists */}
						<div className="flex bg-slate-700/50 rounded-xl p-1 mb-6">
							<button
								onClick={() => setAuthMode('signin')}
								className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
									authMode === 'signin'
										? 'bg-emerald-600 text-white'
										: 'text-slate-300 hover:text-white'
								}`}>
								Sign In
							</button>
							<button
								onClick={() => setAuthMode('signup')}
								className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
									authMode === 'signup'
										? 'bg-emerald-600 text-white'
										: 'text-slate-300 hover:text-white'
								}`}>
								Sign Up
							</button>
						</div>

						<form
							onSubmit={handleTouristAuth}
							className="space-y-4">
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
								className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2">
								{isLoading ? (
									<div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
								) : (
									<>
										<span>🌿</span>
										<span>
											{authMode === 'signin'
												? 'Sign In'
												: 'Create Account'}
										</span>
									</>
								)}
							</button>
						</form>
					</div>
				</div>

				{/* Navigation Links */}
				<div className="text-center mt-6 space-y-2">
						<p className="text-slate-400">
							SafariZone Employee?{' '}
							<button
								onClick={() => navigate('/auth/staff')}
								className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
								Staff Login
							</button>
						</p>

					<button
						onClick={() => navigate('/')}
						className="text-slate-400 hover:text-orange-400 font-medium transition-colors duration-300 block mx-auto">
						← Back to Home
					</button>
				</div>
			</div>
		</div>
  );
}
