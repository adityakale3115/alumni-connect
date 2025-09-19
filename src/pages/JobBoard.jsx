import React from "react";
import AlumniNavbar from "../components/AlumniNavbar";

export default function JobBoard() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-200 min-h-screen">
      <AlumniNavbar activeTab="jobs" />

      <main className="p-8">
        <div className="max-w-4xl mx-auto">
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Jobs</h1>
            <button className="bg-primary text-white font-bold py-2 px-6 rounded-lg hover:opacity-90 transition-opacity">
              Post a job
            </button>
          </header>

          <div className="mb-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-slate-500 dark:text-slate-400" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </div>
              <input 
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary" 
                placeholder="Search jobs" 
                type="search"
              />
            </div>
          </div>

          <div className="border-b border-slate-200 dark:border-slate-800 mb-6">
            <nav aria-label="Tabs" className="flex gap-8">
              <button type="button" className="pb-3 border-b-2 border-primary text-primary font-bold">
                For you
              </button>
              <button type="button" className="pb-3 border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium">
                All jobs
              </button>
            </nav>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Recommended for you</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow flex gap-6 items-center">
                <div 
                  className="w-32 h-32 bg-center bg-no-repeat bg-cover rounded-lg flex-shrink-0" 
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_hsKFsrIA6_AQGzmnrK0VgF7FM_DarVmAy7YgV2mIJgOkGUK6elkxiQswDETfbhLBbzvMYYYypgLjpH3ZaPLrzWmvXTP5NcfrXwESS5u2p3CB0wn_awnuSjeNKTRLFI5WU-fHkANYaTpR8jzJ40dgpNLF-IZRPj_fTAXLpUHDWSFKR8hk0BXRjqHOnUKPtcvAxYo-fMwD2x4WtKfxALH7Ccj6auA3JFzZ95a2BUepz5O6A5rbDu_RQvCfqYtXXz_n73keHCm08XLn")'
                  }}
                />
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Software Engineer</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">Tech Innovators Inc. - Remote</p>
                  <button className="bg-primary/10 text-primary font-bold py-2 px-5 rounded-lg hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
                    Apply
                  </button>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow flex gap-6 items-center">
                <div 
                  className="w-32 h-32 bg-center bg-no-repeat bg-cover rounded-lg flex-shrink-0" 
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBpA1_rUp8PQSxKYIFQMHy-gqcaZ59OaPW6qlj8N7nCIlDHWRKyt5BbwWIJjFb0EKlXheWjrbZCQZmZdigNXOpspyXKB4zzyUT2rtCUbxyWHe1-QPG_r8L6V4kWa6L__A-8JDoDQ9yMVOKltwWR2hJgNCF2TfEepNCXtT3Mt_P_RyQ0wfQ5eA2q-SUVx0uRJirHXzDjLT79Ymlt7TbNBbd-NPtZtQI_kAt-kAyjbyJgiQr74VCbVYVuSZEY499WPDvMoDekCHHgzZEc")'
                  }}
                />
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Data Analyst</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">Data Driven Solutions - New York, NY</p>
                  <button className="bg-primary/10 text-primary font-bold py-2 px-5 rounded-lg hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
                    Apply
                  </button>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow flex gap-6 items-center">
                <div 
                  className="w-32 h-32 bg-center bg-no-repeat bg-cover rounded-lg flex-shrink-0" 
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCn2dmZLCrk_DV9oRSd7G0v7rUluVwyI8HX5PhAkdBJxJ4gdksvfkE8vq98wf7YigluxbEDM5EDMqs_bjhg-fJaFuin8dwwq8Q6_jOXZwxkVaIYej1cu12tNN0TjFJXZKLaNu5aumQT3VzWcxQqKp11QsTH3517GGZPKlEiSfdy-AT-jT9zsyAVbfOAev3415ctO-57myoEj_GVL2m0O0RRjePMQ7aYQQT0vE227fN6z4QAGtE3adJT-covHawjAf53ktakgRdwCPWG")'
                  }}
                />
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Marketing Manager</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">Creative Marketing Agency - Los Angeles, CA</p>
                  <button className="bg-primary/10 text-primary font-bold py-2 px-5 rounded-lg hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Career Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-sm overflow-hidden group">
                <div 
                  className="h-40 bg-cover bg-center" 
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAB0XmVcK-hMbMeRLiJ0xlfxYusHVR3Ym4iKLcfUPHlcy_0OXiB74sCYQiVZ-dcMcYUrdHCC5WLT94H2KnVK_OFs3O1CHROV020Z_3_FsIX9BomCyKFjwn7OejTwovyDoOl8keD37vaG3ozmyzlCfHDjAlCEYg4BfGZatVwZiFR_c844-YOP1r0BS7LGmSuu5aRRJGhA6LbYKQNtkpQtsQHp28MlNWDLUfCPBTr-wXksMWSLb6BO0QZDdGQ6nUPbFpawR5-pOHvD3T-")'
                  }}
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Resume Review</h3>
                  <p className="text-slate-600 dark:text-slate-400 mt-2 mb-4">Get feedback on your resume from experienced professionals.</p>
                  <button className="w-full bg-primary/10 text-primary font-bold py-2 px-4 rounded-lg hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
                    Submit
                  </button>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-sm overflow-hidden group">
                <div 
                  className="h-40 bg-cover bg-center" 
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC1yDvJYi3BBEFtEiPbjxokbpVVvI2GlKZtdxW1ZTIW2swCGW8J0CzaYfLa_ozl6e5NHqYlg0N1qmiXjeQG1uXyoLZBrB1gx1Mndq5rq4AJW431DcpgPCiQXi5ACwbSgsOImuAEXWNJwsi07XpvMzbicHI8RChJdE2-Gn3FeDurKotoSbeP-1fKhGZ3idE2xSQy2iX8ROWe6sRyC_OWaEqyJa723xh8n4SEubRSxUPyTVz20hq6TgugU0oL9XiiXyr6EXCCEp6LnbJ6")'
                  }}
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Interview Prep</h3>
                  <p className="text-slate-600 dark:text-slate-400 mt-2 mb-4">Practice your interviewing skills with mock interviews.</p>
                  <button className="w-full bg-primary/10 text-primary font-bold py-2 px-4 rounded-lg hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
                    Schedule
                  </button>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-sm overflow-hidden group">
                <div 
                  className="h-40 bg-cover bg-center" 
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCAOfm1lYToBabZXG4Mj19dd947zr4beIXVl2NJQRdYF9BnsnNN4xDUYkkifJ2gRJNnRTaeRuoIDnvAM98NcMb9kNAKR4jtj2OWO-aYQjzfMA9dCLKccaRfB63Gf5Bovk5-dWW6mH9ktvkowR_PE5BIzrgRze3-3sux-Ko6Kv_QyQPAZ2SiXOjZR742_aFtPidGq1tP0WHIhpmT66BtZHg-S2nVA7XoGv4byVagfYFfa88qsJU0Qal_4CUvicJCHsgnbTRP0D6q_Uu7")'
                  }}
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Career Coaching</h3>
                  <p className="text-slate-600 dark:text-slate-400 mt-2 mb-4">Get personalized career advice from industry experts.</p>
                  <button className="w-full bg-primary/10 text-primary font-bold py-2 px-4 rounded-lg hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
                    Book a session
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
