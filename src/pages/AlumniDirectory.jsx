const mockAlumni = [
  { name: "Rahul Sharma", company: "Google", skills: "AI, ML" },
  { name: "Priya Patel", company: "Microsoft", skills: "Cloud, Security" },
  { name: "Amit Kumar", company: "Amazon", skills: "Backend, DevOps" },
];

export default function AlumniDirectory() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">📒 Alumni Directory</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockAlumni.map((alumni, index) => (
          <div key={index} className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
            <h2 className="text-xl font-semibold">{alumni.name}</h2>
            <p>{alumni.company}</p>
            <p className="text-sm text-gray-500">{alumni.skills}</p>
            <button className="mt-3 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Request Mentor
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
