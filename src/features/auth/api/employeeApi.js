import { loginRequest } from '../api/authConfig';
import { jwtDecode } from 'jwt-decode';

export async function exchangeEmployeeToken(aadAccessToken) {
	try {
		const res = await fetch(
			`${import.meta.env.VITE_API_BASE_URL}/auth/exchange`,
			{
				method: 'POST',
				headers: {
					Authorization: `Bearer ${aadAccessToken}`,
					'Content-Type': 'application/json',
				},
			}
		);

		const data = await res.json();
		if (!res.ok) {
			return {
				success: false,
				message: data?.error || 'Exchange failed',
			};
		}

		return { success: true, data: data.data, message: 'Login successful' };
	} catch (err) {
		console.error('Employee login error:', err);
		return { success: false, message: 'Network error' };
	}
}

export async function employeeLogin(instance, setToken, setUser) {
	try {
		const response = await instance.loginPopup(loginRequest);
		instance.setActiveAccount(response.account);

		const aadToken = (await instance.acquireTokenSilent(loginRequest))
			.accessToken;

		const result = await exchangeEmployeeToken(aadToken);
		if (result.success) {
			let token = result.data.accessToken;
			localStorage.setItem('authToken', token);
			setToken(token);
			console.log('in emp ', result);
			const decoded = jwtDecode(token);
			setUser({
				id: decoded.id || null,
				email: decoded.email || null,
				name: decoded.name || null,
				role: decoded.role,
			});
			return { success: true, role: decoded.role };
		} else {
			return { success: false, message: result.message };
		}
	} catch (err) {
		console.error('Employee login failed', err);
		return { success: false, message: 'Login failed. Check console.' };
	}
}
