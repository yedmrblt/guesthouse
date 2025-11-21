import { Social, SocialButton } from "@/components/social";
import Container from "@/components/container";
import { SOCIAL } from "@/lib/const";
import Image from "next/image";
import { Badge } from "@/components/badge";
import { IconBrandInstagram, IconBrandX } from "@tabler/icons-react";

export default function Index() {
  return (
    <>
      <Container className="space-y-8" size="large">
        <header>
          <h1 className="text-mute font-display pb-3 text-3xl font-semibold sm:text-4xl">
            Emre Demirbulut
          </h1>
          <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl">
            Software engineer who loves turning complex problems into simple,
            elegant solutions. Co-founder at{" "}
            <a
              href="https://turkishcitywonders.com"
              target="_blank"
              className="hover:text-primary"
            >
              TurkishCityWonders
            </a>
            . Creator of the{" "}
            <a
              href="https://trydeplog.com"
              target="_blank"
              className="hover:text-primary"
            >
              Deplog
            </a>{" "}
            and Software Engineer at{" "}
            <a
              href="https://tuimusement.com"
              target="_blank"
              className="hover:text-primary"
            >
              TUI Musement
            </a>
            .
          </h2>
        </header>

        <ul>
          <li className="text-mute pb-2 text-sm font-bold">Experience</li>
          <div className="space-y-2 sm:space-y-0">
            <li className="flex flex-col text-base sm:flex-row sm:gap-1">
              <div className="flex gap-1">
                <span className="font-bold">Creator,</span>
                <span>
                  <a
                    className="text-mute font-semibold"
                    href="https://trydeplog.com"
                    target="_blank"
                  >
                    Deplog
                  </a>
                  ,
                </span>
              </div>
              <span className="text-mute font-semibold">2025—present</span>
            </li>
            <li className="flex flex-col text-base sm:flex-row sm:gap-1">
              <div className="flex gap-1">
                <span className="font-bold">Co-founder,</span>
                <span>
                  <a
                    className="text-mute font-semibold"
                    href="https://turkishcitywonders.com"
                    target="_blank"
                  >
                    TurkishCityWonders
                  </a>
                  ,
                </span>
              </div>
              <span className="text-mute font-semibold">2022—present</span>
            </li>
            <li className="flex flex-col text-base sm:flex-row sm:gap-1">
              <div className="flex gap-1">
                <span className="font-bold">Software Engineer,</span>
                <span>
                  <a
                    className="text-mute font-semibold"
                    href="https://tuimusement.com"
                    target="_blank"
                  >
                    TUI Musement
                  </a>
                  ,
                </span>
              </div>
              <span className="text-mute font-semibold">2021—present</span>
            </li>
            <li className="flex flex-col text-base sm:flex-row sm:gap-1">
              <div className="flex gap-1">
                <span className="font-bold">Full-Stack Developer,</span>
                <span>
                  <a
                    className="text-mute font-semibold"
                    href="https://zenofontours.com"
                    target="_blank"
                  >
                    Zenofon Tours
                  </a>
                  ,
                </span>
              </div>
              <span className="text-mute font-semibold">2018—2021</span>
            </li>
          </div>
        </ul>

        <Social>
          <SocialButton
            href={`mailto:${SOCIAL.email}`}
            className="bg-default w-auto px-4 text-white"
          >
            Email
          </SocialButton>

          <SocialButton href={SOCIAL.instagram}>
            <IconBrandInstagram stroke={1.5} size={24} />
          </SocialButton>

          <SocialButton href={SOCIAL.x}>
            <IconBrandX stroke={1.5} size={24} />
          </SocialButton>
        </Social>

        <div className="rounded-4xl bg-stone-200 p-6 md:p-12">
          <div className="grid grid-cols-1">
            <Image
              src="/photos/works/deplog/deplog_website.png"
              width={1067}
              height={826}
              alt="Deplog website"
            />
          </div>
          <div className="mt-4 flex flex-col gap-0 md:mt-12">
            <h2 className="pb-0 text-sm font-bold">Deplog</h2>
            <span className="text-mute text-sm font-medium">
              Website, Web App
            </span>
            <div className="space-x-1">
              <Badge>TYPESCRIPT</Badge>
              <Badge>REACT</Badge>
              <Badge>NEXT</Badge>
            </div>
          </div>
        </div>

        <div className="relative rounded-4xl bg-stone-200">
          <video
            src="./photos/works/deplog/deplog.mp4"
            autoPlay
            muted
            loop
            preload="none"
            className="w-100 h-100 top-0 left-0 rounded-4xl object-cover"
          />
          <div className="absolute bottom-6 left-6 z-1 flex flex-col gap-0 md:bottom-12 md:left-12">
            <h2 className="pb-0 text-sm font-bold text-white">Deplog</h2>
            <span className="text-sm font-medium text-zinc-300">
              Personal Project, MacOS
            </span>
            <div className="space-x-1">
              <Badge>SWIFT UI</Badge>
            </div>
          </div>
        </div>

        <div className="rounded-4xl bg-stone-200 p-6 md:p-12">
          <div className="grid grid-cols-3 gap-10">
            <Image
              src="/photos/works/tuimm/tuimm_1.png"
              width={329}
              height={648}
              alt="TUI Musement booking form"
            />
            <Image
              src="/photos/works/tuimm/tuimm_2.png"
              width={329}
              height={648}
              alt="TUI Musement booking form pickup point selection secreen"
            />
            <Image
              src="/photos/works/tuimm/tuimm_3.png"
              width={329}
              height={648}
              alt="TUI Musement booking form cart confirmation screen"
            />
          </div>
          <div className="mt-4 flex flex-col gap-0 md:mt-12">
            <h2 className="pb-0 text-sm font-bold">TUI Musement</h2>
            <span className="text-mute text-sm font-medium">
              Booking Form, Web App
            </span>
            <div className="space-x-1">
              <Badge>TYPESCRIPT</Badge>
              <Badge>VUE.JS</Badge>
              <Badge>NUXT</Badge>
            </div>
          </div>
        </div>

        <div className="rounded-4xl bg-stone-200 p-6 md:p-12">
          <div className="grid grid-cols-1">
            <Image
              src="/photos/works/tuimm/tuimm_4.png"
              width={1067}
              height={826}
              alt="TUI Musement checkout page"
            />
          </div>
          <div className="mt-4 flex flex-col gap-0 md:mt-12">
            <h2 className="pb-0 text-sm font-bold">TUI Musement</h2>
            <span className="text-mute text-sm font-medium">
              Checkout, Web App
            </span>
            <div className="space-x-1">
              <Badge>TYPESCRIPT</Badge>
              <Badge>VUE.JS</Badge>
              <Badge>NUXT</Badge>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
