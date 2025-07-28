// src/pages/Home.jsx
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-olive-50 to-lime-100 flex flex-col items-center justify-center relative">
      
      {/* Top Right Admin Button */}
      <button
        onClick={() => navigate("/admin/login")}
        className="absolute top-4 right-4 bg-gradient-to-r from-lime-600 to-olive-600  text-black font-bold px-4 py-2 rounded-lg shadow-md hover:bg-olive-800 transition duration-300"
      >
        Admin Login
      </button>

      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold mb-10 text-center text-olive-800 drop-shadow-md">
        Student Feedback Management
      </h1>

      {/* Give Feedback Button */}
      <button
        onClick={() => navigate("/feedbackform")}
        className="bg-gradient-to-r from-lime-600 to-olive-700 text-lime-800 px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:from-lime-700 hover:to-olive-700 transition-all duration-300"
      >
        Give Feedback
      </button>
    </div>
  );
}
