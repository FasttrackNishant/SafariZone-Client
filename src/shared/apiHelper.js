import { BASE_API_URLS } from "./config";

export async function request(service, endpoint, options = {}) {
	try {
		const BASE_URL = BASE_API_URLS[service];
		if (!BASE_URL)
			throw new Error(`Service "${service}" is not defined in env`);

		const response = await fetch(`${BASE_URL}/api/${endpoint}`, {
			headers: {
				'Content-Type': 'application/json',
				...(options.headers || {}),
			},
			...options,
		});

		const data = await response.json();

		if (!response.ok) {
			return {
				success: false,
				message: data?.message || 'Request failed',
			};
		}

		return {
			success: true,
			data: data?.data || data,
			message: data?.message || 'Success',
		};
	} catch (error) {
		console.error('API Error:', error);
		return { success: false, message: 'Network error' };
	}
}
