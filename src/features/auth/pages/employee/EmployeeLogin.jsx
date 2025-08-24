import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../api/authConfig";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { exchangeEmployeeToken } from "../../api/employeeApi";

export default function EmployeeLogin() {
  const { instance } = useMsal();
  const { setToken, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await instance.loginPopup(loginRequest);
      instance.setActiveAccount(response.account);

      const aadToken = (await instance.acquireTokenSilent(loginRequest)).accessToken;
      console.log(aadToken)
      const result = await exchangeEmployeeToken(aadToken);
      if (result.success) {
        localStorage.setItem("safari_token", result.data.accessToken);
        setToken(result.data.accessToken);

        // extract roles from internal JWT or data
        const roles = result.data.roles || [];
        setUser({ email: result.data.email, id: result.data.subject, roles });

        navigate("/employee/dashboard");
      } else {
        alert(result.message);
      }
    } catch (err) {
      console.error("Employee login failed", err);
      alert("Login failed. Check console.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-400 to-blue-500 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-700">
          Employee / Admin Login
        </h2>
        <button
          onClick={handleLogin}
          className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Login with Microsoft
        </button>
      </div>
    </div>
  );
}