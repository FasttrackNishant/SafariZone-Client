import React, { createContext, useContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useMsal } from '@azure/msal-react';

const AuthContex = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(null);
	const {instance} = useMsal();

	useEffect(() => {
		const storedToken = localStorage.getItem('safari_token');
		  if (storedToken && storedToken !== "undefined" && storedToken !== "null") {
				if (storedToken) setToken(storedToken);
				try {
					const decoded = jwtDecode(storedToken);
					console.log(decoded)
					setUser({
						id: decoded.id || null,
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
    // Clear local storage
    localStorage.removeItem("safari_token");
    setToken(null);
    setUser(null);

    // Logout from Azure AD (optional)
    if (instance.getActiveAccount()) {
      instance.logoutPopup(); // or logoutRedirect() if preferred
    }
  };

	return (
		<AuthContex.Provider value={{ user, token, setToken, setUser, logout }}>
			{ children }
		</AuthContex.Provider>
	);
};

export const useAuth = () => useContext(AuthContex);