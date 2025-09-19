import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import alumniData from "../data/alumni.json"; // adjust path as needed
import Card from "../components/Card";

export default function StudentDashboard() {
  const [alumniList, setAlumniList] = useState([]);

  useEffect(() => {
    setAlumniList(alumniData);
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">🎓 Alumni Directory</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {alumniList.map((alumnus) => (
          <Card key={alumnus.id}>
            <div className="mb-4">
              <h2 className="text-xl font-semibold">{alumnus.name}</h2>
              <p className="text-gray-600">{alumnus.course}</p>
              <p className="text-gray-500 text-sm">Batch of {alumnus.year}</p>
            </div>
            <Link
              to={`/alumni/${alumnus.id}`}
              className="mt-auto bg-blue-600 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-700 transition duration-300"
            >
              View Profile
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
