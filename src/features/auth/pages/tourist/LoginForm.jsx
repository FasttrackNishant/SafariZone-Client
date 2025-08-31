import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../context/AuthContext';
import { Api } from '../../api/touristApi';
import {jwtDecode} from "jwt-decode";

export default function LoginForm({ isLoading, setIsLoading }) {
	const navigate = useNavigate();
	const { setToken, setUser } = useAuth();
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		rememberMe: false,
	});
	const [errors, setErrors] = useState({});
	const [showPassword, setShowPassword] = useState(false);

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}));

		// Clear error when user starts typing
		if (errors[name]) {
			setErrors((prev) => ({ ...prev, [name]: '' }));
		}
	};

	const validateForm = () => {
		const newErrors = {};

		// Email validation
		if (!formData.email) {
			newErrors.email = 'Email is required';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = 'Please enter a valid email address';
		}

		// Password validation
		if (!formData.password) {
			newErrors.password = 'Password is required';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		if (!validateForm()) return;

		setIsLoading(true);

		try {
			const response = await Api.loginTourist(
				formData.email,
				formData.password
			);
			if (response.success) {
				console.log(response);
				let token = response.data.accessToken;
				const decodedUser = jwtDecode(token);
				console.log(decodedUser)
				localStorage.setItem('authToken', response.data.accessToken);
				setToken(token);
				setUser(decodedUser); 
				navigate('/');
			}
		} catch (error) {
			console.error('Login error:', error);
			alert('Login failed. Please check your credentials and try again.');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			{/* Email Field */}
			<div>
				<label
					htmlFor="email"
					className="block text-sm font-semibold text-slate-300 mb-2">
					Email Address
				</label>
				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					className={`w-full px-4 py-3 bg-slate-700 border rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300 ${
						errors.email
							? 'border-red-500 ring-2 ring-red-500/20'
							: 'border-slate-600'
					}`}
					placeholder="Enter your email address"
				/>
				{errors.email && (
					<p className="mt-1 text-sm text-red-400">{errors.email}</p>
				)}
			</div>

			{/* Password Field */}
			<div>
				<label
					htmlFor="password"
					className="block text-sm font-semibold text-slate-300 mb-2">
					Password
				</label>
				<div className="relative">
					<input
						type={showPassword ? 'text' : 'password'}
						id="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						className={`w-full px-4 py-3 pr-12 bg-slate-700 border rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300 ${
							errors.password
								? 'border-red-500 ring-2 ring-red-500/20'
								: 'border-slate-600'
						}`}
						placeholder="Enter your password"
					/>
					<button
						type="button"
						onClick={() => setShowPassword(!showPassword)}
						className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-200">
						{showPassword ? '👁️' : '👁️‍🗨️'}
					</button>
				</div>
				{errors.password && (
					<p className="mt-1 text-sm text-red-400">
						{errors.password}
					</p>
				)}
			</div>

			{/* Remember Me & Forgot Password */}
			<div className="flex items-center justify-between">
				<div className="flex items-center space-x-2">
					<input
						type="checkbox"
						id="rememberMe"
						name="rememberMe"
						checked={formData.rememberMe}
						onChange={handleChange}
						className="w-4 h-4 text-emerald-600 bg-slate-700 border-slate-600 rounded focus:ring-emerald-500 focus:ring-2"
					/>
					<label
						htmlFor="rememberMe"
						className="text-sm text-slate-300">
						Remember me
					</label>
				</div>
				<a
					href="/auth/forgot-password"
					className="text-sm text-emerald-400 hover:text-emerald-300 underline">
					Forgot password?
				</a>
			</div>

			{/* Submit Button */}
			<button
				type="submit"
				disabled={isLoading}
				className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-bold rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
				{isLoading ? (
					<div className="flex items-center justify-center">
						<div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
						Signing In...
					</div>
				) : (
					'Sign In'
				)}
			</button>

			{/* Signup Link */}
			<div className="text-center">
				<p className="text-slate-400">
					Don't have an account?{' '}
					<a
						href="/auth/tourist?mode=signup"
						className="text-emerald-400 hover:text-emerald-300 font-semibold underline">
						Sign up here
					</a>
				</p>
			</div>
		</form>
	);
}
