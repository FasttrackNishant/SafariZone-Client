import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../features/auth/api/authConfig';
import { jwtDecode } from 'jwt-decode';

export default function App() {
	const { instance, accounts } = useMsal();

	const login = async () => {
		const response = await instance.loginPopup(loginRequest);
		console.log(response);
		instance.setActiveAccount(response.account);
	};

	const callApi = async () => {
		const aadToken = (await instance.acquireTokenSilent(loginRequest))
			.accessToken;

    console.log(aadToken)
		const res = await fetch('http://localhost:5000/auth/exchange', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${aadToken}`,
				'Content-Type': 'application/json'
			},
		});
		const data = await res.json();
		localStorage.setItem('safari_token', data.accessToken);

	};

	const logout = () => instance.logoutPopup();

	return (
		<div style={{ padding: 24 }}>
			<h1>SafariZone Employee Portal</h1>
			{accounts.length ? (
				<>
					<p>Signed in as: {accounts[0].username}</p>
					<button onClick={callApi}>Call Protected API</button>{' '}
					<button onClick={logout}>Logout</button>
				</>
			) : (
				<button onClick={login}>Login with Microsoft</button>
			)}
		</div>
	);
}
