import React, { createContext, useContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useMsal } from '@azure/msal-react';
import { Api } from '../api/touristApi';
import toast from 'react-hot-toast';
import { toastMessages } from '../../../core/toastConstants';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const { instance } = useMsal();

	// 🔹 Function to verify token
	const verifyToken = async (storedToken) => {
		try {
			const res = await Api.verifyToken(storedToken);
			console.log(res);
			if (res.success && res.data.verified) {
				setToken(storedToken);

				try {
					const decoded = jwtDecode(storedToken);
					console.log("in auth context",decoded)
					setUser({
						id: decoded.id || null,
						email: decoded.email || null,
						name: decoded.name || "User",
						role: decoded.role || 'N/A',
					});
				} catch (err) {
					console.error('Invalid token:', err);
					localStorage.removeItem('authToken');
					setUser(null);
				}
			} else {
				localStorage.removeItem('authToken');
				setUser(null);
			}
		} catch (error) {
			console.error('Auth check failed:', error);
			localStorage.removeItem('authToken');
			setUser(null);
		}
		finally{
			console.log("final user",user)
		}
	};

	// 🔹 Initial check on mount
	useEffect(() => {
		const initAuth = async () => {
			const storedToken = localStorage.getItem('authToken');
			if (storedToken) {
				console.log("auth context",storedToken)
				await verifyToken(storedToken);
			}
			setIsLoading(false);
		};
		initAuth();
	}, []);

	// 🔹 Logout
	const logout = () => {
		clearAuth();

		if (instance.getActiveAccount()) {
			instance.logoutPopup();
		}

		toast.success(toastMessages.logoutSucess);
	};

	const clearAuth = () => {
		localStorage.removeItem('authToken');
		setUser(null);
		setToken(null);
	};

	const value = {
		user,
		token,
		isLoading,
		isAuthenticated: !!user,
		logout,
		verifyToken,
		setUser,
		setToken,
		clearAuth
	};

	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
