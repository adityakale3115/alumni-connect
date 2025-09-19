import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AlumniNavbar from "../components/AlumniNavbar";

// Mock data for different groups
const groupData = {
  "tech-innovators": {
    id: "tech-innovators",
    name: "Tech Innovators",
    description: "A hub for tech-savvy alumni",
    members: 1247,
    posts: 89,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnn4H-_x00vyCiukV-JM3BE6h2rfzis7wlPpx79vGFcqN9GU5NSlXd1CUgcV0YzjksgmkiA1KiuyrKFZGZTMX6clAUrq-kuEQof0PeJrPyafS72LTn6u5XjvZ5vyh-dHEYvr-dUBpa9M0-hIdnqLqC40jdihzW6VP0iVtMfKGPcChIvhlKb1eOCVc4YvjYmWFwynUzbHVwZmnK9ilrS8PMKs--LxZ-Usfav9wXaen_eNWut4NLwxgX_w2RZmVQMyST3ZZOZtThD3-C"
  },
  "marketing-mavericks": {
    id: "marketing-mavericks", 
    name: "Marketing Mavericks",
    description: "Where marketing minds meet",
    members: 892,
    posts: 156,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCr1PJy2VMHu82bMXDvFGkW0Vt75w6PssYNVhk3KVgUWM-AnR1_iaRVcvkBXIH-WJ9oFfrpS7fCudWexYtcCdMkzYcpS0ayuYT4YjVAubz3_poJgWfBSRYn372nO9D-PfYMiPvIjOZUJLGU1dzvfBws2V9McndQDee_FFx82Hg2qBnLCcW590QCI6up9kL9zJqWKlqCYi-fMJNjDpgV4b5i0c3MVZEb-m1syruwvNkfCD0tUpDdRpI9Vgjhf7I_hrZd1ewpmtFdcHS6"
  },
  "finance-forum": {
    id: "finance-forum",
    name: "Finance Forum", 
    description: "Discussions on finance and investments",
    members: 634,
    posts: 203,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6NTIONj0xpnq0GcN1Ri0RDo_YmgPX-4moOeWoNocUGXt8D3UtRNH5y2vAvdbKdMjSFY_zVWI2WpOhTFr0pwqpAh12E4iqMf_AbJDLwiY9ppOL8vSleDgX_ocVya5gJYGfkHbHyKLEFLDHnXvX_Pp1LQMtusPMrqUXtjvd0wVIINf9uZnsSTVsFetCMl_NwqzvFSw2vRqSQ-82lGr1CMiaBQozqhhD8LTwOVjmBljrHo6nuusfLpcM4GhA05iCFNFqwK3skHjJzCet"
  }
};

// Mock posts data
const mockPosts = [
  {
    id: 1,
    author: "Sarah Chen",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0dG2YoqHLgMQvd9C-3NlyKD0WGYkqpN3PryWsaDMNaIaYim0m86VZy4P_YGXXnZhnoFdPBrcTgUOgJ8V_rWoTbjyAwAE6Brl2HmuomBe72cHPGvfNFondlO_xzGQ8oe6hsmAfsQHWTSwlAR6Yxf9WJggR5omDmOM-gDoyAs7ieNVQbgT-ph1zKUaE6LDI8DLQbLu0y_xjyzGSnFZBg_8psTY71lQyfgWB2k8HjXh4jp19Ojo0-A_2yIm60YRbvFdudDpVQEumoXys",
    time: "2 hours ago",
    content: "Just launched my new AI startup! Looking for feedback from fellow tech innovators. Would love to connect with anyone working in machine learning.",
    likes: 24,
    comments: 8
  },
  {
    id: 2,
    author: "Michael Rodriguez",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJlMAD9NS2fH1tRn7ekOJXn9W2ttBj6H3QG0H8CQyj6Vz6sr4aVEnqTPIFKbZfO1ypQ9z3AXJKdVmDHtlnStfrNJM1_rICzm9KpUXnq5aAhF4MsG24RhhWtIl95bd2cSmcq44rXfLEcCGh2kRHcHeN9sBac2ZxbqjymWa-FWNwtjsJdQIpEEj_aFNJwbc7MuvYiK1wTGxtne53mqAB4l_AILouz9ZS4t8x41ee5Ym7TLeoz4DH1BbTLr0QCSv_jkx4Dk9oOR51HnOf",
    time: "5 hours ago", 
    content: "Anyone else excited about the new React 19 features? The concurrent rendering improvements are game-changing for performance.",
    likes: 18,
    comments: 12
  },
  {
    id: 3,
    author: "Emily Watson",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCo2ESfKqp4uv-KW5cQ2n-Nl-ZsspAn06nonHzzzgOMEFkVDNmiHHBV1NgbymQViZ29BYOokgRULAyc6RCrH5SlorfkmjiWZEqJ5m1NX0zk-zMEwQs0SY9fkE4p79fPoNKa-UqJB68MtdoY3SE1j5nQ5_Cvy-o04_0IMBEwfSwIQX0ysyzcHpIRFm-WOKAUVblE81BhlARDMsTKifzycgNfZsNUJsFCyWzssAeDCudnFg5rZt6kMj9S6tf2JONxJUl7TIec23eVorgu",
    time: "1 day ago",
    content: "Sharing some insights from my recent conference talk on 'The Future of Web Development'. Key takeaway: accessibility should be built-in, not an afterthought.",
    likes: 31,
    comments: 15
  }
];

