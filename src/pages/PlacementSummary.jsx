import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Link } from "react-router-dom";
import "./student-dashboard.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const mockResources = [
  { company:"Google", icon:"🟢", criteria:"CGPA>8, DSA & System Design", selected:10, placed:8 },
  { company:"Microsoft", icon:"🔵", criteria:"OOPS & DBMS, CGPA>7.5", selected:12, placed:10 },
  { company:"Amazon", icon:"🟠", criteria:"Leadership, CGPA>7", selected:15, placed:12 },
  { company:"Apple", icon:"🍎", criteria:"iOS & DS, CGPA>8", selected:9, placed:8 },
  { company:"Facebook", icon:"📘", criteria:"DSA & System Design, CGPA>7.5", selected:11, placed:9 },
  { company:"Tesla", icon:"⚡", criteria:"Embedded & AI, CGPA>7", selected:8, placed:7 },
  { company:"Netflix", icon:"🎬", criteria:"Backend & Microservices, CGPA>7.5", selected:10, placed:9 },
  { company:"Adobe", icon:"🎨", criteria:"Creative Coding & OOPS, CGPA>7", selected:12, placed:10 },
  { company:"Intel", icon:"💻", criteria:"Hardware & Algorithms, CGPA>7.5", selected:11, placed:10 },
  { company:"IBM", icon:"🔹", criteria:"AI & Cloud, CGPA>7", selected:14, placed:12 },
  { company:"Oracle", icon:"🟣", criteria:"DBMS & SQL, CGPA>7", selected:13, placed:11 },
  { company:"Infosys", icon:"🟦", criteria:"Programming & Aptitude, CGPA>6.5", selected:15, placed:13 },
];

export default function PlacementResources() {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const chartData = selectedCompany && {
    labels: ["Students Selected", "Students Placed"],
    datasets: [
      {
        label: selectedCompany.company,
        data: [selectedCompany.selected, selectedCompany.placed],
        backgroundColor: ["#2563eb","#16a34a"]
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: "Placement Stats", font: { size: 18 } }
    }
  };

  return (
    <div className="dashboard-layout">
      {/* sidebar */}
      <aside className="sidebar">
        <h2 className="logo">🎓 Student Portal</h2>
        <nav>
          <ul>
            <li><Link to="/student">Dashboard</Link></li>
            <li><Link to="/know-seniors">Know Your Seniors</Link></li>
            <li><Link to="/mentorship">Mentorship</Link></li>
            <li><Link to="/chatbot">AI Chatbot</Link></li>
            <li><Link to="/summary">AI Placement Summarizer</Link></li>
            <li><Link to="/matchmaking">AI Alumni Matchmaking</Link></li>
          </ul>
        </nav>
      </aside>

      {/* main content */}
      <main className="main-content">
        <header className="dashboard-header">
          <h1>📂 Placement Resources</h1>
        </header>

        <div className="grid">
          {mockResources.map((res,i)=>(
            <div
              key={i}
              className="card cursor-pointer hover:shadow-xl transition"
              onClick={()=>setSelectedCompany(res)}
            >
              <div className="card-content flex items-center gap-4 justify-center">
                <div className="text-3xl">{res.icon}</div>
                <div>
                  <h3>{res.company}</h3>
                  <p>{res.criteria}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* modal */}
        {selectedCompany && (
          <div className="modal-overlay" onClick={()=>setSelectedCompany(null)}>
            <div className="modal-card" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={()=>setSelectedCompany(null)}>✖</button>
              <h2 className="text-2xl font-bold mb-4">{selectedCompany.company}</h2>
              <p className="text-gray-600 mb-4">Criteria: {selectedCompany.criteria}</p>
              <Bar data={chartData} options={chartOptions} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
