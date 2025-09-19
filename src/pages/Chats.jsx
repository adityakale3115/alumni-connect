import React, { useState } from "react";
import AlumniNavbar from "../components/AlumniNavbar";

// Mock data for chats
const mockChats = [
  {
    id: 1,
    name: "Sarah Chen",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0dG2YoqHLgMQvd9C-3NlyKD0WGYkqpN3PryWsaDMNaIaYim0m86VZy4P_YGXXnZhnoFdPBrcTgUOgJ8V_rWoTbjyAwAE6Brl2HmuomBe72cHPGvfNFondlO_xzGQ8oe6hsmAfsQHWTSwlAR6Yxf9WJggR5omDmOM-gDoyAs7ieNVQbgT-ph1zKUaE6LDI8DLQbLu0y_xjyzGSnFZBg_8psTY71lQyfgWB2k8HjXh4jp19Ojo0-A_2yIm60YRbvFdudDpVQEumoXys",
    lastMessage: "Thanks for the career advice!",
    time: "2 min ago",
    unread: 2,
    online: true
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJlMAD9NS2fH1tRn7ekOJXn9W2ttBj6H3QG0H8CQyj6Vz6sr4aVEnqTPIFKbZfO1ypQ9z3AXJKdVmDHtlnStfrNJM1_rICzm9KpUXnq5aAhF4MsG24RhhWtIl95bd2cSmcq44rXfLEcCGh2kRHcHeN9sBac2ZxbqjymWa-FWNwtjsJdQIpEEj_aFNJwbc7MuvYiK1wTGxtne53mqAB4l_AILouz9ZS4t8x41ee5Ym7TLeoz4DH1BbTLr0QCSv_jkx4Dk9oOR51HnOf",
    lastMessage: "Let's connect on LinkedIn",
    time: "1 hour ago",
    unread: 0,
    online: false
  },
  {
    id: 3,
    name: "Emily Watson",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCo2ESfKqp4uv-KW5cQ2n-Nl-ZsspAn06nonHzzzgOMEFkVDNmiHHBV1NgbymQViZ29BYOokgRULAyc6RCrH5SlorfkmjiWZEqJ5m1NX0zk-zMEwQs0SY9fkE4p79fPoNKa-UqJB68MtdoY3SE1j5nQ5_Cvy-o04_0IMBEwfSwIQX0ysyzcHpIRFm-WOKAUVblE81BhlARDMsTKifzycgNfZsNUJsFCyWzssAeDCudnFg5rZt6kMj9S6tf2JONxJUl7TIec23eVorgu",
    lastMessage: "The networking event was great!",
    time: "3 hours ago",
    unread: 1,
    online: true
  },
  {
    id: 4,
    name: "David Kim",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpA1_rUp8PQSxKYIFQMHy-gqcaZ59OaPW6qlj8N7nCIlDHWRKyt5BbwWIJjFb0EKlXheWjrbZCQZmZdigNXOpspyXKB4zzyUT2rtCUbxyWHe1-QPG_r8L6V4kWa6L__A-8JDoDQ9yMVOKltwWR2hJgNCF2TfEepNCXtT3Mt_P_RyQ0wfQ5eA2q-SUVx0uRJirHXzDjLT79Ymlt7TbNBbd-NPtZtQI_kAt-kAyjbyJgiQr74VCbVYVuSZEY499WPDvMoDekCHHgzZEc",
    lastMessage: "Can you review my resume?",
    time: "1 day ago",
    unread: 0,
    online: false
  },
  {
    id: 5,
    name: "Tech Innovators Group",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnn4H-_x00vyCiukV-JM3BE6h2rfzis7wlPpx79vGFcqN9GU5NSlXd1CUgcV0YzjksgmkiA1KiuyrKFZGZTMX6clAUrq-kuEQof0PeJrPyafS72LTn6u5XjvZ5vyh-dHEYvr-dUBpa9M0-hIdnqLqC40jdihzW6VP0iVtMfKGPcChIvhlKb1eOCVc4YvjYmWFwynUzbHVwZmnK9ilrS8PMKs--LxZ-Usfav9wXaen_eNWut4NLwxgX_w2RZmVQMyST3ZZOZtThD3-C",
    lastMessage: "Sarah: New job posting in the group",
    time: "2 days ago",
    unread: 5,
    online: false
  }
];

