import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import alumniData from "../data/alumni.json";
import "./student-dashboard.css";

export default function StudentDashboard() {
  const [alumniList, setAlumniList] = useState([]);
  const [filters, setFilters] = useState({ year: "", company: "", course: "" });
  const [search, setSearch] = useState("");
  const [selectedAlumnus, setSelectedAlumnus] = useState(null); // modal state

  useEffect(() => {
    setAlumniList(alumniData);
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredAlumni = alumniList.filter((alumnus) => {
    return (
      (filters.year === "" || alumnus.year.toString() === filters.year) &&
      (filters.company === "" || alumnus.company === filters.company) &&
      (filters.course === "" || alumnus.course === filters.course) &&
      alumnus.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  const uniqueYears = [...new Set(alumniList.map((a) => a.year))];
  const uniqueCompanies = [...new Set(alumniList.map((a) => a.company))];
  const uniqueCourses = [...new Set(alumniList.map((a) => a.course))];

  const selectedData = selectedAlumnus
    ? alumniList.find((a) => a.id === selectedAlumnus)
    : null;

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">🎓 Student Portal</h2>
        <nav>
          <ul>
            <li><Link to="/student">Dashboard</Link></li>
            <li><Link to="/know-seniors">Know Your Seniors</Link></li>
            <li><Link to="/mentorship">Mentorship</Link></li>
            <li><Link to="/chatbot">AI Chatbot</Link></li>
            <li><Link to="/summary">AI Placement Summarizer</Link></li>
            <li><Link to="/mentors">AI Alumni Matchmaking</Link></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="dashboard-header">
          <h1>Alumni Directory</h1>
          <div className="user-profile">
            <img src="https://via.placeholder.com/40" alt="profile" />
            <span>Welcome, Student</span>
          </div>
        </header>

        {/* Filter/Search */}
        <div className="filter-bar">
          <input
            type="text"
            placeholder="Search by Name"
            value={search}
            onChange={handleSearchChange}
            className="search-input"
          />

          <select name="year" onChange={handleFilterChange} value={filters.year}>
            <option value="">Filter by Batch</option>
            {uniqueYears.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>

          <select name="company" onChange={handleFilterChange} value={filters.company}>
            <option value="">Filter by Company</option>
            {uniqueCompanies.map((company) => (
              <option key={company} value={company}>{company}</option>
            ))}
          </select>

          <select name="course" onChange={handleFilterChange} value={filters.course}>
            <option value="">Filter by Branch</option>
            {uniqueCourses.map((course) => (
              <option key={course} value={course}>{course}</option>
            ))}
          </select>
        </div>

        {/* Alumni Cards */}
        <div className="grid">
          {filteredAlumni.map((alumnus) => (
            <div key={alumnus.id} className="card">
              <div className={`profile-photo ${alumnus.circular ? "circular" : ""}`}>
                <img
                  src={alumnus.photo || "https://via.placeholder.com/100"}
                  alt={alumnus.name}
                />
              </div>
              <div className="card-content">
                <h3>{alumnus.name}</h3>
                <p>{alumnus.course}</p>
                <p>Batch of {alumnus.year}</p>
                <p>Company: {alumnus.company}</p>
                <button className="btn" onClick={() => setSelectedAlumnus(alumnus.id)}>
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {selectedData && (
        <div className="modal-overlay" onClick={() => setSelectedAlumnus(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedAlumnus(null)}>✖</button>
            <h2>{selectedData.name}</h2>
            <p><strong>Company:</strong> {selectedData.company}</p>
            <p><strong>College:</strong> {selectedData.college}</p>
            <p><strong>Social:</strong> <a href={selectedData.social} target="_blank" rel="noreferrer">LinkedIn</a></p>
            <p><strong>Coding:</strong> <a href={selectedData.coding} target="_blank" rel="noreferrer">GitHub</a></p>
            <p><strong>Recruitment Procedure:</strong> {selectedData.procedure}</p>
            <p><strong>Questions Asked:</strong> {selectedData.questions}</p>
            <p><strong>Preparation Tips:</strong> {selectedData.preparation}</p>
          </div>
        </div>
      )}
    </div>
  );
}
