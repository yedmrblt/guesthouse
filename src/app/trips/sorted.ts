import { allTrips } from "@content";
import { parse } from "date-fns";

export const tripsSortedByDate = allTrips.toSorted(
  (a, b) =>
    parse(b.date, "MM.yyyy", new Date()).getTime() -
    parse(a.date, "MM.yyyy", new Date()).getTime(),
);
