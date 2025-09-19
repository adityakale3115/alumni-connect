const mockResources = [
  { company: "Google", tips: "Focus on DSA & System Design." },
  { company: "Microsoft", tips: "Revise OOPS and DBMS concepts." },
  { company: "Amazon", tips: "Practice leadership principles." },
];

export default function PlacementResources() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">📂 Placement Resources</h1>
      <div className="space-y-4">
        {mockResources.map((res, index) => (
          <div key={index} className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
            <h2 className="text-xl font-semibold">{res.company}</h2>
            <p className="text-gray-600">{res.tips}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
