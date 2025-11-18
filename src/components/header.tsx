"use client";

import NextLink from "next/link";
import cx from "@/lib/cx";
import Container from "./container";
import { useSelectedLayoutSegment } from "next/navigation";

export const MENU = {
  "/": "About me",
  "/trips": "Trips",
  "/readings": "Readings",
  "/deplog": "Deplog App",
};

export default function Header() {
  const segment = useSelectedLayoutSegment();
  const path = segment ? `/${segment}` : "/";

  return (
    <header className="fixed right-0 bottom-0 left-0 z-10 pb-6">
      <Container>
        <nav
          className="mx-auto mb-4 flex w-fit gap-2 rounded-full p-[5px] backdrop-blur-md"
          style={{ background: "linear-gradient(#ffffffb3 0%,#ffffff8c 100%)" }}
        >
          {Object.entries(MENU).map(([key, value]) => {
            const isActive = key === path;
            return (
              <NextLink
                key={key}
                href={key}
                className={cx(
                  "w-auto rounded-full p-2 text-center text-xs font-semibold sm:px-4 sm:py-2 md:text-sm",
                  isActive
                    ? "bg-orange-500 text-white !no-underline hover:!text-white"
                    : "hover:bg-orange-100",
                )}
              >
                {value}
              </NextLink>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
