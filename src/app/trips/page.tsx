import Container from "@/components/container";
import Trips from "./trips";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trips",
  description:
    "I love exploring vibrant cities and capture unforgettable moments. Each journey brings new stories, discoveries, and memories to share.",
};

export default function TripsPage() {
  return (
    <>
      <Container className="space-y-8">
        <h1 className="font-display text-2xl">{metadata.description}</h1>
      </Container>

      <Container className="mt-8 sm:mt-16">
        <Trips />
      </Container>
    </>
  );
}
