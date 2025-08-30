import React from "react";
import { Outlet, NavLink, Link } from "react-router";

export default function TouristDashboard() {
  return (
		<div className="flex min-h-screen bg-gray-100">
			{/* Sidebar */}
			<aside className="w-64 bg-gray-800 text-white flex flex-col">
				<div className="p-6">
					<Link to="/">
						<h1 className="text-2xl font-bold mb-6">SafariZone</h1>
					</Link>
					<nav className="flex flex-col gap-4">
						<NavLink
							to="booking"
							className={({ isActive }) =>
								`px-4 py-2 rounded hover:bg-gray-700 ${
									isActive ? 'bg-gray-700' : ''
								}`
							}>
							Bookings
						</NavLink>
						<NavLink
							to="profile"
							className={({ isActive }) =>
								`px-4 py-2 rounded hover:bg-gray-700 ${
									isActive ? 'bg-gray-700' : ''
								}`
							}>
							Profile
						</NavLink>
						<NavLink
							to="history"
							className={({ isActive }) =>
								`px-4 py-2 rounded hover:bg-gray-700 ${
									isActive ? 'bg-gray-700' : ''
								}`
							}>
							History
						</NavLink>
					</nav>
				</div>
				<div className="mt-auto p-6">
					<button className="w-full bg-red-600 py-2 rounded hover:bg-red-700">
						Logout
					</button>
				</div>
			</aside>

			{/* Main content */}
			<main className="flex-1 p-8">
				{/* Header */}
				<div className="flex justify-between items-center mb-8">
					<h2 className="text-3xl font-bold text-gray-700">
						Dashboard
					</h2>
					<div>
						<span className="px-4 py-2 bg-white rounded shadow">
							Welcome, Tourist
						</span>
					</div>
				</div>

				{/* Stats Cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
					<div className="bg-white p-6 rounded shadow flex flex-col items-start">
						<span className="text-gray-500">Upcoming Safaris</span>
						<span className="text-2xl font-bold mt-2">3</span>
					</div>
					<div className="bg-white p-6 rounded shadow flex flex-col items-start">
						<span className="text-gray-500">Total Bookings</span>
						<span className="text-2xl font-bold mt-2">12</span>
					</div>
					<div className="bg-white p-6 rounded shadow flex flex-col items-start">
						<span className="text-gray-500">
							Feedbacks Submitted
						</span>
						<span className="text-2xl font-bold mt-2">5</span>
					</div>
				</div>

				{/* Recent Bookings Table */}
				<div className="bg-white rounded shadow p-6">
					<h3 className="text-xl font-bold mb-4">Recent Bookings</h3>
					<table className="w-full text-left border-collapse">
						<thead>
							<tr>
								<th className="border-b py-2 px-4">
									Safari Name
								</th>
								<th className="border-b py-2 px-4">Date</th>
								<th className="border-b py-2 px-4">Vehicle</th>
								<th className="border-b py-2 px-4">Status</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="py-2 px-4">Tiger Safari</td>
								<td className="py-2 px-4">2025-09-01</td>
								<td className="py-2 px-4">Gypsy</td>
								<td className="py-2 px-4 text-green-600 font-semibold">
									Confirmed
								</td>
							</tr>
							<tr>
								<td className="py-2 px-4">Elephant Safari</td>
								<td className="py-2 px-4">2025-09-03</td>
								<td className="py-2 px-4">Jeep</td>
								<td className="py-2 px-4 text-yellow-600 font-semibold">
									Pending
								</td>
							</tr>
							<tr>
								<td className="py-2 px-4">Bird Watching</td>
								<td className="py-2 px-4">2025-09-05</td>
								<td className="py-2 px-4">Van</td>
								<td className="py-2 px-4 text-red-600 font-semibold">
									Cancelled
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				{/* Nested Routes */}
				<Outlet />
			</main>
		</div>
  );
}