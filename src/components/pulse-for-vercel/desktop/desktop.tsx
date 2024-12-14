"use client";

import MenuBar from "./menu-bar";
import PulseApp from "./pulse-app";

export default function Desktop() {
  return (
    <div className="relative h-full w-full sm:aspect-[2/1]">
      <MenuBar></MenuBar>
      <PulseApp></PulseApp>
      <div className="absolute top-0 right-0 left-0 h-48 w-full overflow-hidden rounded-[2.5rem] bg-stone-900 sm:h-full sm:rounded-[3rem]">
        <picture>
          <img
            className="aspect-video h-96 w-full object-cover blur select-none sm:h-auto sm:blur-none"
            src="/pulse-for-vercel/wallpaper.webp"
            alt="Wallpaper"
          />
        </picture>
      </div>
    </div>
  );
}
