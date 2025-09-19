// src/pages/ChatBot.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import "./chatbot.css";

export default function ChatBot() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I am your AI chatbot. Ask me anything about alumni or seniors you can contact.",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { sender: "user", text: input }]);

    const response =
      "Based on your details, you should contact seniors from your branch with high CGPA and relevant internships.";

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: response }]);
    }, 500);

    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="dashboard enhanced">
      {/* Topbar */}
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand">
            <Link to="/" className="brand-link">
              🎓 Student Portal
            </Link>
          </div>

          <nav className="nav">
            <Link to="/student">Dashboard</Link>
                        <Link to="/chatbot">AI Chatbot</Link>
                        <Link to="/summary">AI Placement</Link>
                        <Link to="/mentors">Alumni Match</Link>
          </nav>
        </div>
      </header>

      {/* Chat Section */}
      <main className="container">
        <h2>AI Chatbot</h2>

        <div className="chat-window">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>

        <div className="chat-input">
          <input
            type="text"
            placeholder="E.g., I have CGPA 8.5 and 12th 88%, whom should I contact?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </main>
    </div>
  );
}
