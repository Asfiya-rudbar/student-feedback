// src/pages/ThankYou.jsx
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-lime-100 to-olive-50 px-4">
      <h1 className="text-4xl font-bold text-olive-700 mb-4 text-center">
        🎉 Thank you for your feedback!
      </h1>

      <p className="text-lg text-gray-700 mb-6 text-center">
        Your opinion helps us grow and improve. 🌱
      </p>

      <Link
        to="/"
        className="bg-gradient-to-r from-lime-600 to-olive-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:from-lime-700 hover:to-olive-700 transition duration-300"
      >
        Submit Another
      </Link>
    </div>
  );
}
