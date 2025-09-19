const mockMentors = [
  { name: "Anjali Verma", match: 95 },
  { name: "Karan Singh", match: 88 },
  { name: "Meena Reddy", match: 82 },
];

export default function MentorMatching() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">🤝 Mentor Matching</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockMentors.map((mentor, index) => (
          <div key={index} className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
            <h2 className="text-xl font-semibold">{mentor.name}</h2>
            <p>Match Score: {mentor.match}%</p>
            <button className="mt-3 p-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Request Session
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
