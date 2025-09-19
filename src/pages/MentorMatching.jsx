import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./a.css"

const mockMentors = [
  { name: "Anjali Verma", match: 95, photo: "/images/pooja.png" },
  { name: "Karan Singh", match: 88, photo: "/images/image.png" },
  { name: "Meena Reddy", match: 82, photo: "/images/pooja.png" },
];

const mockMentees = [
  {
    id: 1,
    name: "Sarah Chen",
    photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0dG2YoqHLgMQvd9C-3NlyKD0WGYkqpN3PryWsaDMNaIaYim0m86VZy4P_YGXXnZhnoFdPBrcTgUOgJ8V_rWoTbjyAwAE6Brl2HmuomBe72cHPGvfNFondlO_xzGQ8oe6hsmAfsQHWTSwlAR6Yxf9WJggR5omDmOM-gDoyAs7ieNVQbgT-ph1zKUaE6LDI8DLQbLu0y_xjyzGSnFZBg_8psTY71lQyfgWB2k8HjXh4jp19Ojo0-A_2yIm60YRbvFdudDpVQEumoXys",
    field: "Software Engineering",
    year: "2024",
    lastMeeting: "2 days ago",
    nextMeeting: "Tomorrow, 2:00 PM",
    status: "active"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJlMAD9NS2fH1tRn7ekOJXn9W2ttBj6H3QG0H8CQyj6Vz6sr4aVEnqTPIFKbZfO1ypQ9z3AXJKdVmDHtlnStfrNJM1_rICzm9KpUXnq5aAhF4MsG24RhhWtIl95bd2cSmcq44rXfLEcCGh2kRHcHeN9sBac2ZxbqjymWa-FWNwtjsJdQIpEEj_aFNJwbc7MuvYiK1wTGxtne53mqAB4l_AILouz9ZS4t8x41ee5Ym7TLeoz4DH1BbTLr0QCSv_jkx4Dk9oOR51HnOf",
    field: "Data Science",
    year: "2023",
    lastMeeting: "1 week ago",
    nextMeeting: "Next Monday, 10:00 AM",
    status: "active"
  },
  {
    id: 3,
    name: "Emily Watson",
    photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCo2ESfKqp4uv-KW5cQ2n-Nl-ZsspAn06nonHzzzgOMEFkVDNmiHHBV1NgbymQViZ29BYOokgRULAyc6RCrH5SlorfkmjiWZEqJ5m1NX0zk-zMEwQs0SY9fkE4p79fPoNKa-UqJB68MtdoY3SE1j5nQ5_Cvy-o04_0IMBEwfSwIQX0ysyzcHpIRFm-WOKAUVblE81BhlARDMsTKifzycgNfZsNUJsFCyWzssAeDCudnFg5rZt6kMj9S6tf2JONxJUl7TIec23eVorgu",
    field: "Product Management",
    year: "2024",
    lastMeeting: "3 days ago",
    nextMeeting: "Not scheduled",
    status: "pending"
  },
  {
    id: 4,
    name: "David Kim",
    photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpA1_rUp8PQSxKYIFQMHy-gqcaZ59OaPW6qlj8N7nCIlDHWRKyt5BbwWIJjFb0EKlXheWjrbZCQZmZdigNXOpspyXKB4zzyUT2rtCUbxyWHe1-QPG_r8L6V4kWa6L__A-8JDoDQ9yMVOKltwWR2hJgNCF2TfEepNCXtT3Mt_P_RyQ0wfQ5eA2q-SUVx0uRJirHXzDjLT79Ymlt7TbNBbd-NPtZtQI_kAt-kAyjbyJgiQr74VCbVYVuSZEY499WPDvMoDekCHHgzZEc",
    field: "Marketing",
    year: "2023",
    lastMeeting: "2 weeks ago",
    nextMeeting: "This Friday, 3:00 PM",
    status: "active"
  }
];

