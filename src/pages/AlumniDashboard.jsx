import { Link } from "react-router-dom";

export default function AlumniDashboard() {
  const cards = [
    { title: "Mentorship Requests", icon: "🤝", path: "/mentors" }, // or a separate mentorship requests page
    { title: "Fundraising & Contributions", icon: "💰", path: "/fundraising" }, // create this page if needed
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">👨‍🎓 Alumni Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card) => (
          <Link
            key={card.title}
            to={card.path}
            className="p-6 bg-white rounded-xl shadow transform transition duration-300 hover:scale-105 hover:shadow-lg flex items-center space-x-3"
          >
            <span className="text-2xl">{card.icon}</span>
            <span className="font-semibold">{card.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
