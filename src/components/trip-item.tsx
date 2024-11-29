"use client";

import { ITripItem } from "@/types";

function TripItem({ title, summary, images }: ITripItem) {
  return (
    <div className="grid gap-3">
      <h1 className="font-display text-2xl font-medium">{title}</h1>
      <p className="pb-2">{summary}</p>
      <ul className="grid gap-6">
        {images.map((item) => {
          return (
            <li key={item.src}>
              <img className="rounded-xl" src={item.src} alt={item.alt} />
              <p className="pt-2 italic">&mdash; {item.alt}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TripItem;
