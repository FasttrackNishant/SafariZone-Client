import toast from 'react-hot-toast';
import { request } from './apiHelper';

export const Api = {
	loginTourist: async (email, password) => {
		const res = await request('/auth/login-tourist', {
			method: 'POST',
			body: JSON.stringify({ email, password }),
		});
		return res;
	},

	verifyToken: (token) =>
		request('/auth/verify', {
			method: 'POST',
			headers: { Authorization: `Bearer ${token}` },
		}),
};

// export async function loginTourist(email, password) {
//   try {
//     const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/login-tourist`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await response.json();

//     if (!response.ok) {
//       return {
//         success: false,
//         message: data?.message || "Login failed",
//       };
//     }

//     return {
//       success: true,
//       data : data.data,
//       message: data?.message || "Login successful",
//     };
//   } catch (error) {
//     console.error("Tourist login error:", error);
//     return { success: false, message: "Network error" };
//   }
// }
