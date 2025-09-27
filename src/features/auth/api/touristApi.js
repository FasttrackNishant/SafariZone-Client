import { request } from '../../../shared/apiHelper';

export const Api = {
	loginTourist: async (email, password) => {
		const res = await request(auth,'/login-tourist', {
			method: 'POST',
			body: JSON.stringify({ email, password }),
		});
		return res;
	},
	
	verifyToken: (token) =>
		request(auth,'/verify', {
			method: 'POST',
			headers: { Authorization: `Bearer ${token}` },
		}),

	signUpTourist : async (data) =>
	{
		const res = await request(user,'/signup-user',{
			method:'POST',
			body: JSON.stringify(data)
		});
		return res;
	}
};