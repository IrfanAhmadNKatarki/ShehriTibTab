import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import MizajAssessment from "./components/MizajAssessment";
import Reports from "./components/Reports";
import Contact from "./components/Contact";

export default function App() {
  return (
    <Router>
      <div className="bg-gradient-to-r from-blue-50 to-teal-100 min-h-screen">
        {/* Header */}
        <header className="flex justify-between items-center p-6 shadow-md bg-white">
          <h1 className="text-2xl font-bold text-blue-700">Unani Health App</h1>
          <nav className="space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/assessment" className="text-gray-700 hover:text-blue-600">Mizaj Assessment</Link>
            <Link to="/reports" className="text-gray-700 hover:text-blue-600">Reports</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          </nav>
        </header>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/assessment" element={<MizajAssessment />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
