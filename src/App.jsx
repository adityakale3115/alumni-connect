import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import StudentDashboard from "./pages/StudentDashboard";
import AlumniDashboard from "./pages/AlumniDashboard";
import AlumniDirectory from "./pages/AlumniDirectory";
import MentorMatching from "./pages/MentorMatching";
import PlacementResources from "./pages/PlacementResources";
import Events from "./pages/Events";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/alumni" element={<AlumniDashboard />} />
        <Route path="/directory" element={<AlumniDirectory />} />
        <Route path="/mentors" element={<MentorMatching />} />
        <Route path="/resources" element={<PlacementResources />} />
        <Route path="/events" element={<Events />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
