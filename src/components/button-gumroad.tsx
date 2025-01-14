"use client";

import cx from "@/lib/cx";
export default function ButtonGumroad({ className }: { className?: string }) {
  return (
    <a
      className={cx(
        "group relative inline-flex max-h-[3.75rem] items-center justify-center overflow-hidden rounded-2xl bg-stone-800 px-5 py-4 pl-[3.25rem] text-lg font-bold text-orange-50 shadow-xl shadow-stone-800/25 transition duration-300 outline-none after:absolute after:inset-0 after:hidden after:rounded-2xl after:shadow-2xl after:shadow-stone-800/25 after:content-[''] sm:flex sm:shadow-stone-800/25 sm:after:block",
        className,
      )}
      href="https://emredemirbulut.gumroad.com/l/pulse-for-vercel"
      aria-label="Download for Mac"
    >
      <div className="ease absolute left-5 translate-x-0 opacity-100 transition duration-300 group-hover:-translate-x-full group-hover:scale-x-50 group-hover:opacity-0 group-hover:blur-sm">
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.8151 22.8374C18.4402 22.8374 23.0002 18.2773 23.0002 12.6522C23.0002 7.02709 18.4402 2.46704 12.8151 2.46704C7.18993 2.46704 2.62988 7.02709 2.62988 12.6522C2.62988 18.2773 7.18993 22.8374 12.8151 22.8374Z"
            fill="black"
          />
          <path
            d="M11.4021 21.8051C17.1474 21.8051 21.8048 17.1477 21.8048 11.4024C21.8048 5.65767 17.1474 1 11.4021 1C5.6574 1 1 5.6574 1 11.4027C1 17.1474 5.6574 21.8051 11.4027 21.8051H11.4021Z"
            fill="#FF90E8"
            stroke="black"
            strokeWidth="1.557"
          />
          <path
            d="M10.5185 16.536C7.53505 16.536 5.78027 14.1432 5.78027 11.1664C5.78027 8.07288 7.71077 5.56323 11.396 5.56323C15.1987 5.56323 16.4857 8.13146 16.544 9.59061H13.7946C13.736 8.77331 13.0342 7.54763 11.3375 7.54763C9.52412 7.54763 8.354 9.12338 8.354 11.0498C8.354 12.9761 9.52412 14.5516 11.3377 14.5516C12.9756 14.5516 13.6777 13.2674 13.97 11.9837H11.3375V10.9332H16.8614V16.3025H14.4381V12.9173C14.2626 14.1432 13.502 16.536 10.5185 16.536Z"
            fill="black"
          />
        </svg>
      </div>
      <div className="ease translate-x-0 transition duration-300 group-hover:-translate-x-8">
        {" "}
        Buy on Gumroad{" "}
      </div>
      <div className="ease absolute right-5 translate-x-full scale-x-50 opacity-0 blur-sm transition duration-300 group-hover:translate-x-0 group-hover:scale-x-100 group-hover:opacity-100 group-hover:blur-none">
        <svg
          className="h-6 w-6 fill-transparent stroke-current stroke-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
        </svg>
      </div>
    </a>
  );
}
