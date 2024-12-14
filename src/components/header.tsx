"use client";

import NextLink from "next/link";
import { useEffect, useState } from "react";
import cx from "@/lib/cx";
import Container from "./container";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { IconSelector } from "@tabler/icons-react";

export const MENU = {
  "/": "About me",
  "/trips": "Trips",
  "/readings": "Readings",
  "/pulse-for-vercel": "Pulse for Vercel",
};

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const segment = useSelectedLayoutSegment();
  const pathname = usePathname();
  const path = segment ? `/${segment}` : "/";

  useEffect(() => {
    setIsNavOpen(false);
  }, [pathname]);

  return (
    <header className="pt-6">
      <Container>
        <nav className={cx(isNavOpen ? "flex" : "hidden", "flex-col gap-4")}>
          {Object.entries(MENU).map(([key, value]) => {
            const isActive = key === path;
            return (
              <NextLink
                key={key}
                href={key}
                className={cx(
                  "grow hover:opacity-100",
                  isActive ? "text-mute !no-underline" : "",
                )}
              >
                {value}
              </NextLink>
            );
          })}
        </nav>

        {!isNavOpen && (
          <button
            type="button"
            className="flex items-center gap-1 opacity-60 select-none"
            onClick={() => {
              setIsNavOpen(true);
            }}
          >
            {MENU[path as keyof typeof MENU]}
            <IconSelector stroke={2} size={16} className="opacity-60" />
          </button>
        )}
      </Container>
    </header>
  );
}
