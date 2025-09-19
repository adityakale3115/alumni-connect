import React from "react";
import { Link } from "react-router-dom";
import AlumniNavbar from "../components/AlumniNavbar";

function AlumniHome() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200 min-h-screen flex flex-col">
      <AlumniNavbar activeTab="home" />

      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Home</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Recent Activity</h2>

                <div className="relative pl-8">
                  <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gray-200 dark:bg-gray-700" />

                  <div className="flex items-start gap-4 mb-6">
                    <div className="absolute left-4 -translate-x-1/2 mt-1.5 p-1.5 bg-background-light dark:bg-background-dark rounded-full">
                      <div className="p-1 bg-primary/20 rounded-full">
                        <span className="material-symbols-outlined text-primary text-xl">groups</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 dark:text-white">Sarah Johnson joined the 'Women in Tech' group</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">2 days ago</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-6">
                    <div className="absolute left-4 -translate-x-1/2 mt-1.5 p-1.5 bg-background-light dark:bg-background-dark rounded-full">
                      <div className="p-1 bg-primary/20 rounded-full">
                        <span className="material-symbols-outlined text-primary text-xl">campaign</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 dark:text-white">Michael Chen posted in the 'Career Advice' group</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">1 week ago</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="absolute left-4 -translate-x-1/2 mt-1.5 p-1.5 bg-background-light dark:bg-background-dark rounded-full">
                      <div className="p-1 bg-primary/20 rounded-full">
                        <span className="material-symbols-outlined text-primary text-xl">school</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 dark:text-white">TechConnect Alumni launched a new mentorship program</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">2 weeks ago</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Announcements</h2>

                <div className="bg-white/50 dark:bg-black/10 rounded-lg p-6 flex items-center gap-6">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-primary">Announcement</p>
                    <h3 className="text-lg font-bold my-1 text-gray-900 dark:text-white">Upcoming Alumni Networking Event</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Join us for an evening of networking and reconnecting with fellow alumni. Register now!
                    </p>
                  </div>
                  <div
                    className="w-48 h-32 bg-gray-200 dark:bg-gray-700 rounded-lg bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBcdLuxpkFtD1GN_g8XBMkkWkSkJVzKh2h-oaAVi_QMN56gmnXA03-MPd33IEWdOJ1YtXs3RJCCjhzWkWHFlRh7MCYprklFjenbNNwJKKHStXRhWv5aqlNfto444BCt0sfrI6CMVlpcELiF9DYtAIor2Dd8NDqjLwHeasPSkNhumFILU7NpwTrvKM5RmoT6Pxm7y2TwEphDHze0rgXckbLR0I-Uo-2elefiTutjfmyNhwDan84GP1-BlWSe-h4jcOlUs6j2UVTUqPf6")',
                    }}
                  />
                </div>
              </section>
            </div>

            <div className="lg:col-span-1">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Quick Links</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                  <Link className="flex items-center gap-4 p-4 bg-white/50 dark:bg-black/10 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors" to="/events">
                    <span className="material-symbols-outlined text-primary">event</span>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Upcoming Events</h3>
                  </Link>
                  <Link className="flex items-center gap-4 p-4 bg-white/50 dark:bg-black/10 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors" to="/directory">
                    <span className="material-symbols-outlined text-primary">group</span>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Alumni Directory</h3>
                  </Link>
                  <Link className="flex items-center gap-4 p-4 bg-white/50 dark:bg-black/10 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors" to="/summary">
                    <span className="material-symbols-outlined text-primary">work</span>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Career Resources</h3>
                  </Link>
                  <Link className="flex items-center gap-4 p-4 bg-white/50 dark:bg-black/10 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors" to="/alumni">
                    <span className="material-symbols-outlined text-primary">groups</span>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Groups</h3>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AlumniHome;
