// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import FeedbackForm from "./pages/feedbackForm"; 
import ThankYou from "./pages/ThankYou"; 
import AdminLogin from "./pages/adminLogin";
import AdminDashboard from "./pages/dashboard"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedbackform" element={<FeedbackForm />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
