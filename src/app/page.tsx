import { Social, SocialButton } from "@/components/social";
import Container from "@/components/container";
import { SOCIAL } from "@/lib/const";
import { IconBrandInstagram, IconBrandX } from "@tabler/icons-react";

export default function Index() {
  return (
    <>
      <Container className="space-y-8" size="large">
        <header>
          <h1 className="text-mute font-display pb-3 text-4xl font-semibold">
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
      </Container>
    </>
  );
}
