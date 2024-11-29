import { Social, SocialButton } from "@/components/social";
import Container from "@/components/container";
import { SOCIAL } from "@/lib/const";
import { IconBrandInstagram, IconBrandX } from "@tabler/icons-react";

export default function Index() {
  return (
    <>
      <Container className="space-y-8">
        <header>
          <h1 className="font-display pb-3 text-3xl font-semibold">
            Emre Demirbulut
          </h1>
          <h2 className="font-display text-mute pb-1 text-2xl">
            Software Engineer at{" "}
            <a href="https://tuimusement.com" className="italic">
              TUI Musement
            </a>
          </h2>
          <h2 className="font-display text-mute pb-1 text-2xl">
            Co-founder of{" "}
            <a href="https://turkishcitywonders.com" className="italic">
              TurkishCityWonders
            </a>
          </h2>
          <h2 className="font-display text-mute text-2xl">Trabzon, TÜRKİYE</h2>
        </header>

        <p>
          I’m a software engineer who loves turning complex problems into
          simple, elegant solutions. I’m passionate about Good Design principles
          and believe in{" "}
          <b>whatever is worth doing at all, is worth doing well.</b>
        </p>

        <p>
          Beyond my work, I enjoy exploring new destinations, gaining
          inspiration from the world around me.
        </p>

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
