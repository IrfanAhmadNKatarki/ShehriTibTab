import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import MizajAssessment from "./components/MizajAssessment";
import Reports from "./components/Reports";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Import Bootstrap

export default function App() {
  return (
    <Router>
      <div className="bg-light min-vh-100">
        {/* 🔹 Bootstrap Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
          <div className="container-fluid">
            <Link className="navbar-brand fw-bold" to="/">
              TIBTAB
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/assessment">Mizaj Assessment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/reports">Reports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/assessment" element={<MizajAssessment />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
