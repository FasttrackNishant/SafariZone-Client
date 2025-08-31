import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams, useSearchParams } from 'react-router';
import { toastMessages } from '../../../../core/toastConstants';
import { employeeLogin } from '../../api/employeeApi';
import { useMsal } from '@azure/msal-react';
import { useAuth } from '../../context/AuthContext';

export default function StaffLogin() {
	const navigate = useNavigate();
	const { instance } = useMsal();
	const [currentRole,setCurrentRole] = useState('');
	const [isVisible, setIsVisible] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const { user, setToken, setUser, clearAuth } = useAuth();

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const handleStaffLogin = async () => {
		setIsLoading(true);

		try {
			clearAuth();
			const result = await employeeLogin(instance, setToken, setUser);
			console.log('Resu is', result);
			if (result.success) {
				setCurrentRole(result.role);
			} else {
				toast.error(toastMessages.empLoginError);
			}
		} catch (error) {
			toast.error(toastMessages.somethingWentWrong);
			console.error('Azure AD authentication failed:', error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		console.log("naother",currentRole)
		if (currentRole) {
			console.log('User authenticated:', user);

			setTimeout(() => {
				if (currentRole === 'Employee') {
					navigate('/employee/dashboard');
				} else if (currentRole === 'Admin') {
					navigate('/admin/dashboard');
				} else {
					toast.error(
						'No appropriate role found for dashboard access'
					);
				}
			}, 100);
		}
	}, [user, navigate,currentRole]);

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
						Staff Portal
					</h2>
					<p className="text-slate-300">
						Access your organizational dashboard
					</p>
				</div>

				<div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
					<div className="text-center">
						<div className="mb-6">
							<div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
								<svg
									className="w-10 h-10 text-white"
									fill="currentColor"
									viewBox="0 0 24 24">
									<path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z" />
								</svg>
							</div>
							<h3 className="text-2xl font-bold mb-2">
								Staff Login
							</h3>
							<p className="text-slate-300 mb-6">
								Use your organizational Microsoft account to
								access the staff dashboard
							</p>
						</div>

						<button
							onClick={handleStaffLogin}
							disabled={isLoading}
							className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3">
							{isLoading ? (
								<div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
							) : (
								<>
									<svg
										className="w-5 h-5"
										fill="currentColor"
										viewBox="0 0 24 24">
										<path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z" />
									</svg>
									<span>Continue with Microsoft</span>
								</>
							)}
						</button>

						<div className="mt-6 text-sm text-slate-400">
							<p>
								• Only authorized staff can access this portal
							</p>
							<p>• Contact IT support if you need access</p>
						</div>
					</div>

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
