import React from "react";
import { useNavigate } from "react-router-dom";
import AlumniNavbar from "../components/AlumniNavbar";

export default function Groups() {
  const navigate = useNavigate();

  const handleGroupClick = (groupId) => {
    navigate(`/groups/${groupId}`);
  };
  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen">
      <AlumniNavbar activeTab="groups" />
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Groups</h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Connect with fellow alumni who share your interests and passions.</p>
            </div>

            <div className="mb-8 md:mb-12 flex justify-between items-center gap-4">
              <div className="relative flex-grow">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">search</span>
                <input className="form-input w-full rounded-lg border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 pl-10 pr-4 py-2.5 focus:ring-primary focus:border-primary" placeholder="Search for groups" defaultValue="" />
              </div>
              <button className="flex-shrink-0 bg-primary text-white font-bold py-2.5 px-6 rounded-lg hover:opacity-90 transition-opacity">
                <span>Create Group</span>
              </button>
            </div>

            <div className="mb-8 md:mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Your Groups</h2>
              <div className="relative">
                <div className="flex overflow-x-auto gap-6 pb-4 -mx-4 px-4">
                  <div className="flex flex-col gap-3 w-60 flex-shrink-0 cursor-pointer group" onClick={() => handleGroupClick('tech-innovators')}>
                    <div className="w-full aspect-square bg-cover bg-center rounded-xl group-hover:scale-105 transition-transform duration-300" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDnn4H-_x00vyCiukV-JM3BE6h2rfzis7wlPpx79vGFcqN9GU5NSlXd1CUgcV0YzjksgmkiA1KiuyrKFZGZTMX6clAUrq-kuEQof0PeJrPyafS72LTn6u5XjvZ5vyh-dHEYvr-dUBpa9M0-hIdnqLqC40jdihzW6VP0iVtMfKGPcChIvhlKb1eOCVc4YvjYmWFwynUzbHVwZmnK9ilrS8PMKs--LxZ-Usfav9wXaen_eNWut4NLwxgX_w2RZmVQMyST3ZZOZtThD3-C")' }} />
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">Tech Innovators</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">A hub for tech-savvy alumni.</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 w-60 flex-shrink-0 cursor-pointer group" onClick={() => handleGroupClick('marketing-mavericks')}>
                    <div className="w-full aspect-square bg-cover bg-center rounded-xl group-hover:scale-105 transition-transform duration-300" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCr1PJy2VMHu82bMXDvFGkW0Vt75w6PssYNVhk3KVgUWM-AnR1_iaRVcvkBXIH-WJ9oFfrpS7fCudWexYtcCdMkzYcpS0ayuYT4YjVAubz3_poJgWfBSRYn372nO9D-PfYMiPvIjOZUJLGU1dzvfBws2V9McndQDee_FFx82Hg2qBnLCcW590QCI6up9kL9zJqWKlqCYi-fMJNjDpgV4b5i0c3MVZEb-m1syruwvNkfCD0tUpDdRpI9Vgjhf7I_hrZd1ewpmtFdcHS6")' }} />
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">Marketing Mavericks</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Where marketing minds meet.</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 w-60 flex-shrink-0 cursor-pointer group" onClick={() => handleGroupClick('finance-forum')}>
                    <div className="w-full aspect-square bg-cover bg-center rounded-xl group-hover:scale-105 transition-transform duration-300" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA6NTIONj0xpnq0GcN1Ri0RDo_YmgPX-4moOeWoNocUGXt8D3UtRNH5y2vAvdbKdMjSFY_zVWI2WpOhTFr0pwqpAh12E4iqMf_AbJDLwiY9ppOL8vSleDgX_ocVya5gJYGfkHbHyKLEFLDHnXvX_Pp1LQMtusPMrqUXtjvd0wVIINf9uZnsSTVsFetCMl_NwqzvFSw2vRqSQ-82lGr1CMiaBQozqhhD8LTwOVjmBljrHo6nuusfLpcM4GhA05iCFNFqwK3skHjJzCet")' }} />
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">Finance Forum</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Discussions on finance and investments.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Discover Groups</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="flex flex-col gap-3 group cursor-pointer" onClick={() => handleGroupClick('entrepreneurs-circle')}>
                <div className="w-full aspect-square bg-cover bg-center rounded-xl overflow-hidden">
                  <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDvlN8VWXdiUvmSX4v5hGIK3EB_vWAGWGbSvz92l7ThjlGmRRlroTe6Fk_iBiA-v3r1APrsd5pDph6PHvq-BK_x8QetotVSGu2tAlpBq5LHe2ULr0zV5MYrM6w8eUSzzjlYx-RrovTkP1FNswy0wG21fziMaelIEoIDicnxaL1RxNuNRIzrseJ-yln44fD6xl9XPSo31Se4ylRE10_IUMthKqAJHOnADjJ37VCk-Fw3T_8USaAmuF2upSKRO4Rjr11X2uSl7PYfXspJ")' }} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">Entrepreneurs' Circle</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">For alumni building the next big thing.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 group cursor-pointer" onClick={() => handleGroupClick('creative-minds')}>
                <div className="w-full aspect-square bg-cover bg-center rounded-xl overflow-hidden">
                  <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDYsiA1sJ8TwKDw747b73ERO51KMrXiah4b0qsrhZi9kS2nZljmLzJBOfGkXfAuq_N4ws2x-HkmBnZckWGh8gZyEx2Qcbkzt1nIRuAq_Il6PebfJd1RLnUPduzTD7ebXnK8AzkAO0GHNB7soAhZmRHzCCT00WciBmOt04sDH9_VrN0-GG3kt5BHCzmTpJpQXOjZU5QhYLBnbjecXOrDZEfy74Pvprf7btsIjqJXxqDVziNajBz7dko1fmYvD82RM4wC2t4ecuJ-SZXY")' }} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">Creative Minds</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">A space for creative expression.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 group cursor-pointer" onClick={() => handleGroupClick('global-citizens')}>
                <div className="w-full aspect-square bg-cover bg-center rounded-xl overflow-hidden">
                  <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCmxBwWX-0oNyIohChJFN0MDelmIQIKC5bQnT-NSNcMK8YGr6Sc-mIm7uW6m8U69WzA_GD--vy8ItAM0Q6Xb_QG8esDFhYm4xQ_TDvpPxcC2JdQ4uAys3J9FETsS1UIZMIK0sxXykpBBM_X0fp5sdEF-weKtTCYUZmQiwJoGqGciJfK0Urs5eV9uUC-nVZRpj9TMYKngtBAb2psw62eFevOUqOBD_3-eAtJrSPWH89CLA2L0_CLAFhGYmr5cbbzC0iQU3u40jiFmSQG")' }} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">Global Citizens</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Connecting alumni across borders.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 group cursor-pointer" onClick={() => handleGroupClick('health-wellness')}>
                <div className="w-full aspect-square bg-cover bg-center rounded-xl overflow-hidden">
                  <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBmHflcUS1XblVcfjUr87CToitR0d5wb24ysEo5RwYDdzmdvpaUOvzNelQu14fD7sJfBFfMmlB8zcZTFES1nEt7H1X7RD4ME63jHg1opMRSJNijlh6alrkifPwfEol10mxISuyszQzG7zQ1eCcWPYmg2fD62iyla3sjyCubNeUcjq94A8C0XvEh5TJqu47Ws1tfM6PqWnDV1P0s46aS1ekNOcKYGfeTLHPZDCEQEAfJzbbdeOJt4x3M7rmIZQf0px44Abaw1-G5yo2D")' }} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">Health & Wellness</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Promoting healthy lifestyles.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 group cursor-pointer" onClick={() => handleGroupClick('arts-culture')}>
                <div className="w-full aspect-square bg-cover bg-center rounded-xl overflow-hidden">
                  <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC2qOvKwtAw0gGY1xSgTPP8CPdq4tQZeHwf-Z9atpFgrIuleWhsF0pjeFPWSTAbloBy8wX7p_hoFTH8qikwWS89poMHWTnqX4dFmGeax9R8S9BtKXvEf9vlRX1uYv8Z0kp3n1MnuUS5kknnQwIZDlt9WTaDvv-83SPzPEr1FIOp0kdMdOXA3VX6uWQz3AF6vLLFZVDhqsjzlk9PnYWExcjOFV2Q6ZnU1eYbEHCs9RoGaT3JMMok0xr6Ikk7lsPHFLTkM4IkxpngDFPy")' }} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">Arts & Culture</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Celebrating art and culture.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 group cursor-pointer" onClick={() => handleGroupClick('sports-enthusiasts')}>
                <div className="w-full aspect-square bg-cover bg-center rounded-xl overflow-hidden">
                  <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuADFfgB1vcck7QcXTJ0RKdsEqugnXRK5Z2O_cR9s_WYUoR5J4BFHq1dZMLvHbeOPXqHvDIbvdHZs5X18zEJD_KnRVqH1_RHhfWgta3iNTs5yvfoGtianbuW8KCWD6LOr_GD4HivUli-iRt6RSZ4eEtPaBa5ShjWyp6Tx3DDvMJynStalSUKwDwxE6ZXUDXVdUWPFbKJgg7XsKX_oggLGBq2OkX22tkdN7QPa5UAIHadq4ir6vnBEtm7YxWdMlP6Myiy6v2U4P9PVzX8")' }} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">Sports Enthusiasts</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">For sports lovers and athletes.</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
