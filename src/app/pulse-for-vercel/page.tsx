import ButtonAppStore from "@/components/pulse-for-vercel/button-app-store";
import Hero from "@/components/pulse-for-vercel/hero";
import Desktop from "@/components/pulse-for-vercel/desktop/desktop";
import Header from "@/components/pulse-for-vercel/header";

export default function PulseForVercel() {
  return (
    <>
      <div className="flex flex-1 justify-center px-8 pt-32 pb-16 sm:pb-28 xl:px-36">
        <section className="flex w-full max-w-[1280px] flex-col items-center">
          <Header></Header>
          <Hero></Hero>
          <section className="flex w-full flex-col items-center">
            <Desktop></Desktop>
          </section>
          <div className="mt-28 w-full delay-[1100ms]">
            <div className="mx-auto grid w-full gap-x-3 gap-y-10 tracking-tight sm:max-w-screen-lg sm:grid-cols-4 sm:gap-y-14">
              <div className="group flex flex-col items-center justify-center text-center">
                <svg
                  className="mb-5 h-[4.5rem] w-[4.5rem] stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="m21 16-4 4-4-4"
                    className="origin-center transition duration-300 group-hover:translate-y-0.5"
                  />
                  <path
                    d="M17 20V4"
                    className="origin-center transition duration-300 group-hover:translate-y-0.5"
                  />
                  <path
                    d="m3 8 4-4 4 4"
                    className="origin-center transition duration-300 group-hover:-translate-y-0.5"
                  />
                  <path
                    d="M7 4v16"
                    className="origin-center transition duration-300 group-hover:-translate-y-0.5"
                  />
                </svg>
                <h2 className="text-3xl font-bold">
                  Real-time <br />
                  updates
                </h2>
              </div>
              <div className="group flex flex-col items-center justify-center text-center">
                <svg
                  className="mb-5 h-[4.5rem] w-[4.5rem] fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="origin-[50%_40%] scale-[0.25] stroke-current opacity-0 blur-sm transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:blur-none"
                    d="M12 2.25V4.5M17.834 4.666L16.243 6.257M20.25 10.5H18M7.757 14.743L6.167 16.333M6 10.5H3.75M7.757 6.257L6.167 4.667"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    className="origin-center -translate-x-1 -translate-y-1 scale-105 stroke-current transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100"
                    d="M14.868 21.317L13.51 16.245M13.51 16.245L11 18.47L11.569 9L16.796 16.917L13.51 16.245Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h2 className="text-3xl font-bold">
                  One-Click <br />
                  access
                </h2>
              </div>
              <div className="group flex flex-col items-center justify-center text-center">
                <svg
                  className="mb-5 h-[4.5rem] w-[4.5rem] stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path
                    d="M6 8h.01"
                    className="transition delay-200 duration-200 group-hover:translate-x-1"
                  />
                  <path
                    d="M10 8h.01"
                    className="transition delay-100 duration-400 group-hover:translate-x-1"
                  />
                  <path
                    d="M14 8h.01"
                    className="transition duration-500 group-hover:translate-x-1"
                  />
                </svg>
                <h2 className="text-3xl font-bold">
                  Menubar <br />
                  application
                </h2>
              </div>
              <div className="group relative flex flex-col items-center justify-center text-center">
                <svg
                  className="mb-5 h-[4.5rem] w-[4.5rem] overflow-visible fill-current"
                  viewBox="0 0 28 28"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    className="origin-[50%_40%] scale-[0.25] opacity-0 blur-sm transition duration-300 group-hover:-translate-x-1 group-hover:-translate-y-2 group-hover:scale-50 group-hover:opacity-100 group-hover:blur-none"
                    d="M6 15.5402C6 15.9972 6.35156 16.3371 6.84375 16.3371H13.4648L9.97266 25.8293C9.51562 27.0363 10.7695 27.6808 11.5547 26.6965L22.207 13.384C22.4062 13.1379 22.5117 12.9035 22.5117 12.634C22.5117 12.1887 22.1602 11.8371 21.668 11.8371H15.0469L18.5391 2.34491C18.9961 1.13787 17.7422 0.493343 16.957 1.48944L6.30469 14.7902C6.10547 15.048 6 15.2824 6 15.5402Z"
                  ></path>
                  <path
                    className="origin-center transition duration-300 group-hover:translate-x-1 group-hover:delay-100"
                    d="M6 15.5402C6 15.9972 6.35156 16.3371 6.84375 16.3371H13.4648L9.97266 25.8293C9.51562 27.0363 10.7695 27.6808 11.5547 26.6965L22.207 13.384C22.4062 13.1379 22.5117 12.9035 22.5117 12.634C22.5117 12.1887 22.1602 11.8371 21.668 11.8371H15.0469L18.5391 2.34491C18.9961 1.13787 17.7422 0.493343 16.957 1.48944L6.30469 14.7902C6.10547 15.048 6 15.2824 6 15.5402Z"
                  ></path>
                </svg>
                <h2 className="relative z-10 text-3xl font-bold">
                  {" "}
                  Blazing fast
                  <br /> native app{" "}
                </h2>
              </div>
            </div>
          </div>
          <div className="mt-24 flex items-center justify-center">
            <ButtonAppStore dark></ButtonAppStore>
          </div>
        </section>
      </div>
    </>
  );
}
