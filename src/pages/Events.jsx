const mockEvents = [
  { title: "Alumni Meet 2025", date: "Oct 5, 2025" },
  { title: "Tech Talk: AI in 2030", date: "Nov 12, 2025" },
  { title: "Placement Bootcamp", date: "Dec 20, 2025" },
];

export default function Events() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">📅 Events</h1>
      <div className="space-y-4">
        {mockEvents.map((event, index) => (
          <div key={index} className="p-6 bg-white rounded-xl shadow hover:shadow-lg flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">{event.title}</h2>
              <p className="text-gray-600">{event.date}</p>
            </div>
            <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Register
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
