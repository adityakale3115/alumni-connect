// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import StudentDashboard from "./pages/StudentDashboard";
import AlumniDashboard from "./pages/AlumniDashboard";
import AlumniDirectory from "./pages/AlumniDirectory";
import MentorMatching from "./pages/MentorMatching";
import PlacementSummary from "./pages/PlacementSummary"; // note: PlacementResources.jsx
import Events from "./pages/Events";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import ChatBot from "./pages/Chatbot"; // note: ChatBot.jsx
import AlumniHome from "./pages/AlumniHome";
import JobBoard from "./pages/JobBoard";
import Groups from "./pages/Groups";
import GroupForum from "./pages/GroupForum";
import Chats from "./pages/Chats";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/alumni" element={<AlumniHome />} />
        <Route path="/alumni/home" element={<AlumniHome />} />
        <Route path="/alumni/dashboard" element={<AlumniDashboard />} />
        <Route path="/directory" element={<AlumniDirectory />} />
        <Route path="/mentors" element={<MentorMatching />} />
        <Route path="/summary" element={<PlacementSummary />} />
        <Route path="/events" element={<Events />} />
        <Route path="/jobs" element={<JobBoard />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/groups/:groupId" element={<GroupForum />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
