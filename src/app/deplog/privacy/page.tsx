import Container from "@/components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deplog - Privacy Policy",
  description: "Monitor Vercel deployments real-time on your Mac menu bar.",
};

export default function PulseForVercel() {
  return (
    <>
      <Container className="mt-8 sm:mt-16">
        <h1 className="relative flex flex-col items-start text-left text-5xl leading-[1.05] font-bold tracking-tight delay-50 sm:text-7xl sm:leading-none">
          Privacy policy
        </h1>
        <p className="my-10">
          No data or personal information is collected by Deplog.
        </p>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Have questions?</h2>
          <p>
            If you have any questions or suggestions regarding this privacy
            policy, do not hesitate to{" "}
            <a href="mailto:y.emre.demirbulut@gmail.com" className="underline">
              contact me
            </a>
            .
          </p>
        </div>
      </Container>
    </>
  );
}
