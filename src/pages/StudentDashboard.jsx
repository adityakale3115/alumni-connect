import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import alumniData from "../data/alumni.json";
import "./student-dashboard.css";

export default function StudentDashboard() {
  const [alumniList, setAlumniList] = useState([]);
  const [filters, setFilters] = useState({ year: "", company: "", course: "" });
  const [search, setSearch] = useState("");

  useEffect(() => {
    setAlumniList(alumniData);
  }, []);

  // handle filter change
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  // handle search change
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // apply filters and search
  const filteredAlumni = alumniList.filter((alumnus) => {
    return (
      (filters.year === "" || alumnus.year.toString() === filters.year) &&
      (filters.company === "" || alumnus.company === filters.company) &&
      (filters.course === "" || alumnus.course === filters.course) &&
      alumnus.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  // get unique options
  const uniqueYears = [...new Set(alumniData.map((a) => a.year))];
  const uniqueCompanies = [...new Set(alumniData.map((a) => a.company))];
  const uniqueCourses = [...new Set(alumniData.map((a) => a.course))];

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
            {/* <li><Link to="/events">Events</Link></li> */}
            {/* <li><Link to="/forums">Forums</Link></li> */}
            <li><Link to="/chatbot">AI Chatbot (Find a Senior/Alumni)</Link></li>
            <li><Link to="/summarizer">AI Placement Summarizer</Link></li>
            <li><Link to="/matchmaking">AI Alumni Matchmaking</Link></li>
          </ul>
        </nav>
      </aside>

      {/* main content */}
      <main className="main-content">
        <header className="dashboard-header">
          <h1>Alumni Directory</h1>
          <div className="user-profile">
            <img src="https://via.placeholder.com/40" alt="profile" />
            <span>Welcome, Student</span>
          </div>
        </header>

        {/* search and filter bar */}
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

        {/* alumni cards */}
        <div className="grid">
          {filteredAlumni.map((alumnus) => (
            <div key={alumnus.id} className="card">
              {/* Add "circular" class for avatar style, remove for banner style */}
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
                <Link to={`/alumni/${alumnus.id}`} className="btn">
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
