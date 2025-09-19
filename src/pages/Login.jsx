import { useNavigate } from "react-router-dom";
import { GraduationCap, User } from "lucide-react";
import "./login.css";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="webapp-bg flex h-screen items-center justify-center">
      <div className="webapp-card">
        <h1 className="title">🎓 Alumni Platform</h1>
        <p className="subtitle">
          connect, grow, and stay updated with your community
        </p>

        <button
          onClick={() => navigate("/student")}
          className="login-btn student-btn"
        >
          <User size={18} /> Login as Student
        </button>

        <button
          onClick={() => navigate("/alumni")}
          className="login-btn alumni-btn"
        >
          <GraduationCap size={18} /> Login as Alumni
        </button>
      </div>
    </div>
  );
}
