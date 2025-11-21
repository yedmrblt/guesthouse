import React from "react";
import cx from "@/lib/cx";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cx(
        "rounded border border-gray-400 px-[3px] py-px text-[0.7rem] whitespace-nowrap text-gray-500 uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}
