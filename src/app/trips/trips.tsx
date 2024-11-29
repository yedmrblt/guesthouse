import { PlusCircleIcon } from "lucide-react";
import { allTrips, Trip } from "@content";
import TripItem from "@/components/trip-item";

export default function Trips() {
  return (
    <div className="flex flex-col items-stretch gap-12">
      {allTrips.map((trip: Trip) => {
        return (
          <div
            className="flex flex-col items-start gap-6 md:flex-row md:gap-12"
            key={trip.title}
          >
            <div className="flex items-center">
              <h2 className="text-lg font-bold">{trip.date}</h2>
              <hr className="my-0 ml-4 flex-1 border-dashed border-gray-200" />
            </div>
            <section>
              <div className="relative flex pb-2 last:pb-0">
                <div className="absolute inset-0 flex w-6 items-center justify-center">
                  <div className="pointer-events-none h-full w-px border-l border-gray-200"></div>
                </div>
                <div className="z-0 mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-black align-middle text-white">
                  <PlusCircleIcon className="h-5 w-5"></PlusCircleIcon>
                </div>
                <div className="grow pl-8">
                  <TripItem
                    key={trip.title}
                    title={trip.title}
                    summary={trip.summary}
                    images={trip.images}
                  ></TripItem>
                </div>
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
}
