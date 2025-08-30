import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
//   Safari,
  ArrowRight,
  AlertCircle
} from 'lucide-react';

const Test = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Mock validation
      if (formData.email === 'tourist@example.com' && formData.password === 'password') {
        onLogin('tourist');
        navigate('/dashboard/tourist');
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const demoCredentials = {
    email: 'tourist@example.com',
    password: 'password'
  };

  const fillDemoCredentials = () => {
    setFormData(demoCredentials);
    setError('');
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-jungle-50 to-primary-50 dark:from-jungle-900 dark:to-primary-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
              {/* <Safari className="h-8 w-8 text-white" /> */}
            </div>
          </div>
          <h1 className="text-3xl font-bold text-jungle-900 dark:text-white mb-2">
            Welcome Back
          </h1>
          <p className="text-jungle-600 dark:text-jungle-300">
            Sign in to your SafariZone account
          </p>
        </div>

        {/* Login Form */}
        <div className="card p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-jungle-700 dark:text-jungle-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-jungle-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="input-field pl-10"
                  placeholder="Enter your email"
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-jungle-700 dark:text-jungle-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-jungle-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="input-field pl-10 pr-10"
                  placeholder="Enter your password"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-jungle-400 hover:text-jungle-600 dark:hover:text-jungle-300"
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center space-x-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <span className="text-sm text-red-700 dark:text-red-300">{error}</span>
              </div>
            )}

            {/* Demo Credentials */}
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <div className="text-sm text-blue-800 dark:text-blue-200 mb-2">
                <strong>Demo Credentials:</strong>
              </div>
              <div className="text-xs text-blue-700 dark:text-blue-300 space-y-1">
                <div>Email: {demoCredentials.email}</div>
                <div>Password: {demoCredentials.password}</div>
              </div>
              <button
                type="button"
                onClick={fillDemoCredentials}
                className="mt-3 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 underline"
                disabled={isLoading}
              >
                Fill Demo Credentials
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Signing In...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </button>
          </form>

          {/* Additional Links */}
          <div className="mt-6 text-center">
            <Link
              to="/forgot-password"
              className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
            >
              Forgot your password?
            </Link>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-jungle-700">
            <p className="text-center text-sm text-jungle-600 dark:text-jungle-400">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
              >
                Sign up here
              </Link>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-jungle-700">
            <p className="text-center text-sm text-jungle-600 dark:text-jungle-400 mb-3">
              Are you an employee?
            </p>
            <Link
              to="/login/employee"
              className="btn-outline w-full flex items-center justify-center"
            >
              Employee Login
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-xs text-jungle-500 dark:text-jungle-400">
            By signing in, you agree to our{' '}
            <Link to="/terms" className="underline hover:text-jungle-700 dark:hover:text-jungle-300">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="underline hover:text-jungle-700 dark:hover:text-jungle-300">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Test;
