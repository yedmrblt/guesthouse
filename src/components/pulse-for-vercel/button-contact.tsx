"use client";

import { SOCIAL } from "@/lib/const";

export default function ButtonContact() {
  return (
    <a
      className="group bg-opacity-5 sm:bg-opacity-0 m-0 inline-flex items-center rounded-2xl bg-orange-950/5 px-5 py-4 text-lg font-bold transition duration-300 outline-none hover:bg-orange-950/5 sm:bg-transparent"
      href={`mailto:${SOCIAL.email}`}
      aria-label="Contact us"
    >
      <svg
        className="size-[22px] origin-bottom fill-current transition duration-300 group-hover:-rotate-12 sm:mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 28 28"
        aria-hidden="true"
      >
        <path d="M13.8906 26.9805C14.418 26.9805 14.9102 26.7578 15.3789 25.9492L17.5469 22.3281H21.4609C24.9531 22.3281 26.8281 20.3945 26.8281 16.9609V7.98438C26.8281 4.55078 24.9531 2.61719 21.4609 2.61719H6.36719C2.875 2.61719 1 4.53906 1 7.98438V16.9609C1 20.4062 2.875 22.3281 6.36719 22.3281H10.2344L12.4023 25.9492C12.8711 26.7578 13.3633 26.9805 13.8906 26.9805Z"></path>
      </svg>
      <span className="hidden sm:block">Contact</span>
    </a>
  );
}
