// src/pages/FeedbackForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FeedbackForm = () => {
  const navigate = useNavigate();

  // 🔸 State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [rating, setRating] = useState('');
  const [comments, setComments] = useState('');

  // 🔸 Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const feedbackData = { name, email, course, rating, comments };

    try {
      const res = await fetch('http://localhost:5000/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(feedbackData),
      });

      if (res.ok) {
        navigate('/thankyou');
      } else {
        console.error('❌ Failed to submit feedback');
      }
    } catch (err) {
      console.error('❌ Error:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-olive-50 to-lime-100 flex flex-col items-center px-4 py-8">
      {/* Top Heading */}
      <h2 className="text-4xl font-bold text-olive-800 mb-8 self-start ml-2 sm:ml-8">
        Feedback System
      </h2>

      {/* Feedback Form */}
      <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-2xl border border-lime-200">
        <h3 className="text-2xl font-semibold text-center text-olive-700 mb-6">
          Student Feedback Form
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email Address"
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
          <input
            type="text"
            value={course}
            onChange={e => setCourse(e.target.value)}
            placeholder="Course Name"
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
          <input
            type="number"
            value={rating}
            onChange={e => setRating(e.target.value)}
            placeholder="Rating (1-5)"
            min="1"
            max="5"
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
          <textarea
            value={comments}
            onChange={e => setComments(e.target.value)}
            placeholder="Your Comments"
            rows="4"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-lime-600 to-olive-600 text-white p-3 rounded-full font-semibold text-lg hover:from-lime-700 hover:to-olive-700 transition-all duration-300"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
