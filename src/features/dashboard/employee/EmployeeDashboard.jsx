import { Outlet, NavLink } from "react-router";
import { useAuth } from "../../auth/context/AuthContext";

export default function EmployeeDashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">SafariZone</h1>
          <nav className="flex flex-col gap-4">
            <NavLink
              to="assigned-parks"
              className={({ isActive }) =>
                `px-4 py-2 rounded hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""}`
              }
            >
              Assigned Parks
            </NavLink>
            <NavLink
              to="pending-bookings"
              className={({ isActive }) =>
                `px-4 py-2 rounded hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""}`
              }
            >
              Pending Bookings
            </NavLink>
            <NavLink
              to="history"
              className={({ isActive }) =>
                `px-4 py-2 rounded hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""}`
              }
            >
              History
            </NavLink>
          </nav>
        </div>

        <div className="mt-auto p-6">
          <span className="block mb-2">{user?.email}</span>
          <button
            onClick={logout}
            className="w-full bg-red-600 py-2 rounded hover:bg-red-700 font-semibold"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-700">Employee Dashboard</h2>
          <div>
            <span className="px-4 py-2 bg-white rounded shadow">Role: {user?.roles?.join(", ")}</span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded shadow flex flex-col items-start">
            <span className="text-gray-500">Assigned Parks</span>
            <span className="text-2xl font-bold mt-2">5</span>
          </div>
          <div className="bg-white p-6 rounded shadow flex flex-col items-start">
            <span className="text-gray-500">Pending Bookings</span>
            <span className="text-2xl font-bold mt-2">8</span>
          </div>
          <div className="bg-white p-6 rounded shadow flex flex-col items-start">
            <span className="text-gray-500">Completed Safaris</span>
            <span className="text-2xl font-bold mt-2">24</span>
          </div>
        </div>

        {/* Recent Bookings Table */}
        <div className="bg-white rounded shadow p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">Recent Bookings</h3>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b py-2 px-4">Safari Name</th>
                <th className="border-b py-2 px-4">Tourist</th>
                <th className="border-b py-2 px-4">Date</th>
                <th className="border-b py-2 px-4">Vehicle</th>
                <th className="border-b py-2 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4">Tiger Safari</td>
                <td className="py-2 px-4">John Doe</td>
                <td className="py-2 px-4">2025-09-01</td>
                <td className="py-2 px-4">Gypsy</td>
                <td className="py-2 px-4 text-green-600 font-semibold">Confirmed</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Elephant Safari</td>
                <td className="py-2 px-4">Jane Smith</td>
                <td className="py-2 px-4">2025-09-03</td>
                <td className="py-2 px-4">Jeep</td>
                <td className="py-2 px-4 text-yellow-600 font-semibold">Pending</td>
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