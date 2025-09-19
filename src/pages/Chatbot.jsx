// src/pages/ChatBot.jsx
import { useState } from "react";
import "./chatbot.css";

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I am your AI chatbot. Ask me anything about alumni or seniors you can contact." }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // add user message
    setMessages([...messages, { sender: "user", text: input }]);

    // simple demo response
    const response = "Based on your details, you should contact seniors from your branch with high CGPA and relevant internships.";

    setTimeout(() => {
      setMessages(prev => [...prev, { sender: "bot", text: response }]);
    }, 500);

    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <h2 className="logo">🎓 Student Portal</h2>
        <nav>
          <ul>
            <li><a href="/student">Dashboard</a></li>
            <li><a href="/directory">Alumni Directory</a></li>
            <li><a href="/mentors">Mentorship</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/chatbot">AI Chatbot</a></li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
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
