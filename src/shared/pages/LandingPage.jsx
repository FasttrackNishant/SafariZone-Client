import { useNavigate } from "react-router";
import React from "react";
import Navbar from "../components/Navbar";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-col items-center justify-center flex-1 bg-gradient-to-r from-orange-400 via-yellow-300 to-blue-500 text-white px-4 animate-fadeIn">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg animate-bounce">
          SafariZone
        </h1>
        <p className="text-lg mb-12 text-gray-100 drop-shadow-md">
          Explore Maharashtra's Wildlife Safaris. Book, Discover & Enjoy!
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <button
            onClick={() => navigate("/login-tourist")}
            className="px-8 py-4 bg-white text-orange-500 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transform hover:scale-105 transition"
          >
            Tourist Login
          </button>

          <button
            onClick={() => navigate("/login-employee")}
            className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transform hover:scale-105 transition"
          >
            Employee / Admin Login
          </button>
        </div>

        <footer className="mt-20 text-gray-200 text-sm">
          &copy; {new Date().getFullYear()} SafariZone. All rights reserved.
        </footer>
      </div>
    </div>
  );
}