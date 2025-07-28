import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const data = await res.json();
      if (data.token) {
        localStorage.setItem("adminToken", data.token);
        navigate("/admin/dashboard");
      } else {
        alert("Invalid login");
      }
    } catch {
      alert("Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lime-100 to-olive-100 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-olive-700">
          Admin Login
        </h2>

        {["username", "password"].map((field) => (
          <input
            key={field}
            type={field === "password" ? "password" : "text"}
            name={field}
            required
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={credentials[field]}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-3 border border-lime-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent transition duration-200"
          />
        ))}

        <button
          type="submit"
          className="w-full py-3 mt-2 bg-gradient-to-r from-lime-600 to-olive-600 text-white font-semibold text-lg rounded-full hover:from-lime-700 hover:to-olive-700 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}
