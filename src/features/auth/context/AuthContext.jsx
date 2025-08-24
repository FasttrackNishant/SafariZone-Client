import React, { createContext, useContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthContex = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(null);

	useEffect(() => {
		const storedToken = localStorage.getItem('safari_token');
		  if (storedToken && storedToken !== "undefined" && storedToken !== "null") {
				if (storedToken) setToken(storedToken);
				try {
					const decoded = jwtDecode(storedToken);
					setUser({
						id: decoded.sub || null,
						email: decoded.email || null,
						roles: decoded.role
							? [decoded.role]
							: decoded.roles || [],
					});
				} catch (err) {
					console.error('Invalid token:', err);
					localStorage.removeItem('safari_token');
				}
			}
	}, []);

    const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("safari_token");
  };

	return (
		<AuthContex.Provider value={{ user, token, setToken, setUser, logout }}>
			{ children }
		</AuthContex.Provider>
	);
};

export const useAuth = () => useContext(AuthContex);