import Container from "@/components/container";
import ButtonGumroad from "@/components/button-gumroad";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pulse for Vercel",
  description: "Monitor Vercel deployments real-time on your Mac menu bar.",
};

export default function PulseForVercel() {
  return (
    <>
      <Container className="mt-8 sm:mt-16">
        <h1 className="text-leftcenter relative flex flex-col items-start text-5xl leading-[1.05] font-bold tracking-tight delay-50 sm:text-7xl sm:leading-none">
          <span className="inline-block">
            <span className="relative">
              <span>Vercel</span>
            </span>
            <span> deployments</span>
          </span>
          <span>
            on your{" "}
            <mark className="relative bg-transparent shadow-[inset_0_-0.5em_0_0_#F5A623]">
              <svg
                className="absolute -bottom-0.5 -left-0.5 size-[3.25rem] fill-current sm:-bottom-1.5 sm:-left-2 sm:size-[6.25rem]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19.37 7.648c-.114.088-2.11 1.213-2.11 3.715 0 2.894 2.54 3.918 2.616 3.944-.011.062-.403 1.402-1.34 2.767-.834 1.201-1.706 2.4-3.032 2.4s-1.667-.77-3.198-.77c-1.492 0-2.022.796-3.235.796-1.214 0-2.06-1.112-3.033-2.477C4.911 16.42 4 13.93 4 11.566c0-3.791 2.465-5.802 4.891-5.802 1.29 0 2.364.847 3.173.847.77 0 1.972-.897 3.438-.897.556 0 2.553.05 3.867 1.934Zm-4.564-3.54c.607-.719 1.036-1.718 1.036-2.716 0-.138-.012-.279-.037-.392-.987.037-2.161.657-2.87 1.478-.555.632-1.074 1.63-1.074 2.643 0 .152.026.304.037.353.063.011.164.025.266.025.885 0 1.998-.593 2.642-1.39Z"></path>
              </svg>
              <span className="pl-[46px] sm:pl-[5.25rem]">Mac</span>
            </mark>
          </span>
        </h1>
        <div className="mt-12 flex items-center justify-start">
          <ButtonGumroad></ButtonGumroad>
        </div>
        <img
          src="/pulse-for-vercel/pulse.gif"
          alt="An animated gif shows how pulse for vercel app works"
          className="mt-12 rounded-2xl shadow-xl"
        />
        <p className="mt-12 text-lg">
          Monitor your Vercel deployments real-time on your Mac—no need to open
          the web app! With Pulse for Vercel, all your deployment updates are
          just one click away, right from your Mac’s menu bar.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="group flex flex-col items-center justify-center rounded-2xl bg-lime-200 py-8 text-center">
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
          <div className="group flex flex-col items-center justify-center rounded-2xl bg-blue-200 py-8 text-center">
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
          <div className="group flex flex-col items-center justify-center rounded-2xl bg-red-200 py-8 text-center">
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
          <div className="group relative flex flex-col items-center justify-center rounded-2xl bg-violet-200 py-8 text-center">
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
        <div className="mt-16">
          <h2 className="font-display mt-8 text-2xl font-medium">Features</h2>
          <ul className="mt-4 list-disc space-y-2 pl-8">
            <li>
              <strong>Quick Access:</strong> View your latest Vercel deployments
              instantly with a single click—no browser required.
            </li>
            <li>
              <strong>Real-Time Updates:</strong> Always stay up-to-date with
              live deployment information.
            </li>
            <li>
              <strong>Detailed Insights:</strong> Check deployment status,
              commit names, branches, and creation dates easily.
            </li>
            <li>
              <strong>Secure by Design:</strong> Your Vercel Access Token is
              stored safely in your Mac’s Keychain.
            </li>
            <li>
              <strong>Blazing Performance:</strong> Native macOS app means
              lightning-fast speed and responsiveness.
            </li>
            <li>
              <strong>Lightweight & Unobtrusive:</strong> Designed to blend
              seamlessly into your workflow.
            </li>
            <li>
              <strong>Light & Dark Mode:</strong> Matches your macOS theme for a
              cohesive experience.
            </li>
          </ul>
        </div>
        <div className="mt-12 flex items-center justify-center">
          <ButtonGumroad></ButtonGumroad>
        </div>
      </Container>
    </>
  );
}
