import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from "../../context/AuthContext";
import { loginTourist } from "../../api/touristApi";

export default function TouristLogin() {
	const navigate = useNavigate();
	const { setToken, setUser } = useAuth();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const handleLogin = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError('');

		try {
			const response = await loginTourist(email, password);
			if (response.success) {
                console.log(response)
                console.log(response.data.accessToken)
				localStorage.setItem('safari_token', response.data.accessToken);
				setToken(response.data.accessToken);
				setUser({ email, roles: ['Tourist'] }); // Role from backend or decoded token
				navigate('/tourist/dashboard');
			} else {
				setError(response.message || 'Invalid credentials');
			}
		} catch (err) {
			setError('Login failed. Try again.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 px-4">
			<form
				onSubmit={handleLogin}
				className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
				<h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
					Tourist Login
				</h2>

				{error && <p className="text-red-500 mb-4">{error}</p>}

				<input
					type="email"
					placeholder="Email"
					className="w-full p-3 mb-4 border rounded"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>

				<input
					type="password"
					placeholder="Password"
					className="w-full p-3 mb-4 border rounded"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>

				<button
					type="submit"
					disabled={loading}
					className="w-full bg-green-600 text-white py-3 rounded font-semibold hover:bg-green-700 transition">
					{loading ? 'Logging in...' : 'Login'}
				</button>
			</form>
		</div>
	);
}
