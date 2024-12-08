"use client";

import { useEffect, useState } from "react";
import { IBook } from "@/types";

function Book({ coverSrc, name, status }: IBook) {
  const [rotation, setRotation] = useState(0);
  useEffect(() => {
    setRotation(Math.floor(Math.random() * 6) - 3);
  }, []);
  return (
    <div
      className={`m-0 ease-in-out relative grid origin-center cursor-default [break-inside:avoid] transition hover:rotate-0`}
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      {status === "reading" && (
        <div className="w-4 left-8 -top-4 h-20 absolute rounded bg-orange-600 shadow-sm"></div>
      )}
      <div className="relative h-fit">
        <div className="ease-in-out rounded-[2px] shadow-[6px_6px_18px_-2px_rgba(0,0,0,0.2),24px_28px_40px_-6px_rgba(0,0,0,0.1)]">
          <img
            src={coverSrc}
            alt={name}
            className="col-span-full row-span-full w-full rounded-[2px]"
          />
          <div className="ease top-0 absolute z-[5] ml-[16px] h-full w-[20px] border-l-[2px] border-l-[#00000010] bg-gradient-to-r from-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0)]"></div>
        </div>
      </div>
    </div>
  );
}

export default Book;
