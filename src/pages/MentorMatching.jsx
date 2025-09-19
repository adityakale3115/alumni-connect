const mockMentors = [
  { name: "Anjali Verma", match: 95, photo: "https://via.placeholder.com/80" },
  { name: "Karan Singh", match: 88, photo: "https://via.placeholder.com/80" },
  { name: "Meena Reddy", match: 82, photo: "https://via.placeholder.com/80" },
];

export default function MentorMatching() {
  return (
    <div className="dashboard-layout">
      {/* sidebar */}
      <aside className="sidebar">
        <h2 className="logo">🎓 Student Portal</h2>
        <nav>
          <ul>
            <li><a href="/student">Dashboard</a></li>
            <li><a href="/know-seniors">Know Your Seniors</a></li>
            <li><a href="/mentorship">Mentorship</a></li>
            <li><a href="/chatbot">AI Chatbot</a></li>
          </ul>
        </nav>
      </aside>

      {/* main content */}
      <main className="main-content">
        <h1 className="text-3xl font-bold mb-6">🤝 Mentor Matching</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockMentors.map((mentor, index) => (
            <div
              key={index}
              className="mentor-card"
            >
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
              <button className="btn-request">Request Session</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
