import React from "react";
import { Link } from "react-router-dom";

export default function AlumniNavbar({ activeTab = "home" }) {
  const linkBase = "text-sm font-medium";
  const inactive = "text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary";
  const active = "text-primary";

  const navLinkClass = (key) => `${linkBase} ${activeTab === key ? active : inactive}`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-background-dark">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-primary">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" fill="currentColor"></path>
            </svg>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Alumni Network</h1>
          </div>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          <Link className={navLinkClass("home")} to="/alumni">Home</Link>
          <Link className={navLinkClass("events")} to="/events">Events</Link>
          <Link className={navLinkClass("directory")} to="/directory">Directory</Link>
          <Link className={navLinkClass("groups")} to="/groups">Groups</Link>
          <Link className={navLinkClass("jobs")} to="/jobs">Jobs</Link>
          <Link className={navLinkClass("chats")} to="/chats">Messages</Link>
          <Link className={navLinkClass("mentoring")} to="/mentors">Mentoring</Link>
        </nav>
        <div className="flex items-center gap-4">
          <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primary/10 hover:text-primary dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-primary/20">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div
            className="h-10 w-10 rounded-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBJlMAD9NS2fH1tRn7ekOJXn9W2ttBj6H3QG0H8CQyj6Vz6sr4aVEnqTPIFKbZfO1ypQ9z3AXJKdVmDHtlnStfrNJM1_rICzm9KpUXnq5aAhF4MsG24RhhWtIl95bd2cSmcq44rXfLEcCGh2kRHcHeN9sBac2ZxbqjymWa-FWNwtjsJdQIpEEj_aFNJwbc7MuvYiK1wTGxtne53mqAB4l_AILouz9ZS4t8x41ee5Ym7TLeoz4DH1BbTLr0QCSv_jkx4Dk9oOR51HnOf")',
            }}
          />
          <button className="md:hidden">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
