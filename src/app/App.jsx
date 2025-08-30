import './App.css';
import { Route, Routes } from 'react-router';
import EmployeeLogin from '../features/auth/pages/employee/EmployeeLogin';
import TouristLogin from '../features/auth/pages/tourist/TouristLogin';
import EmployeeDashboard from '../features/dashboard/employee/EmployeeDashboard';
import TouristDashboard from '../features/dashboard/tourist/TouristDashboard';
import About from '../features/main/about/About';
import ContactUs from '../features/main/contact/ContactUs';
import AuthPage from '../features/main/get-started/AuthPage';
import GetStartedPage from '../features/main/get-started/GetStarted';
import LandingPage from '../features/main/home/LandingPage';
import Test from '../features/Test';
import NotFound from '../features/utils/pages/NotFound';
import Unauthorized from '../features/utils/pages/Unauthorized';
import PackagesPage from '../features/packages/PackagesPage';
import ParkDetailPage from '../features/parks/ParkDetailPage';
import PackageDetailPage from '../features/packages/PackageDetailPage';
import SafariBookingPage from '../features/booking/SafariBookingPage';

export default function App() {
	return (
		<Routes>
			{/* Public Pages */}
			<Route path="/" element={<LandingPage />} />
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<ContactUs />} />
			<Route path="/get-started" element={<GetStartedPage />} />
			<Route path="/auth" element={<AuthPage />} />
			<Route path="/unauthorized" element={<Unauthorized />} />

			{/* Auth Pages */}
			<Route path="/login-tourist" element={<TouristLogin />} />
			<Route path="/login-employee" element={<EmployeeLogin />} />

			{/* Tourist Routes */}
			<Route path="/tourist/dashboard" element={<TouristDashboard />} />

			{/* Employee Routes */}
			<Route path="/employee/dashboard" element={<EmployeeDashboard />} />

			{/* Packages Page */}
			<Route path='/packages' element={<PackagesPage/>} />

			<Route path="/parks/:id" element={<ParkDetailPage/>} />
			<Route path="/package-details/:id" element={<PackageDetailPage/>} />
			<Route path="/book-safari/:parkId/:zoneId/:sessionId/:vehicleType" element={<SafariBookingPage/>} />

			{/* Misc */}
			<Route path="/test" element={<Test />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
