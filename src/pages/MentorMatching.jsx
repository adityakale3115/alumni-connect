import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./a.css"

const mockMentors = [
  { name: "Anjali Verma", match: 95, photo: "/images/pooja.png" },
  { name: "Karan Singh", match: 88, photo: "/images/image.png" },
  { name: "Meena Reddy", match: 82, photo: "/images/pooja.png" },
];

export default function MentorMatching() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [requested, setRequested] = useState({});
  const location = useLocation();

  const handleRequest = (name) => {
    setRequested((prev) => ({ ...prev, [name]: true }));
  };

  return (
    <div className="dashboard-layout">
      {/* ✅ Navbar */}
      <header className="navbar">
        <Link to="/student" className="logo">
          🎓 Student Portal
        </Link>

        <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <nav>
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <Link
                to="/student"
                className={location.pathname === "/student" ? "active" : ""}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/chatbot"
                className={location.pathname === "/chatbot" ? "active" : ""}
              >
                AI Chatbot
              </Link>
            </li>
            <li>
              <Link
                to="/summary"
                className={location.pathname === "/summary" ? "active" : ""}
              >
                AI Placement
              </Link>
            </li>
            <li>
              <Link
                to="/mentors"
                className={location.pathname === "/mentors" ? "active" : ""}
              >
                Alumni Match
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* ✅ Main Content */}
      <main className="main-content">
        <h1 className="page-title">🤝 Mentor Matching</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockMentors.map((mentor, index) => (
            <div key={index} className="mentor-card">
              <div className="mentor-info">
                <img
                  src={mentor.photo}
                  alt={mentor.name}
                  className="mentor-photo"
                />
                <div className="mentor-details">
                  <h2>{mentor.name}</h2>
                  <p>Match Score</p>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${mentor.match}%` }}
                    />
                  </div>
                  <span>{mentor.match}%</span>
                </div>
              </div>
              <button
                className="btn-request"
                onClick={() => handleRequest(mentor.name)}
                disabled={requested[mentor.name]}
              >
                {requested[mentor.name] ? "✅ Requested" : "Request Session"}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
