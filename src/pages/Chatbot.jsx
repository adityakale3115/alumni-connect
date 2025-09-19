import { useState } from "react";
import { Link } from "react-router-dom";
import "./chatbot.css";

export default function ChatBotWithSidebar() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I am your AI chatbot. Ask me anything about alumni or seniors you can contact." }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // add user message
    setMessages([...messages, { sender: "user", text: input }]);

    // simple demo response (replace with AI backend)
    let response = "Based on your details, you should contact seniors from your branch with high CGPA and relevant internships.";

    // add bot response
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: response }]);
    }, 500);

    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="dashboard-layout">
      {/* sidebar */}
      <aside className="sidebar">
        <h2 className="logo">🎓 Student Portal</h2>
        <nav>
          <ul>
            <li><Link to="/student">Dashboard</Link></li>
            <li><Link to="/alumni">Alumni Directory</Link></li>
            <li><Link to="/know-seniors">Know Your Seniors</Link></li>
            <li><Link to="/mentorship">Mentorship</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/forums">Forums</Link></li>
            <li><Link to="/chatbot">AI Chatbot</Link></li>
          </ul>
        </nav>
      </aside>

      {/* main content */}
      <main className="main-content">
        <h2>AI Chatbot</h2>
        <div className="chat-window">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chat-message ${msg.sender === "user" ? "user" : "bot"}`}
            >
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
