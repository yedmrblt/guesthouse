"use client";

import ButtonGumroad from "./button-gumroad";

export default function Hero() {
  return (
    <section className="ju mb-14 flex w-full flex-col items-center sm:mb-20 xl:w-4/5 xl:max-w-screen-lg">
      <h1 className="relative flex flex-col items-center text-center text-5xl leading-[1.05] font-bold tracking-tight delay-50 sm:text-8xl sm:leading-none">
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
      <div className="mt-12 flex flex-col items-start space-y-6 delay-700 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-7">
        <ButtonGumroad />
      </div>
    </section>
  );
}
