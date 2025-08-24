import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../features/auth/api/authConfig';
import { jwtDecode } from 'jwt-decode';
import './App.css';
import { Route, Routes } from 'react-router';
import NotFound from '../shared/pages/NotFound';
import LandingPage from '../shared/pages/LandingPage';
import Unauthorized from '../shared/pages/Unauthorized';
import TouristLogin from '../features/auth/pages/tourist/TouristLogin';
import EmployeeLogin from '../features/auth/pages/employee/EmployeeLogin';
import TouristDashboard from '../features/dashboard/tourist/TouristDashboard';

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="/unauthorized" element={<Unauthorized />} />

			<Route path="/login-tourist" element={<TouristLogin />} />
			<Route path="/login-employee" element={<EmployeeLogin />} />

			<Route path="/tourist" >
				 <Route path="dashboard" element={<TouristDashboard />} />
				{/* <Route path="profile" element={<Profile />} />
				<Route path="booking" element={<Booking />} />
				<Route path="history" element={<History />} />
				<Route index element={<Booking />} />{' '} */}
			</Route>

			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

// export default function App() {
// // 	const { instance, accounts } = useMsal();

// // 	const login = async () => {
// // 		const response = await instance.loginPopup(loginRequest);
// // 		console.log(response);
// // 		instance.setActiveAccount(response.account);
// // 	};

// // 	const callApi = async () => {
// // 		const aadToken = (await instance.acquireTokenSilent(loginRequest))
// // 			.accessToken;

// //     console.log(aadToken)
// // 		const res = await fetch('http://localhost:5000/auth/exchange', {
// // 			method: 'POST',
// // 			headers: {
// // 				Authorization: `Bearer ${aadToken}`,
// // 				'Content-Type': 'application/json'
// // 			},
// // 		});
// // 		const data = await res.json();
// // 		localStorage.setItem('safari_token', data.accessToken);

// // 	};

// // 	const logout = () => instance.logoutPopup();

// // 	return (
// // 		<div style={{ padding: 24 }}>

// // 			<h1 className="text-3xl bg-amber-50 text-amber-500 font-bold underline">
// //     Hello world!
// //   </h1>

// 			{/* <h1>SafariZone Employee Portal</h1>
// 			{accounts.length ? (
// 				<>
// 					<p>Signed in as: {accounts[0].username}</p>
// 					<button onClick={callApi}>Call Protected API</button>{' '}
// 					<button onClick={logout}>Logout</button>
// 				</>
// 			) : (
// 				<button onClick={login}>Login with Microsoft</button>
// 			)} */}
// 		// </div>
// 	// );
// }
