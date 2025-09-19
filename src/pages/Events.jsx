import React from "react";
import AlumniNavbar from "../components/AlumniNavbar";

export default function Events() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light font-display text-gray-800 dark:bg-background-dark dark:text-gray-200">
      <AlumniNavbar activeTab="events" />

      <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Upcoming Events</h1>

          <div className="mt-8 space-y-12">
            <div className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-background-dark/50 md:flex-row md:gap-6">
              <div
                className="h-48 w-full rounded bg-cover bg-center md:h-auto md:w-1/3"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCLNrHFMjKbQ6_T5qbeeDgEkSV9zHFcY2KoNGuKqV6y4wfRM4zsRjBur3nYdK9Pv-sHs1oxYHLaEhuFG6rLQogTfCjSgytz5C19qmXWw2iu9i2JJ4X_v_uUANV4xCIl22V1fPSdt2A2IzqJRLzDR_MKHDyulAyPPFwfVxz6HqSsSPNFbBVFvlXdZevvl_E0lUJg_1TJXB8ELS203gWkNGwnSFFyKO1SlbK5TEutAXrfFtVgq1s2UX_qIJUoBjUNhaSgzTff0u1CX2-G")',
                }}
              />
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Alumni Achievement Awards</h3>
                  <p className="mt-1 text-sm font-medium text-primary">Saturday, October 12, 2024, 6:00 PM - 10:00 PM</p>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Join us for an evening of networking and celebration as we honor the achievements of our distinguished alumni. This event will feature keynote speakers, a cocktail reception, and opportunities to reconnect with classmates and faculty.
                  </p>
                </div>
                <div className="mt-4 flex justify-end">
                  <button className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center rounded bg-primary px-4 text-sm font-bold text-white transition-colors hover:bg-primary/90">
                    Register Now
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-background-dark/50 md:flex-row md:gap-6">
              <div
                className="h-48 w-full rounded bg-cover bg-center md:h-auto md:w-1/3"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBX-fW9MFySCNh_KPXdlzsw_aCNwgyBtXwPzsYrG33wGFoauRal_ck_Qtukeg7-bFT36JRSgEvwfezwFZGpU6TYoL11HFxPwAew442mTkDxSB4q60iGZDIBZr-IiRpNp56DjCRd67iKlfETzBqX-XNXa1nxD3seI3_cXjmOIeXXOp2LWbpmsbi2SCnIy2nPSj08KUZlsYVgwM5lET12P3DjBh7xSOOhTq35IlG4apiKLXV1Kj0MZ-lsxGl5JS0O2R2aQiOtadn7hAKM")',
                }}
              />
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Tech Industry Alumni Networking</h3>
                  <p className="mt-1 text-sm font-medium text-primary">Thursday, November 7, 2024, 7:00 PM - 9:00 PM</p>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Connect with fellow alumni in the tech industry at our annual networking event. This year's event will focus on emerging trends in artificial intelligence and machine learning, with panel discussions and interactive workshops.
                  </p>
                </div>
                <div className="mt-4 flex justify-end">
                  <button className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center rounded bg-primary px-4 text-sm font-bold text-white transition-colors hover:bg-primary/90">
                    Register Now
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-background-dark/50 md:flex-row md:gap-6">
              <div
                className="h-48 w-full rounded bg-cover bg-center md:h-auto md:w-1/3"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC8V0kYxWyLvE7VIDLzmHB0z6I25Mp-XD-C0gYdItRyuHosOl9rRQlu1ZV1PymBVCq391OjO9K1o61Nj7FT3RscQl3a41TiDU7lf1JJ8RcN7rWRMTyHWgwVMZTBthbDU1-G39PApG2pGq-p-ZRs9GMm9dQ-NbGfvjCma1CsJQsM9JlZpzQ6Iapn77wnQipJXSrfMhNBdbCFYjpezvMaiakPaXvQOkooYyx7cddIPzZ5d_7qRKcNwXRrRMVWMU1RnxsmfkauTnViy4c1")',
                }}
              />
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Alumni Holiday Party</h3>
                  <p className="mt-1 text-sm font-medium text-primary">Friday, December 13, 2024, 8:00 PM - 11:00 PM</p>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Celebrate the holiday season with your fellow alumni at our annual holiday party. Enjoy festive music, delicious food, and a chance to catch up with old friends.
                  </p>
                </div>
                <div className="mt-4 flex justify-end">
                  <button className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center rounded bg-primary px-4 text-sm font-bold text-white transition-colors hover:bg-primary/90">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
