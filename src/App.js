import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import MizajAssessment from "./components/MizajAssessment";
import Reports from "./components/Reports";
import Contact from "./components/Contact";
import Insights from "./components/Insights"; 
import Tracking from "./components/Tracking";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [mizaj, setMizaj] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [dailyGraph, setDailyGraph] = useState([]);

  return (
    <Router>
      <div className="bg-light min-vh-100">
        {/* 🔹 Improved Navbar with Better Spacing */}
        <nav className="navbar navbar-expand-lg navbar-success bg-success shadow-sm">
          <div className="container">
            <NavLink className="navbar-brand fw-bold d-flex align-items-center text-white" to="/">
              <img 
                src="/Logos.jpeg"
                alt="TIBTAB Logo"
                width="40"
                height="40"
                className="me-2 rounded-circle"
              />
              TIBTAB
            </NavLink>
            
            {/* Mobile Toggle Button */}
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar Items */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto gap-3">
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/" activeClassName="fw-bold text-warning">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/assessment" activeClassName="fw-bold text-warning">Mizaj Assessment</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/reports" activeClassName="fw-bold text-warning">Reports</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/insights" activeClassName="fw-bold text-warning">Insights</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/tracking" activeClassName="fw-bold text-warning">Tracking</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/contact" activeClassName="fw-bold text-warning">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* 🔹 Main Content */}
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route 
              path="/assessment" 
              element={<MizajAssessment 
                setMizaj={setMizaj} 
                setDailyGraph={setDailyGraph} 
                setSuggestions={setSuggestions} 
                mizaj={mizaj}
                suggestions={suggestions}
                dailyGraph={dailyGraph}
              />} 
            />
            <Route path="/reports" element={<Reports />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