// Mock messages for selected chat
const mockMessages = [
  {
    id: 1,
    sender: "Sarah Chen",
    message: "Hi! Thanks for the career advice you shared in the group.",
    time: "2:30 PM",
    isOwn: false
  },
  {
    id: 2,
    sender: "You",
    message: "You're welcome! I'm glad it was helpful. How's your job search going?",
    time: "2:32 PM",
    isOwn: true
  },
  {
    id: 3,
    sender: "Sarah Chen",
    message: "It's going well! I have a few interviews lined up next week. Any tips for technical interviews?",
    time: "2:35 PM",
    isOwn: false
  },
  {
    id: 4,
    sender: "You",
    message: "Great! For technical interviews, I'd recommend practicing coding problems on LeetCode and being ready to explain your thought process out loud.",
    time: "2:38 PM",
    isOwn: true
  },
  {
    id: 5,
    sender: "Sarah Chen",
    message: "Thanks for the advice! I'll definitely check out LeetCode. Do you have any specific problem types I should focus on?",
    time: "2:40 PM",
    isOwn: false
  }
];

export default function Chats() {
  const [selectedChat, setSelectedChat] = useState(1);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      // In a real app, this would send the message to a backend
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  const selectedChatData = mockChats.find(chat => chat.id === selectedChat);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen">
      <AlumniNavbar activeTab="chats" />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Messages</h1>
            
            <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-sm overflow-hidden">
              <div className="flex h-[600px]">
                {/* Chat List */}
                <div className="w-1/3 border-r border-gray-200 dark:border-gray-700">
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">search</span>
                      <input 
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-background-light dark:bg-background-dark text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-primary focus:border-primary" 
                        placeholder="Search conversations..."
                      />
                    </div>
                  </div>
                  
                  <div className="overflow-y-auto h-full">
                    {mockChats.map((chat) => (
                      <div
                        key={chat.id}
                        onClick={() => setSelectedChat(chat.id)}
                        className={`p-4 border-b border-gray-100 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors ${
                          selectedChat === chat.id ? 'bg-primary/10 dark:bg-primary/20' : ''
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <div 
                              className="w-12 h-12 bg-cover bg-center rounded-full"
                              style={{ backgroundImage: `url("${chat.avatar}")` }}
                            />
                            {chat.online && (
                              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-slate-800 rounded-full"></div>
                            )}
                          </div>
                          <div className="flex-grow min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <h3 className="font-semibold text-gray-900 dark:text-white truncate">{chat.name}</h3>
                              <span className="text-xs text-gray-500 dark:text-gray-400">{chat.time}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{chat.lastMessage}</p>
                              {chat.unread > 0 && (
                                <span className="bg-primary text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                                  {chat.unread}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 flex flex-col">
                  {selectedChatData ? (
                    <>
                      {/* Chat Header */}
                      <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-700/50">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <div 
                              className="w-10 h-10 bg-cover bg-center rounded-full"
                              style={{ backgroundImage: `url("${selectedChatData.avatar}")` }}
                            />
                            {selectedChatData.online && (
                              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white dark:border-slate-700 rounded-full"></div>
                            )}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">{selectedChatData.name}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {selectedChatData.online ? 'Online' : 'Last seen recently'}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Messages */}
                      <div className="flex-1 p-4 overflow-y-auto space-y-4">
                        {mockMessages.map((message) => (
                          <div
                            key={message.id}
                            className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                          >
                            <div
                              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                                message.isOwn
                                  ? 'bg-primary text-white'
                                  : 'bg-gray-200 dark:bg-slate-600 text-gray-900 dark:text-white'
                              }`}
                            >
                              <p className="text-sm">{message.message}</p>
                              <p className={`text-xs mt-1 ${
                                message.isOwn ? 'text-primary-100' : 'text-gray-500 dark:text-gray-400'
                              }`}>
                                {message.time}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Message Input */}
                      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                        <form onSubmit={handleSendMessage} className="flex gap-3">
                          <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-background-light dark:bg-background-dark text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-primary focus:border-primary"
                          />
                          <button
                            type="submit"
                            disabled={!newMessage.trim()}
                            className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                          >
                            Send
                          </button>
                        </form>
                      </div>
                    </>
                  ) : (
                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-center">
                        <span className="material-symbols-outlined text-6xl text-gray-400 dark:text-gray-500 mb-4">chat</span>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Select a conversation</h3>
                        <p className="text-gray-500 dark:text-gray-400">Choose a chat to start messaging</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
