import React from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../features/auth/context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="bg-gradient-to-r from-orange-500 to-blue-500 text-white p-4 flex justify-between items-center shadow-md">
      <h1
        className="text-2xl font-bold cursor-pointer hover:scale-105 transform transition"
        onClick={() => navigate("/")}
      >
        SafariZone
      </h1>

      {user ? (
        <div className="flex items-center gap-4">
          <span className="font-medium">Hello, {user.email}</span>
          <button
            onClick={logout}
            className="bg-white text-orange-500 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Logout
          </button>
        </div>
      ) : null}
    </nav>
  );
}