export default function GroupForum() {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const [newPost, setNewPost] = useState("");
  
  const group = groupData[groupId];
  
  if (!group) {
    return (
      <div className="bg-background-light dark:bg-background-dark font-display min-h-screen">
        <AlumniNavbar activeTab="groups" />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Group not found</h1>
            <button 
              onClick={() => navigate('/groups')}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:opacity-90"
            >
              Back to Groups
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      // In a real app, this would submit to a backend
      console.log("New post:", newPost);
      setNewPost("");
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen">
      <AlumniNavbar activeTab="groups" />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Group Header */}
            <div className="bg-white dark:bg-slate-800/50 rounded-xl p-6 mb-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div 
                  className="w-20 h-20 bg-cover bg-center rounded-xl flex-shrink-0"
                  style={{ backgroundImage: `url("${group.image}")` }}
                />
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-2">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{group.name}</h1>
                    <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90">
                      Join Group
                    </button>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">{group.description}</p>
                  <div className="flex gap-6 text-sm text-gray-500 dark:text-gray-400">
                    <span>{group.members} members</span>
                    <span>{group.posts} posts</span>
                  </div>
                </div>
                <button 
                  onClick={() => navigate('/groups')}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
            </div>

            {/* Create Post */}
            <div className="bg-white dark:bg-slate-800/50 rounded-xl p-6 mb-6 shadow-sm">
              <form onSubmit={handlePostSubmit}>
                <textarea
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  placeholder="Share something with the group..."
                  className="w-full p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-background-light dark:bg-background-dark text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 resize-none focus:ring-primary focus:border-primary"
                  rows="3"
                />
                <div className="flex justify-end mt-4">
                  <button
                    type="submit"
                    disabled={!newPost.trim()}
                    className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Post
                  </button>
                </div>
              </form>
            </div>

            {/* Posts Feed */}
            <div className="space-y-6">
              {mockPosts.map((post) => (
                <div key={post.id} className="bg-white dark:bg-slate-800/50 rounded-xl p-6 shadow-sm">
                  <div className="flex gap-4">
                    <div 
                      className="w-12 h-12 bg-cover bg-center rounded-full flex-shrink-0"
                      style={{ backgroundImage: `url("${post.avatar}")` }}
                    />
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white">{post.author}</h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{post.time}</span>
                      </div>
                      <p className="text-gray-800 dark:text-gray-200 mb-4">{post.content}</p>
                      <div className="flex items-center gap-6">
                        <button className="flex items-center gap-2 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                          <span className="material-symbols-outlined text-lg">thumb_up</span>
                          <span className="text-sm">{post.likes}</span>
                        </button>
                        <button className="flex items-center gap-2 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                          <span className="material-symbols-outlined text-lg">comment</span>
                          <span className="text-sm">{post.comments}</span>
                        </button>
                        <button className="flex items-center gap-2 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                          <span className="material-symbols-outlined text-lg">share</span>
                          <span className="text-sm">Share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
