"use client";

import cx from "@/lib/cx";
export default function ButtonAppStore({
  dark,
  className,
}: {
  dark?: boolean;
  className?: string;
}) {
  return (
    <a
      className={cx(
        "group relative inline-flex max-h-[3.75rem] items-center justify-center overflow-hidden rounded-2xl px-5 py-4 pl-[3.25rem] text-lg font-bold transition duration-300 outline-none sm:flex",
        dark
          ? "bg-stone-800 text-orange-50 shadow-xl shadow-stone-800/25 after:absolute after:inset-0 after:hidden after:rounded-2xl after:shadow-2xl after:shadow-stone-800/25 after:content-[''] sm:shadow-stone-800/25 sm:after:block"
          : "bg-orange-950/5",
        className,
      )}
      href="/download"
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
            stroke-width="1.557"
          />
          <path
            d="M10.5185 16.536C7.53505 16.536 5.78027 14.1432 5.78027 11.1664C5.78027 8.07288 7.71077 5.56323 11.396 5.56323C15.1987 5.56323 16.4857 8.13146 16.544 9.59061H13.7946C13.736 8.77331 13.0342 7.54763 11.3375 7.54763C9.52412 7.54763 8.354 9.12338 8.354 11.0498C8.354 12.9761 9.52412 14.5516 11.3377 14.5516C12.9756 14.5516 13.6777 13.2674 13.97 11.9837H11.3375V10.9332H16.8614V16.3025H14.4381V12.9173C14.2626 14.1432 13.502 16.536 10.5185 16.536Z"
            fill="black"
          />
        </svg>

        {/* <svg
          className="h-6 w-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M19.37 7.648c-.114.088-2.11 1.213-2.11 3.715 0 2.894 2.54 3.918 2.616 3.944-.011.062-.403 1.402-1.34 2.767-.834 1.201-1.706 2.4-3.032 2.4s-1.667-.77-3.198-.77c-1.492 0-2.022.796-3.235.796-1.214 0-2.06-1.112-3.033-2.477C4.911 16.42 4 13.93 4 11.566c0-3.791 2.465-5.802 4.891-5.802 1.29 0 2.364.847 3.173.847.77 0 1.972-.897 3.438-.897.556 0 2.553.05 3.867 1.934Zm-4.564-3.54c.607-.719 1.036-1.718 1.036-2.716 0-.138-.012-.279-.037-.392-.987.037-2.161.657-2.87 1.478-.555.632-1.074 1.63-1.074 2.643 0 .152.026.304.037.353.063.011.164.025.266.025.885 0 1.998-.593 2.642-1.39Z"></path>
        </svg> */}
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
