import Container from "@/components/container";
import { Metadata } from "next";
import Books from "./books";

export const metadata: Metadata = {
  title: "Readings",
  description:
    "A curated collection of books I've read and am currently exploring. Dive into my reading journey!",
};

export default function TripsPage() {
  return (
    <>
      <Container className="space-y-8">
        <h1 className="font-display text-2xl">{metadata.description}</h1>
      </Container>

      <Container className="mt-8 sm:mt-16">
        <Books />
      </Container>
    </>
  );
}
