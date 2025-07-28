import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/feedback")
      .then((res) => res.json())
      .then((data) => setFeedbacks(data))
      .catch((err) => console.error("Error fetching feedbacks:", err));
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this feedback?");
    if (!confirmDelete) return;

    try {
      await fetch(`http://localhost:5000/api/feedback/${id}`, {
        method: "DELETE",
      });
      setFeedbacks((prev) => prev.filter((fb) => fb._id !== id));
    } catch (error) {
      console.error("Error deleting feedback:", error);
      alert("Failed to delete feedback");
    }
  };

  return (
    <div className="min-h-screen bg-lime-50 p-6">
      {/* Main Heading */}
      <h1 className="text-4xl font-extrabold text-center text-lime-800 mb-10 tracking-tight">
        🛠️ Admin Dashboard
      </h1>

      {/* Feedback List */}
      {feedbacks.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">No feedback submitted yet.</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {feedbacks.map((fb) => (
            <div
              key={fb._id}
              className="bg-white rounded-2xl shadow-lg border border-lime-200 p-6 hover:shadow-xl transition-transform transform hover:-translate-y-1"
            >
              <div className="mb-4 space-y-1">
                <p><span className="font-semibold text-lime-700">👤 Name:</span> {fb.name}</p>
                <p><span className="font-semibold text-lime-700">📧 Email:</span> {fb.email}</p>
                <p><span className="font-semibold text-lime-700">📚 Course:</span> {fb.course}</p>
                <p><span className="font-semibold text-lime-700">⭐ Rating:</span> {fb.rating}</p>
                <p><span className="font-semibold text-lime-700">💬 Comments:</span> {fb.comments}</p>
              </div>
              <p className="text-sm text-gray-500 italic">
                Submitted on: {new Date(fb.createdAt).toLocaleString()}
              </p>

              <button
                onClick={() => handleDelete(fb._id)}
                className="mt-6 w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-2 rounded-lg font-medium shadow-sm hover:from-red-600 hover:to-red-700 hover:shadow-md transition"
              >
                🗑️ Delete Feedback
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