export default function MentorMatching() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [requested, setRequested] = useState({});
  const [activeTab, setActiveTab] = useState("mentors");
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [selectedMentee, setSelectedMentee] = useState(null);
  const [meetingType, setMeetingType] = useState("1on1");
  const [meetingDate, setMeetingDate] = useState("");
  const [meetingTime, setMeetingTime] = useState("");
  const location = useLocation();

  const handleRequest = (name) => {
    setRequested((prev) => ({ ...prev, [name]: true }));
  };

  const handleScheduleMeeting = (mentee, type) => {
    setSelectedMentee(mentee);
    setMeetingType(type);
    setShowScheduleModal(true);
  };

  const handleScheduleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the meeting request to a backend
    console.log("Scheduling meeting:", {
      mentee: selectedMentee.name,
      type: meetingType,
      date: meetingDate,
      time: meetingTime
    });
    setShowScheduleModal(false);
    setSelectedMentee(null);
    setMeetingDate("");
    setMeetingTime("");
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
        <h1 className="page-title">🤝 Mentoring Dashboard</h1>
        
        {/* Tab Navigation */}
        <div className="tab-navigation">
          <button 
            className={`tab-button ${activeTab === "mentors" ? "active" : ""}`}
            onClick={() => setActiveTab("mentors")}
          >
            Find Mentors
          </button>
          <button 
            className={`tab-button ${activeTab === "mentees" ? "active" : ""}`}
            onClick={() => setActiveTab("mentees")}
          >
            My Mentees ({mockMentees.length})
          </button>
        </div>

        {/* Mentors Tab */}
        {activeTab === "mentors" && (
          <div className="tab-content">
            <h2 className="section-title">Available Mentors</h2>
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
          </div>
        )}

        {/* Mentees Tab */}
        {activeTab === "mentees" && (
          <div className="tab-content">
            <h2 className="section-title">Your Mentees</h2>
            <div className="mentees-grid">
              {mockMentees.map((mentee) => (
                <div key={mentee.id} className="mentee-card">
                  <div className="mentee-header">
                    <img
                      src={mentee.photo}
                      alt={mentee.name}
                      className="mentee-photo"
                    />
                    <div className="mentee-info">
                      <h3 className="mentee-name">{mentee.name}</h3>
                      <p className="mentee-field">{mentee.field} • Class of {mentee.year}</p>
                      <div className={`status-badge ${mentee.status}`}>
                        {mentee.status === "active" ? "🟢 Active" : "🟡 Pending"}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mentee-details">
                    <div className="meeting-info">
                      <p><strong>Last Meeting:</strong> {mentee.lastMeeting}</p>
                      <p><strong>Next Meeting:</strong> {mentee.nextMeeting}</p>
                    </div>
                    
                    <div className="mentee-actions">
                      <button 
                        className="btn-schedule btn-primary"
                        onClick={() => handleScheduleMeeting(mentee, "1on1")}
                      >
                        📅 Schedule 1:1
                      </button>
                      <button 
                        className="btn-schedule btn-secondary"
                        onClick={() => handleScheduleMeeting(mentee, "group")}
                      >
                        👥 Group Session
                      </button>
                      <button className="btn-schedule btn-outline">
                        💬 Message
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Schedule Meeting Modal */}
      {showScheduleModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Schedule {meetingType === "1on1" ? "1:1 Meeting" : "Group Session"}</h3>
              <button 
                className="modal-close"
                onClick={() => setShowScheduleModal(false)}
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleScheduleSubmit} className="schedule-form">
              <div className="form-group">
                <label>Mentee:</label>
                <p className="selected-mentee">{selectedMentee?.name}</p>
              </div>
              
              <div className="form-group">
                <label>Meeting Type:</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      value="1on1"
                      checked={meetingType === "1on1"}
                      onChange={(e) => setMeetingType(e.target.value)}
                    />
                    <span>1:1 Meeting (30-60 min)</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      value="group"
                      checked={meetingType === "group"}
                      onChange={(e) => setMeetingType(e.target.value)}
                    />
                    <span>Group Session (60-90 min)</span>
                  </label>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="meetingDate">Date:</label>
                <input
                  type="date"
                  id="meetingDate"
                  value={meetingDate}
                  onChange={(e) => setMeetingDate(e.target.value)}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="meetingTime">Time:</label>
                <input
                  type="time"
                  id="meetingTime"
                  value={meetingTime}
                  onChange={(e) => setMeetingTime(e.target.value)}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-actions">
                <button 
                  type="button" 
                  className="btn-cancel"
                  onClick={() => setShowScheduleModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-submit">
                  Schedule Meeting
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
