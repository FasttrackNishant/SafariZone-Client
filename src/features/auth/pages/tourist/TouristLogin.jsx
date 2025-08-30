import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router';
import Navbar from '../../../main/navbar/Navbar'
import Footer from '../../../main/footer/Footer';
import BackgroundOrbs from '../../../booking/BackgroundOrbs';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

export default function TouristAuthPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const mode = searchParams.get('mode') || 'login'; // 'signup' or 'login'
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Redirect if invalid mode
    if (!['signup', 'login'].includes(mode)) {
      navigate('/auth/tourist?mode=login');
    }
  }, [mode, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white">
      <Navbar />
      <BackgroundOrbs />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center min-h-[80vh]">
            <div className="w-full max-w-md">
              {/* Mode Toggle */}
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-2 mb-8">
                <div className="flex">
                  <button
                    onClick={() => navigate('/auth/tourist?mode=login')}
                    className={`flex-1 py-3 px-6 rounded-2xl font-semibold transition-all duration-300 ${
                      mode === 'login'
                        ? 'bg-emerald-600 text-white shadow-lg'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => navigate('/auth/tourist?mode=signup')}
                    className={`flex-1 py-3 px-6 rounded-2xl font-semibold transition-all duration-300 ${
                      mode === 'signup'
                        ? 'bg-emerald-600 text-white shadow-lg'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Sign Up
                  </button>
                </div>
              </div>

              {/* Auth Form */}
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
                <div className="text-center mb-8">
                  <div className="text-4xl mb-4">🧑‍🦺</div>
                  <h1 className="text-3xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                      {mode === 'signup' ? 'Create Your Account' : 'Welcome Back'}
                    </span>
                  </h1>
                  <p className="text-slate-300">
                    {mode === 'signup' 
                      ? 'Join thousands of wildlife enthusiasts for amazing safari experiences'
                      : 'Sign in to access your bookings and continue your wildlife journey'
                    }
                  </p>
                </div>

                {mode === 'signup' ? (
                  <SignupForm isLoading={isLoading} setIsLoading={setIsLoading}  />
                ) : (
                  <LoginForm isLoading={isLoading} setIsLoading={setIsLoading} />
                )}
              </div>

              {/* Additional Options */}
              <div className="mt-8 text-center">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="h-px bg-slate-600 flex-1"></div>
                  <span className="text-slate-400 text-sm">Or continue with</span>
                  <div className="h-px bg-slate-600 flex-1"></div>
                </div>
                
                <div className="flex space-x-4 justify-center">
                  <button className="p-3 bg-slate-700/50 border border-slate-600/50 rounded-xl hover:bg-slate-600/50 transition-all duration-300">
                    <svg className="w-5 h-5 text-slate-300" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </button>
                  <button className="p-3 bg-slate-700/50 border border-slate-600/50 rounded-xl hover:bg-slate-600/50 transition-all duration-300">
                    <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </button>
                  <button className="p-3 bg-slate-700/50 border border-slate-600/50 rounded-xl hover:bg-slate-600/50 transition-all duration-300">
                    <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router';
// import { useAuth } from "../../context/AuthContext";
// import { loginTourist } from "../../api/touristApi";

// export default function TouristLogin() {
// 	const navigate = useNavigate();
// 	const { setToken, setUser } = useAuth();

// 	const [email, setEmail] = useState('');
// 	const [password, setPassword] = useState('');
// 	const [loading, setLoading] = useState(false);
// 	const [error, setError] = useState('');

// 	const handleLogin = async (e) => {
// 		e.preventDefault();
// 		setLoading(true);
// 		setError('');

// 		try {
// 			const response = await loginTourist(email, password);
// 			if (response.success) {
//                 console.log(response)
//                 console.log(response.data.accessToken)
// 				localStorage.setItem('safari_token', response.data.accessToken);
// 				setToken(response.data.accessToken);
// 				setUser({ email, roles: ['Tourist'] }); // Role from backend or decoded token
// 				navigate('/tourist/dashboard');
// 			} else {
// 				setError(response.message || 'Invalid credentials');
// 			}
// 		} catch (err) {
// 			setError('Login failed. Try again.');
// 		} finally {
// 			setLoading(false);
// 		}
// 	};

// 	return (
// 		<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 px-4">
// 			<form
// 				onSubmit={handleLogin}
// 				className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
// 				<h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
// 					Tourist Login
// 				</h2>

// 				{error && <p className="text-red-500 mb-4">{error}</p>}

// 				<input
// 					type="email"
// 					placeholder="Email"
// 					className="w-full p-3 mb-4 border rounded"
// 					value={email}
// 					onChange={(e) => setEmail(e.target.value)}
// 					required
// 				/>

// 				<input
// 					type="password"
// 					placeholder="Password"
// 					className="w-full p-3 mb-4 border rounded"
// 					value={password}
// 					onChange={(e) => setPassword(e.target.value)}
// 					required
// 				/>

// 				<button
// 					type="submit"
// 					disabled={loading}
// 					className="w-full bg-green-600 text-white py-3 rounded font-semibold hover:bg-green-700 transition">
// 					{loading ? 'Logging in...' : 'Login'}
// 				</button>
// 			</form>
// 		</div>
// 	);
// }
