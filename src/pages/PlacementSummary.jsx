import { useState } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title
} from "chart.js";
import { Link } from "react-router-dom";
import "./placement-dashboard.css";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const mockResources = [
  { company:"Google", icon:"🟢", criteria:"CGPA > 8, DSA & System Design", selected:10, placed:8 },
  { company:"Microsoft", icon:"🔵", criteria:"OOPS & DBMS, CGPA > 7.5", selected:12, placed:10 },
  { company:"Amazon", icon:"🟠", criteria:"Leadership, CGPA > 7", selected:15, placed:12 },
  { company:"Apple", icon:"🍎", criteria:"iOS & DS, CGPA > 8", selected:9, placed:8 },
  { company:"Meta", icon:"📘", criteria:"DSA & System Design, CGPA > 7.5", selected:11, placed:9 },
  { company:"Tesla", icon:"⚡", criteria:"ML & Robotics, CGPA > 8", selected:8, placed:6 },
  { company:"Netflix", icon:"🎬", criteria:"System Design, CGPA > 7", selected:10, placed:7 },
  { company:"Adobe", icon:"🟥", criteria:"Design + Coding, CGPA > 7.5", selected:13, placed:10 },
  { company:"Spotify", icon:"🎵", criteria:"DSA + Cloud, CGPA > 7", selected:7, placed:5 },
  { company:"Oracle", icon:"🔴", criteria:"DBMS + SQL, CGPA > 7", selected:12, placed:9 },
];

export default function PlacementResources() {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const chartData = selectedCompany && {
    labels: ["Students Selected", "Students Placed"],
    datasets: [
      {
        label: selectedCompany.company,
        data: [selectedCompany.selected, selectedCompany.placed],
        backgroundColor: ["#3b82f6", "#16a34a"], // blue + green
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
      title: { display: true, text: "Placement Stats", font: { size: 18 } },
    },
  };

  return (
    <div>
      {/* ✅ Navbar */}
      <header className="navbar">
        <Link to="/student" className="logo">🎓 Student Portal</Link>

        <button 
          className="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav>
          <ul className={menuOpen ? "open" : ""}>
            <li><Link to="/student">Dashboard</Link></li>
            <li><Link to="/chatbot">AI Chatbot</Link></li>
            <li><Link to="/summary">AI Placement</Link></li>
            <li><Link to="/mentors">Alumni Match</Link></li>
          </ul>
        </nav>
      </header>

      {/* ✅ Main Content */}
      <main className="main-content">
        <header className="dashboard-header">
          <h1>📂 Placement Resources</h1>
          <p className="subtitle">Click a company card to view placement stats</p>
        </header>

        <div className="grid">
          {mockResources.map((res, i) => (
            <div
              key={i}
              className="card"
              onClick={() => setSelectedCompany(res)}
            >
              <div className="card-content">
                <div className="icon">{res.icon}</div>
                <div>
                  <h3>{res.company}</h3>
                  <p>{res.criteria}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Modal */}
        {selectedCompany && (
          <div className="modal-overlay" onClick={() => setSelectedCompany(null)}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedCompany(null)}>✖</button>
              <h2 className="modal-title">{selectedCompany.company}</h2>
              <p className="modal-subtitle">Criteria: {selectedCompany.criteria}</p>
              <Pie data={chartData} options={chartOptions} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
