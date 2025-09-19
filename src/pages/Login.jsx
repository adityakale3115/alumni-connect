import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="p-8 bg-white shadow-lg rounded-2xl w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Alumni Platform</h1>
        <button
          onClick={() => navigate("/student")}
          className="w-full p-3 bg-blue-600 text-white rounded-lg mb-2 hover:bg-blue-700"
        >
          Login as Student
        </button>
        <button
          onClick={() => navigate("/alumni")}
          className="w-full p-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Login as Alumni
        </button>
      </div>
    </div>
  );
}
